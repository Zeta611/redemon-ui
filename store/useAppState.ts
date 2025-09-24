import { create, ExtractState, StoreApi, UseBoundStore } from "zustand";
import { combine } from "zustand/middleware";
import samples from "@/shared/samples";
import {
  action,
  action_type,
  edit,
  extractParams,
  index,
  label,
  path,
  synthesize,
  timeline,
  timelineToDemoSteps,
} from "@/shared/lang.gen";
import { fromArray } from "@/shared/utils";
import { TimelineInfo } from "@/shared/types";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

function eq<T>(x: T, y: T): boolean {
  return JSON.stringify(x) === JSON.stringify(y);
}

// Append an edit to the timeline, merging with the last edit if possible.
function appendEdit(t: timeline, p: path, e: edit): timeline {
  if (t.length !== 0) {
    const last = t[t.length - 1];
    if (
      last.TAG === "Edit" &&
      eq(last._0, p) &&
      last._1.TAG === "ConstReplace" &&
      e.TAG === "ConstReplace"
    ) {
      return [...t.slice(0, -1), edit(p, e)];
    }
  }
  return [...t, edit(p, e)];
}

// Append an action to the timeline, merging with the last action if possible.
function appendAction(t: timeline, a: action): timeline {
  if (t.length !== 0) {
    const last = t[t.length - 1];
    if (
      last.TAG === "Action" &&
      eq(last._0.label, a.label) &&
      last._0.action_type === "Input" &&
      a.action_type === "Input"
    ) {
      return [
        ...t.slice(0, -1),
        action({ label: a.label, action_type: "Input", arg: a.arg }),
      ];
    }
  }
  return [...t, action(a)];
}

export type AppState = ExtractState<typeof useAppState>;

export const useAppState = createSelectors(
  create(
    combine(
      {
        chosenSample: null as string | null,
        sketch: "",
        lockedSketch: null as string | null,
        timelines: [] as TimelineInfo[],
        workingTimelineIdx: 0 as number | null,
        synthesized: "",
        synthesizing: false,
      },

      (set, get) => ({
        chooseSample: (sampleName: string | null) => {
          const [sketch, timelines] = sampleName
            ? (samples.get(sampleName) ?? ["", []])
            : ["", []];
          set({
            chosenSample: sampleName,
            sketch,
            lockedSketch: null,
            timelines,
            workingTimelineIdx: null,
          });
        },

        setSketch: (sketch: string) => set({ sketch }),

        lockSketch: () =>
          set((state) => {
            if (state.lockedSketch !== null) {
              console.error("Sketch is already locked");
              return state;
            }
            return { lockedSketch: state.sketch };
          }),
        unlockSketch: () =>
          set((state) => {
            if (state.lockedSketch === null) {
              console.error("No locked sketch found");
              return state;
            }
            return {
              sketch: state.lockedSketch,
              lockedSketch: null,
              timelines: [{ timeline: [], snapshots: [] }],
              workingTimelineIdx: 0,
            };
          }),

        setWorkingTimeline: (idx: number | null) =>
          set((state) => {
            if (idx === null || idx >= state.timelines.length) {
              return {
                workingTimelineIdx: null,
                sketch: state.lockedSketch ?? "",
              };
            }
            return {
              workingTimelineIdx: idx,
              sketch:
                state.timelines[idx].snapshots.at(-1) ??
                state.lockedSketch ??
                "",
            };
          }),
        addTimeline: () =>
          set((state) => {
            if (state.lockedSketch === null) {
              console.warn("No locked sketch found");
              return state;
            }
            return {
              sketch: state.lockedSketch,
              timelines: [...state.timelines, { timeline: [], snapshots: [] }],
              workingTimelineIdx: state.timelines.length,
            };
          }),
        removeTimeline: (idx: number) =>
          set((state) => {
            if (state.lockedSketch === null) {
              console.warn("No locked sketch found");
              return state;
            }

            let timelines = state.timelines.filter((_, i) => i !== idx);
            if (timelines.length === 0) {
              timelines = [{ timeline: [], snapshots: [] }];
            }
            const workingTimelineIdx =
              state.workingTimelineIdx === null
                ? null
                : state.workingTimelineIdx >= idx
                  ? state.workingTimelineIdx === 0
                    ? null
                    : state.workingTimelineIdx - 1
                  : state.workingTimelineIdx;

            const sketch =
              workingTimelineIdx === null
                ? state.lockedSketch
                : (timelines[workingTimelineIdx].snapshots.at(-1) ??
                  state.lockedSketch ??
                  "");
            return {
              sketch,
              timelines,
              workingTimelineIdx,
            };
          }),
        resetTimelines: () =>
          set((state) => ({
            sketch: state.lockedSketch ?? "",
            timelines: [{ timeline: [], snapshots: [] }],
            workingTimelineIdx: 0,
          })),

        addActionToWorkingTimeline: (
          hole: number,
          action_type: action_type,
          arg?: string,
        ) =>
          set((state) => {
            if (state.workingTimelineIdx === null) {
              console.warn("No working timeline found");
              return state;
            }
            const workingIdx = state.workingTimelineIdx;
            return {
              timelines: state.timelines.map((info, i) => {
                if (i !== workingIdx) return info;
                const action = {
                  label: label(hole, null),
                  action_type,
                  arg,
                };
                return {
                  timeline: appendAction(info.timeline, action),
                  snapshots: [
                    ...info.snapshots,
                    info.snapshots.at(-1) ?? state.sketch,
                  ],
                };
              }),
            };
          }),

        addEditToWorkingTimeline: (path: number[], e: edit) =>
          set((state) => {
            if (state.workingTimelineIdx === null) {
              console.warn("No working timeline found");
              return state;
            }
            const workingIdx = state.workingTimelineIdx;
            return {
              timelines: state.timelines.map((info, i) =>
                i === workingIdx
                  ? {
                      timeline: appendEdit(
                        info.timeline,
                        fromArray(path.map(index)),
                        e,
                      ),
                      snapshots: [...info.snapshots, state.sketch],
                    }
                  : info,
              ),
            };
          }),

        revertTimelineUpTo: (timelineIdx: number, itemIdx: number) =>
          set((state) => {
            if (
              timelineIdx < 0 ||
              timelineIdx >= state.timelines.length ||
              itemIdx < 0 ||
              itemIdx >= state.timelines[timelineIdx].timeline.length
            ) {
              console.warn("Invalid revert indices", { timelineIdx, itemIdx });
              return state;
            }
            const info = state.timelines[timelineIdx];
            const newTimeline = info.timeline.slice(0, itemIdx + 1);
            const newSnapshots = info.snapshots.slice(0, itemIdx + 1);
            const timelines = state.timelines.map((t, i) =>
              i === timelineIdx
                ? {
                    timeline: newTimeline,
                    snapshots: newSnapshots,
                  }
                : t,
            );
            const sketch =
              state.workingTimelineIdx === timelineIdx
                ? (newSnapshots.at(-1) ?? state.sketch)
                : state.sketch;
            return { timelines, sketch };
          }),

        synthesizeWithSketchAndTimelines: async (
          apiKey: string | undefined,
        ) => {
          const { lockedSketch, synthesizing, timelines } = get();
          if (lockedSketch === null) {
            console.error("Sketch is not locked, cannot synthesize");
            return;
          }
          if (synthesizing) {
            console.info("Already synthesizing, ignoring the request");
            return;
          }
          set({ synthesizing: true });

          try {
            console.info(
              "Synthesizing with sketch and timelines:",
              lockedSketch,
              timelines,
            );
            const demoStepsArr = timelines.map(({ timeline }) =>
              timelineToDemoSteps([...timeline]),
            );
            console.debug("Demo steps array:", demoStepsArr);

            let result;
            try {
              // FIXME: This is a temporary workaround to work with the synthesis backend not catching exceptions.
              console.debug(
                "Synthesizing with sketch and timelines:",
                lockedSketch,
                demoStepsArr,
              );
              result = synthesize(lockedSketch, demoStepsArr);
            } catch (e) {
              console.error(
                "This is a bug. All exceptions should be handled",
                e,
              );

              const params = extractParams(lockedSketch, demoStepsArr);
              if (params.error) {
                console.error(
                  "This is a bug. Failed to extract params:",
                  params.error,
                );
                set({ synthesizing: false });
                return;
              }
              (async () => {
                const response = await fetch("/api/llm", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-gemini-api-key": apiKey ?? "",
                  },
                  body: JSON.stringify({ skeleton: params.code! }),
                });
                try {
                  const { code } = await response.json();
                  set({ synthesized: code });
                } catch (e) {
                  console.error("Failed to parse LLM response:", e);
                } finally {
                  set({ synthesizing: false });
                }
              })();
              return;
            }

            if (result.error) {
              console.info(
                "Synthesis failed using the enumerative backend:",
                result.error,
              );

              const params = extractParams(lockedSketch, demoStepsArr);
              if (params.error) {
                console.error(
                  "This is a bug. Failed to extract params:",
                  params.error,
                );
                set({ synthesizing: false });
                return;
              }
              (async () => {
                const response = await fetch("/api/llm", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-gemini-api-key": apiKey ?? "",
                  },
                  body: JSON.stringify({ skeleton: params.code! }),
                });
                try {
                  const { code } = await response.json();
                  set({ synthesized: code });
                } catch (e) {
                  console.error("Failed to parse LLM response:", e);
                } finally {
                  set({ synthesizing: false });
                }
              })();
            } else {
              console.info("Synthesis result:", result.code!);
              set({ synthesized: result.code!, synthesizing: false });
            }
          } catch (e) {
            console.error("This is a bug. All exceptions should be handled", e);
            set({ synthesizing: false });
          }
        },
      }),
    ),
  ),
);

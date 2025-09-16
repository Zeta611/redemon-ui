import { create, ExtractState } from "zustand";
import { combine } from "zustand/middleware";
import sampleSketches from "@/shared/sampleSketches";
import {
  action,
  action_type,
  edit,
  extractParams,
  index,
  label,
  synthesize,
  timeline,
  timelineToDemoSteps,
} from "@/shared/lang.gen";
import { fromArray } from "@/shared/utils";

type TimelineInfo = {
  timeline: timeline;
  finalSketch: string;
};

// NOTE: I may need to consult https://zustand.docs.pmnd.rs/guides/nextjs if I hit any issues.
export type AppState = ExtractState<typeof useAppState>;

export const useAppState = create(
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
        const sketch = sampleName ? sampleSketches.get(sampleName) || "" : "";
        set({
          chosenSample: sampleName,
          sketch,
          lockedSketch: null,
          timelines: [{ timeline: [], finalSketch: sketch }],
          workingTimelineIdx: 0,
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
            timelines: [{ timeline: [], finalSketch: state.lockedSketch }],
            workingTimelineIdx: 0,
          };
        }),

      setWorkingTimeline: (idx: number | null) =>
        set((state) => {
          if (idx === null || idx >= state.timelines.length) {
            return {
              workingTimelineIdx: null,
              sketch: state.lockedSketch || "",
            };
          }
          return {
            workingTimelineIdx: idx,
            sketch: state.timelines[idx].finalSketch,
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
            timelines: [
              ...state.timelines,
              { timeline: [], finalSketch: state.lockedSketch },
            ],
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
            timelines = [{ timeline: [], finalSketch: state.lockedSketch }];
          }
          const workingTimelineIdx =
            state.workingTimelineIdx === idx ? null : state.workingTimelineIdx;
          console.debug("Working timeline index:", workingTimelineIdx);
          const sketch =
            workingTimelineIdx === null
              ? state.lockedSketch
              : timelines[workingTimelineIdx].finalSketch;
          return {
            sketch,
            timelines,
            workingTimelineIdx,
          };
        }),
      resetTimelines: () =>
        set((state) => ({
          sketch: state.lockedSketch || "",
          timelines: [{ timeline: [], finalSketch: state.lockedSketch || "" }],
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
          return {
            timelines: state.timelines.map(
              ({ timeline: t, finalSketch: s }, i) => ({
                timeline:
                  i === state.workingTimelineIdx
                    ? [
                        ...t,
                        action({ label: label(hole, null), action_type, arg }),
                      ]
                    : t,
                finalSketch: s,
              }),
            ),
          };
        }),

      // TODO: replace this ugly getSketch hack
      addEditToWorkingTimeline: (
        getSketch: () => string,
        path: number[],
        e: edit,
      ) =>
        set((state) => {
          if (state.workingTimelineIdx === null) {
            console.warn("No working timeline found");
            return state;
          }
          return {
            timelines: state.timelines.map(
              ({ timeline: t, finalSketch: s }, i) => ({
                timeline:
                  i === state.workingTimelineIdx
                    ? [...t, edit(fromArray(path.map(index)), e)]
                    : t,
                finalSketch: i === state.workingTimelineIdx ? getSketch() : s,
              }),
            ),
          };
        }),

      synthesizeWithSketchAndTimelines: async (apiKey: string | undefined) => {
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
            console.error("This is a bug. All exceptions should be handled", e);

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
                  "x-gemini-api-key": apiKey || "",
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
                  "x-gemini-api-key": apiKey || "",
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
);

"use client";
import { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import TimelinePanes from "@/components/TimelinesPane";
import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";
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
import sampleSketches from "@/shared/sampleSketches";

type TimelineInfo = {
  timeline: timeline;
  sketch: string;
};

type WorkSpaceProps = {
  sampleName?: string;
};

export default function WorkSpace({ sampleName }: WorkSpaceProps) {
  const [chosenSample, setChosenSample] = useState(sampleName);
  const [sketch, setSketch] = useState(() =>
    chosenSample ? sampleSketches.get(chosenSample) || "" : "",
  );
  const [locked, setLocked] = useState(false);

  function setLockedAndResetSketchAndTimelines(locked: boolean) {
    if (!locked) {
      // If unlocking, reset sketch to the locked sketch and reset timelines
      // resetTimelines();
    }
    resetTimelines();
    setLocked(locked);
  }

  const lockHot = useRef(false);
  useEffect(() => {
    lockHot.current = locked;
  }, [locked]);
  const lockedSketch = useRef<string | null>(null);
  useEffect(() => {
    if (lockHot.current) {
      lockedSketch.current = sketch;
      // Lock is no longer hot after sktech is locked
      lockHot.current = false;
    } else if (!locked) {
      lockedSketch.current = null;
    }
  }, [sketch, locked]);

  const [synthesized, setSynthesized] = useState("");

  // [timeline, string] is a pair of a timeline and the final state of the sketch for that timeline.
  const [timelines, setTimelines] = useState<TimelineInfo[]>([
    { timeline: [], sketch },
  ]);
  const [workingTimeline, setWorkingTimeline] = useState<number | null>(0);

  // NOTE: If sampleName has changed, update the sketch and reset
  if (sampleName && chosenSample !== sampleName) {
    setChosenSample(sampleName);
    const sample = sampleSketches.get(sampleName);
    if (!sample) {
      console.error(`Sample sketch "${sampleName}" not found.`);
    } else {
      setLocked(false);
      resetTimelines();
      setSketch(sample);
    }
  }

  function setWorkingTimelineAndResetSketch(idx: number | null) {
    if (lockedSketch.current === null) {
      return;
    }
    setWorkingTimeline(idx);
    setSketch(idx === null ? lockedSketch.current : timelines[idx].sketch);
  }

  function addTimeline() {
    if (lockedSketch.current === null) {
      return;
    }
    const sketch = lockedSketch.current;
    setSketch(lockedSketch.current);

    setTimelines((timelines) => [...timelines, { timeline: [], sketch }]);
    setWorkingTimeline(timelines.length);
  }

  function removeTimeline(idx: number) {
    if (lockedSketch.current === null) {
      return;
    }
    const sketch = lockedSketch.current;
    setSketch(sketch);

    setTimelines((timelines) => timelines.filter((_, i) => i !== idx));
    setTimelines((timelines) =>
      timelines.length === 0 ? [{ timeline: [], sketch }] : timelines,
    );
    if (workingTimeline === idx) {
      setWorkingTimeline(null);
    }
  }

  // Reset timelines and recover sketch from lockedSketch
  function resetTimelines() {
    if (lockedSketch.current === null) {
      // Locking
      setTimelines([{ timeline: [], sketch }]);
      setWorkingTimeline(0);
      return;
    } else {
      // Unlocking
      const sketch = lockedSketch.current;
      setSketch(sketch);

      setTimelines([{ timeline: [], sketch }]);
      setWorkingTimeline(0);
    }
  }

  function addActionToTimeline(idx: number, a: action) {
    setTimelines((timelines) =>
      timelines.map(({ timeline: t, sketch: s }, i) => ({
        timeline: i === idx ? [...t, action(a)] : t,
        sketch: s,
      })),
    );
  }

  function addAction(hole: number, action_type: action_type, arg?: string) {
    if (workingTimeline !== null) {
      addActionToTimeline(workingTimeline, {
        label: label(hole, null),
        // TODO: Add support for other action types (just Input for now)
        action_type,
        arg,
      });
    }
  }

  function addEditToTimeline(
    idx: number,
    getSketch: () => string,
    path: number[],
    e: edit,
  ) {
    setTimelines((timelines) =>
      timelines.map(({ timeline: t, sketch: s }, i) => ({
        timeline: i === idx ? [...t, edit(fromArray(path.map(index)), e)] : t,
        sketch: i === idx ? getSketch() : s,
      })),
    );
  }

  function addEdit(getSketch: () => string, path: number[], edit: edit) {
    if (workingTimeline !== null) {
      addEditToTimeline(workingTimeline, getSketch, path, edit);
    }
  }

  function synthesizeWithSketchAndTimelines() {
    if (lockedSketch.current === null) {
      console.error("Sketch is not locked, cannot synthesize. This is a bug.");
      return;
    }
    const sketch = lockedSketch.current;

    try {
      console.info(
        "Synthesizing with sketch and timelines:",
        sketch,
        timelines,
      );
      const demoStepsArr = timelines.map(({ timeline }) =>
        timelineToDemoSteps([...timeline]),
      );
      console.debug("Demo steps array:", demoStepsArr);
      const result = synthesize(sketch, demoStepsArr);

      if (result.error) {
        console.info(
          "Synthesis failed using the enumerative backend:",
          result.error,
        );

        const params = extractParams(sketch, demoStepsArr);
        if (params.error) {
          console.error(
            "This is a bug. Failed to extract params:",
            params.error,
          );
          return;
        }
        (async () => {
          const response = await fetch("/api/llm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ skeleton: params.code! }),
          });
          const { code } = await response.json();

          setSynthesized(code);
        })();
      } else {
        console.info("Synthesis result:", result.code!);
        setSynthesized(result.code!);
      }
    } catch (e) {
      console.error("This is a bug. All exceptions should be handled", e);
    }
  }

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <SketchPane
              sketch={sketch}
              setSketch={setSketch}
              locked={locked}
              setLocked={setLockedAndResetSketchAndTimelines}
              addAction={addAction}
              addEdit={addEdit}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <SynthPane synthesized={synthesized} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} collapsible collapsedSize={8}>
        <TimelinePanes
          locked={locked}
          timelines={timelines.map(({ timeline }) => timeline)}
          addTimeline={addTimeline}
          removeTimeline={removeTimeline}
          resetTimelines={resetTimelines}
          workingTimeline={workingTimeline}
          setWorkingTimeline={setWorkingTimelineAndResetSketch}
          synthesize={synthesizeWithSketchAndTimelines}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

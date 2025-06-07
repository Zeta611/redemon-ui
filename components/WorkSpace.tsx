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
  edit,
  index,
  label,
  synthesize,
  timeline,
  timelineToDemoSteps,
} from "@/shared/lang.gen";
import { fromArray } from "@/shared/utils";

const sample = `<div className="flex flex-col items-center">
  <div className="font-semibold text-lg">
  {0}
  </div>
  <button
    className="border-none bg-stone-500 text-white px-2 py-1 rounded"
    onClick={$0}
  >
    Increment
  </button>
</div>
`;

export default function WorkSpace() {
  const [sketch, setSketch] = useState(sample);
  const [locked, setLocked] = useState(false);

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

  const [timelines, setTimelines] = useState<timeline[]>([[]]);
  const [workingTimeline, setWorkingTimeline] = useState<number | null>(0);

  function addTimeline() {
    setTimelines((timelines) => [...timelines, []]);
    setWorkingTimeline(timelines.length);
  }

  function removeTimeline(idx: number) {
    setTimelines((timelines) => timelines.filter((_, i) => i !== idx));
    setTimelines((timelines) => (timelines.length === 0 ? [[]] : timelines));
    if (workingTimeline === idx) {
      setWorkingTimeline(null);
    }
  }

  function resetTimelines() {
    setTimelines([[]]);
    setWorkingTimeline(null);
  }

  // function addSketchToTimeline(index: number, sketch: string) {
  //   setTimelines(
  //     timelines.map((timeline, i) => {
  //       if (i === index) {
  //         return [...timeline, { kind: "Sketch", sketch }];
  //       }
  //       return timeline;
  //     }),
  //   );
  // }
  //
  // function addSketch(sketch: string) {
  //   if (workingTimeline !== null) {
  //     addSketchToTimeline(workingTimeline, sketch);
  //   }
  // }

  function addActionToTimeline(idx: number, a: action) {
    setTimelines((timelines) =>
      timelines.map((timeline, i) =>
        i === idx ? [...timeline, action(a)] : timeline,
      ),
    );
  }

  function addAction(hole: number) {
    if (workingTimeline !== null) {
      addActionToTimeline(workingTimeline, {
        label: label(hole),
        // TODO: Add support for other action types (just Input for now)
        action_type: "Click",
      });
    }
  }

  function addEditToTimeline(idx: number, path: number[], e: edit) {
    setTimelines((timelines) =>
      timelines.map((timeline, i) =>
        i === idx
          ? [...timeline, edit(fromArray(path.map(index)), e)]
          : timeline,
      ),
    );
  }

  function addEdit(path: number[], edit: edit) {
    if (workingTimeline !== null) {
      addEditToTimeline(workingTimeline, path, edit);
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
      const demoSteps = timelineToDemoSteps([...timelines[0]]);
      console.debug("Demo steps:", demoSteps);
      const result = synthesize(sketch, demoSteps);
      if (result.error) {
        console.error("Synthesis error:", result.error);
        return;
      }

      console.info("Synthesis result:", result.code!);
      setSynthesized(result.code!);
    } catch (e) {
      console.error("Synthesis failed:", e);
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
              setLocked={setLocked}
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
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        collapsible
        collapsedSize={8}
      >
        <TimelinePanes
          locked={locked}
          timelines={timelines}
          addTimeline={addTimeline}
          removeTimeline={removeTimeline}
          resetTimelines={resetTimelines}
          workingTimeline={workingTimeline}
          setWorkingTimeline={setWorkingTimeline}
          synthesize={synthesizeWithSketchAndTimelines}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

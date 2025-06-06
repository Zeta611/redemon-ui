"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import TimelinePanes from "@/components/TimelinesPane";
import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";
import { Edit, type Timeline } from "@/components/Timeline";

const sample = `<div className="flex flex-col items-center">
  <div className="font-semibold text-lg">
    0
  </div>
  <button
    className="border-none bg-stone-500 text-white px-2 py-1 rounded"
    onClick={$1}
  >
    Increment
  </button>
</div>
`;

export default function WorkSpace() {
  const [sketch, setSketch] = useState(sample);
  const [locked, setLocked] = useState(false);
  const [timelines, setTimelines] = useState<Timeline[]>([[]]);
  const [workingTimeline, setWorkingTimeline] = useState<number | null>(0);

  function addTimeline() {
    setTimelines([...timelines, []]);
    setWorkingTimeline(timelines.length);
  }

  function removeTimeline(index: number) {
    setTimelines((timelines) => timelines.filter((_, i) => i !== index));
    setTimelines((timelines) => (timelines.length === 0 ? [[]] : timelines));
    if (workingTimeline === index) {
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

  function addActionToTimeline(index: number, action: number) {
    setTimelines((timelines) =>
      timelines.map((timeline, i) => {
        if (i === index) {
          return [...timeline, { kind: "Action", action }];
        }
        return timeline;
      }),
    );
  }

  function addEditToTimeline(index: number, edit: Edit) {
    // NOTE: Without functional updates, state (mysteriously) does not update correctly...
    setTimelines((timelines) =>
      timelines.map((timeline, i) => {
        if (i === index) {
          return [...timeline, { kind: "Edit", edit }];
        }
        return timeline;
      }),
    );
  }

  // function addSketch(sketch: string) {
  //   if (workingTimeline !== null) {
  //     addSketchToTimeline(workingTimeline, sketch);
  //   }
  // }

  function addAction(hole: number) {
    if (workingTimeline !== null) {
      addActionToTimeline(workingTimeline, hole);
    }
  }

  function addEdit(edit: Edit) {
    if (workingTimeline !== null) {
      addEditToTimeline(workingTimeline, edit);
    }
  }

  // const [isRecording, setIsRecording] = useState(false);

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
          <ResizableHandle className="bg-orange-200" withHandle />
          <ResizablePanel>
            <SynthPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle className="bg-orange-200" withHandle />
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        collapsible
        collapsedSize={2}
      >
        <TimelinePanes
          locked={locked}
          timelines={timelines}
          addTimeline={addTimeline}
          removeTimeline={removeTimeline}
          resetTimelines={resetTimelines}
          workingTimeline={workingTimeline}
          setWorkingTimeline={setWorkingTimeline}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

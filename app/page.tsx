"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import TimelinePanes from "@/components/TimelinesPane";
// import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";
import { type Timeline } from "@/components/Timeline";
import dynamic from "next/dynamic";

const SketchPane = dynamic(() => import("@/components/SketchPane"), {
  ssr: false,
});

export default function Home() {
  const [timelines, setTimelines] = useState<Timeline[]>([[]]);
  const [workingTimeline, setWorkingTimeline] = useState<number | null>(0);

  function removeTimeline(index: number) {
    setTimelines((timelines) => timelines.filter((_, i) => i !== index));
    setTimelines((timelines) => (timelines.length === 0 ? [[]] : timelines));
    if (workingTimeline === index) {
      setWorkingTimeline(null);
    }
  }
  function addTimeline() {
    setTimelines([...timelines, []]);
    setWorkingTimeline(timelines.length);
  }
  function addActionToTimeline(index: number, action: number) {
    setTimelines(
      timelines.map((timeline, i) => {
        if (i === index) {
          return [...timeline, { kind: "Action", action }];
        }
        return timeline;
      }),
    );
  }
  function addSketchToTimeline(index: number, sketch: string) {
    setTimelines(
      timelines.map((timeline, i) => {
        if (i === index) {
          return [...timeline, { kind: "Sketch", sketch }];
        }
        return timeline;
      }),
    );
  }

  // const [isRecording, setIsRecording] = useState(false);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <SketchPane
              addAction={(hole) => {
                if (workingTimeline !== null)
                  addActionToTimeline(workingTimeline, hole);
              }}
              addSketchAction={(sketch) => {
                if (workingTimeline !== null)
                  addSketchToTimeline(workingTimeline, sketch);
              }}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <SynthPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        collapsible
        collapsedSize={2}
      >
        <TimelinePanes
          timelines={timelines}
          addTimeline={addTimeline}
          removeTimeline={removeTimeline}
          workingTimeline={workingTimeline}
          setWorkingTimeline={setWorkingTimeline}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

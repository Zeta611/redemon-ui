"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import TimelinePanes from "@/components/TimelinesPane";
import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";

export default function Home() {
  const [timelines, setTimelines] = useState<number[][]>([[]]);
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
          return [...timeline, action];
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
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <SynthPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="!overflow-y-auto" defaultSize={20}>
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

"use client";

import { Loader } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import TimelinePanes from "@/components/TimelinesPane";
import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";
import { useAppState } from "@/store/useAppState";

export default function WorkSpace() {
  const synthesizing = useAppState.use.synthesizing();

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <SketchPane />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <SynthPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className="relative"
        defaultSize={25}
        collapsible
        collapsedSize={8}
      >
        {synthesizing && (
          <div className="bg-accent absolute inset-0 z-10 flex items-center justify-center opacity-70">
            <Loader className="text-primary h-8 w-8 animate-spin" />
          </div>
        )}
        <TimelinePanes />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TimelinePane from "@/components/TimelinePane";
import SketchPane from "@/components/SketchPane";
import SynthPane from "@/components/SynthPane";

export default function Home() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <SketchPane />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <SynthPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <TimelinePane />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

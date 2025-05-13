import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Code from "@/components/Code";
import { Separator } from "@/components/ui/separator";

export default function SketchPane() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={60}>
        <span className="font-normal text-sm px-2">Sketch</span>
        <Separator />
        <Code />
      </ResizablePanel>
      <ResizableHandle withHandle={false} />
      <ResizablePanel>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Demo</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

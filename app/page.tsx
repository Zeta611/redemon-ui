import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">User View</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle={false} />
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Demo</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Synth Code</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle={false} />
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Synth UI</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Timeline</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

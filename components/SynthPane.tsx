"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import SynthEditor from "@/components/SynthEditor";
import { Separator } from "@/components/ui/separator";

// TODO: Remove sample
const sample = `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-lg">
        {count}
      </span>
      <button
        className="bg-stone-500 text-white px-2 py-1 rounded"
        onClick={() => setCount(c => c + 1) }
      >
        Increment
      </button>
    </div>
  );
}

render(<Counter />);
`;

export default function SynthPane() {
  return (
    <LiveProvider code={sample} noInline>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60}>
          <span className="font-normal text-sm px-2">Synthesized</span>
          <Separator />
          <SynthEditor />
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel>
          <LivePreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

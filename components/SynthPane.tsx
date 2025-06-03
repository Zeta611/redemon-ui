"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

// TODO: Remove sample
const sample = `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-lg">
        {count}
      </div>
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
  const [code, setCode] = useState(sample);
  return (
    <LiveProvider code={code} scope={{ useState }} noInline>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex h-7 items-center justify-between">
              <div className="px-2 text-sm font-normal">🤖 Synthesized</div>
            </div>
            <Separator />
            <CodeMirror
              value={code}
              onChange={setCode}
              extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
              height="100%"
              className="h-full"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel>
          <LivePreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

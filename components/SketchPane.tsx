"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import SketchEditor from "@/components/SketchEditor";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { parse } from "@/shared/lang.res.mjs";

const sample = `<div className="flex flex-col items-center">
  <span className="font-semibold text-lg">
    0
  </span>
  <button
    className="bg-stone-500 text-white px-2 py-1 rounded"
    onClick={$}
  >
    Increment
  </button>
</div>
`;

function replaceHoles(code: string) {
  return code.replaceAll("$", "() => { addAction(1); }");
}

type SketchPaneProps = {
  addAction: (hole: number) => void;
  addSketchAction: (sketch: string) => void;
};

export default function SketchPane({
  addAction,
  addSketchAction,
}: SketchPaneProps) {
  const [code, setCode] = useState(sample);

  try {
    console.log(parse(code));
  } catch (e) {
    console.error(e);
  }

  return (
    <LiveProvider code={replaceHoles(code)} scope={{ addAction }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <span className="px-2 text-sm font-normal">🎨 Sketch</span>
            <Separator />
            <SketchEditor code={code} setCodeAction={setCode} />
            <div className="relative">
              <Button
                className="absolute right-2 bottom-2 bg-stone-800 text-sm"
                onClick={() => addSketchAction(code)}
              >
                📸 Capture
              </Button>
            </div>
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

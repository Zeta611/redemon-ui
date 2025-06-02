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
import { useRef, useState } from "react";
import { parse } from "@/shared/lang.res.mjs";
import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { format, replaceHoles } from "@/shared/sketch";

const sample = `<div className="flex flex-col items-center">
  <span className="font-semibold text-lg">
    0
  </span>
  <button
    className="bg-stone-500 text-white px-2 py-1 rounded"
    onClick={$1}
  >
    Increment
  </button>
</div>
`;

type SketchPaneProps = {
  addAction: (hole: number) => void;
  addSketchAction: (sketch: string) => void;
};

export default function SketchPane({
  addAction,
  addSketchAction,
}: SketchPaneProps) {
  const [sketch, setSketch] = useState(sample);

  // TODO: Remove if not needed
  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);

  try {
    console.log(parse(sketch));
  } catch (e) {
    console.error(e);
  }

  return (
    <LiveProvider code={replaceHoles(sketch)} scope={{ addAction }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <span className="px-2 text-sm font-normal">🎨 Sketch</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-5"
                    onClick={async () => setSketch(await format(sketch))}
                  >
                    🖌️
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Format</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Separator />
            <SketchEditor
              sketch={sketch}
              setSketchAction={setSketch}
              codeMirrorRef={codeMirrorRef}
            />
            <div className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="absolute right-2 bottom-2 bg-stone-800 text-sm"
                    onClick={() => addSketchAction(sketch)}
                  >
                    📸 Capture
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Capture the current sketch</p>
                </TooltipContent>
              </Tooltip>
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

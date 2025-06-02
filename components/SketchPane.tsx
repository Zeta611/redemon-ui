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
import prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

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

  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);
  async function formatAndSetCode(code: string) {
    const view = codeMirrorRef.current?.view;
    if (!view) return;

    console.log(view.state.selection.main.head);
    const formatted = await prettier.format(code, {
      parser: "babel",
      plugins: [prettierPluginBabel, prettierPluginEstree],
    });
    setCode(formatted);
  }

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
            <div className="flex justify-between">
              <span className="px-2 text-sm font-normal">🎨 Sketch</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-5"
                    onClick={() => formatAndSetCode(code)}
                  >
                    🖌️
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Format code</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Separator />
            <SketchEditor
              code={code}
              setCodeAction={setCode}
              codeMirrorRef={codeMirrorRef}
            />
            <div className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="absolute right-2 bottom-2 bg-stone-800 text-sm"
                    onClick={() => addSketchAction(code)}
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

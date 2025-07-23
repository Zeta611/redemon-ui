"use client";
import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { useState, useEffect, useRef } from "react";
import { Columns2, Rows2 } from "lucide-react";
import root from "react-shadow";
import { format, stubHoles } from "@/shared/sketch";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { Separator } from "@/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import injectStyles from "@/shared/injectStyles";

const extensions = [
  javascript({ jsx: true }),
  githubLight,
  EditorView.lineWrapping,
];

type SynthPaneProps = {
  synthesized: string;
};

export default function SynthPane({ synthesized }: SynthPaneProps) {
  const shadowRoot = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    // Reset code if synthesized is updated
    if (!synthesized) {
      return;
    }
    (async () => setCode(await format(stubHoles(synthesized), false)))();
  }, [synthesized]);

  useEffect(() => {
    (async () => {
      const root = shadowRoot.current?.shadowRoot;
      if (!root) return;
      await injectStyles(code, root);
    })();
  }, [code]);

  const [verticalMode, setVerticalMode] = useState(true);

  return (
    <LiveProvider code={code} scope={{ useState }} noInline>
      <ResizablePanelGroup direction={verticalMode ? "vertical" : "horizontal"}>
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex h-8 items-center justify-between px-2">
              <div className="flex gap-2 font-semibold">
                <span>🤖</span>
                <span className="font-rounded">Synthesized</span>
              </div>
              <div className="flex h-4 items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-5 text-lg"
                      onClick={() => setVerticalMode((m) => !m)}
                    >
                      {verticalMode ? (
                        <Rows2 className="size-4 text-orange-400" />
                      ) : (
                        <Columns2 className="size-4 text-orange-400" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {verticalMode
                        ? "Switch to horizontal split"
                        : "Switch to vertical split"}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Separator orientation="vertical" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-5 text-lg"
                      onClick={async () => setCode(await format(code, false))}
                    >
                      ✨
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">Format</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <Separator />
            <CodeMirror
              value={code}
              placeholder="Demonstrate and press 'Synthesize!' in the Timelines pane to see the synthesized React code here."
              onChange={setCode}
              extensions={extensions}
              height="100%"
              className="flex-1 overflow-auto text-sm"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel
          defaultSize={40}
          className="dots-wide dots flex items-center justify-center"
        >
          <root.div
            ref={shadowRoot}
            className="bg-background border-ring rounded-lg border-3 p-3"
          >
            <LivePreview />
          </root.div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

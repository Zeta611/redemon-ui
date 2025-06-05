import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import root from "react-shadow";
import { useEffect, useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import { editPlugin } from "@/shared/sketch-plugin";
import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import { parse } from "@/shared/lang.res.mjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { format, replaceHoles } from "@/shared/sketch";
import { Switch } from "@/ui/switch";
import { Label } from "@/ui/label";
import { cn } from "@/shared/utils";
import injectStyles from "@/shared/injectStyles";

type SketchPaneProps = {
  sketch: string;
  setSketch: (sketch: string) => void;
  locked: boolean;
  setLocked: (locked: boolean) => void;
  addAction: (hole: number) => void;
};

export default function SketchPane({
  sketch,
  setSketch,
  locked,
  setLocked,
  addAction,
}: SketchPaneProps) {
  const shadowRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const root = shadowRoot.current?.shadowRoot;
      if (!root) return;
      await injectStyles(replaceHoles(sketch), root);
    })();
  }, [sketch]);

  try {
    console.log(parse(sketch.trim()));
  } catch (e) {
    console.error(e);
  }

  return (
    <LiveProvider code={replaceHoles(sketch)} scope={{ addAction }}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex h-8 items-center justify-between px-2">
              <div className="flex gap-2 font-bold">
                <span>🎨</span>
                <span className="font-serif">Sketch</span>
              </div>
              <div className="flex h-4 items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1.5">
                      <Label className="size-5 text-lg" htmlFor="lock-switch">
                        ✍️
                      </Label>
                      <Switch
                        className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-stone-300"
                        id="lock-switch"
                        checked={locked}
                        onCheckedChange={setLocked}
                      />
                      <Label className="size-5 text-lg" htmlFor="lock-switch">
                        🔒
                      </Label>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {locked
                        ? "Edit (Timelines will be reset!)"
                        : "Lock (Ready to demonstrate!)"}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Separator className="bg-orange-200" orientation="vertical" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-5 text-lg"
                      onClick={async () => setSketch(await format(sketch))}
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
            <Separator className="bg-orange-200" />
            <CodeMirror
              value={sketch}
              extensions={[
                javascript({ jsx: true }),
                githubLight,
                EditorView.lineWrapping,
                EditorView.editable.of(!locked),
              ].concat(locked ? [editPlugin()] : [])}
              onChange={setSketch}
              height="100%"
              className="h-full text-sm"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-orange-200" withHandle={false} />
        <ResizablePanel className="dots-wide dots flex items-center justify-center">
          <root.div
            ref={shadowRoot}
            className={cn(
              "bg-background rounded-lg border-3 border-orange-300 p-3",
              locked || "pointer-events-none",
            )}
          >
            <LivePreview />
          </root.div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

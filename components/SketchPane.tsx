import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import root from "react-shadow";
import { useEffect, useMemo, useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import { editPlugin } from "@/shared/sketch-plugin";
import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { format, replaceHoles } from "@/shared/sketch";
import { Switch } from "@/ui/switch";
import { Label } from "@/ui/label";
import { cn } from "@/shared/utils";
import injectStyles from "@/shared/injectStyles";
import { edit } from "@/shared/lang.gen";

type SketchPaneProps = {
  sketch: string;
  setSketch: (sketch: string) => void;
  locked: boolean;
  setLocked: (locked: boolean) => void;
  addAction: (hole: number) => void;
  addEdit: (getSketch: () => string, path: number[], edit: edit) => void;
};

export default function SketchPane({
  sketch,
  setSketch,
  locked,
  setLocked,
  addAction,
  addEdit,
}: SketchPaneProps) {
  const shadowRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const root = shadowRoot.current?.shadowRoot;
      if (!root) return;
      await injectStyles(
        replaceHoles(sketch, "() => { addAction($1); }"),
        root,
      );
    })();
  }, [sketch]);

  // Hack to get the current addEdit function in the plugin
  const addEditRef = useRef(addEdit);
  addEditRef.current = addEdit;
  const extensions = useMemo(() => {
    console.debug("Updating extensions for SketchPane");
    return [
      javascript({ jsx: true }),
      githubLight,
      EditorView.lineWrapping,
      EditorView.editable.of(!locked),
    ].concat(locked ? [editPlugin(addEditRef)] : []);
  }, [locked, addEditRef]);

  return (
    <LiveProvider
      code={replaceHoles(sketch, "() => { addAction($1); }")}
      scope={{ addAction }}
    >
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
                <Separator orientation="vertical" />
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
            <Separator />
            <CodeMirror
              value={sketch}
              extensions={extensions}
              onChange={setSketch}
              height="100%"
              className="h-full text-sm"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel className="dots-wide dots flex items-center justify-center">
          <root.div
            ref={shadowRoot}
            className={cn(
              "bg-background border-ring rounded-lg border-3 p-3",
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

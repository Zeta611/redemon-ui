import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import root from "react-shadow";
import { useState, useEffect, useMemo, useRef } from "react";
import { Columns2, Rows2 } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ui/resizable";
import { editPlugin } from "@/shared/sketch-plugin";
import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { format, preprocessSketch, updateValueForLabel } from "@/shared/sketch";
import { Switch } from "@/ui/switch";
import { Label } from "@/ui/label";
import { cn } from "@/shared/utils";
import injectStyles from "@/shared/injectStyles";
import { action_type, edit } from "@/shared/lang.gen";

type SketchPaneProps = {
  sketch: string;
  setSketch: (sketch: string) => void;
  locked: boolean;
  setLocked: (locked: boolean) => void;
  addAction: (hole: number, action_type: action_type, arg?: string) => void;
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
      await injectStyles(preprocessSketch(sketch), root);
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

  const currentInputRef = useRef<[number, string]>([0, ""]);
  const submitInput = () => {
    const [label, value] = currentInputRef.current;
    addAction(label, "Input", value);
    currentInputRef.current = [0, ""];
    setSketch(updateValueForLabel(sketch, label, value));
  };

  const [verticalMode, setVerticalMode] = useState(true);

  return (
    <LiveProvider
      code={preprocessSketch(sketch)}
      scope={{ addAction, setSketch, currentInputRef }}
    >
      <ResizablePanelGroup direction={verticalMode ? "vertical" : "horizontal"}>
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex h-8 items-center justify-between px-2">
              <div className="flex gap-2 font-semibold">
                <span>🎨</span>
                <span className="font-rounded">Sketch</span>
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
              className="flex-1 overflow-auto text-sm"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel
          defaultSize={40}
          className="dots-wide dots flex items-center justify-center"
        >
          <div className="flex flex-col items-end gap-1">
            <root.div
              ref={shadowRoot}
              className={cn(
                "bg-background border-ring rounded-lg border-3 p-3",
                locked || "pointer-events-none",
              )}
            >
              <LivePreview />
            </root.div>
            {locked && (
              <Button
                size="icon"
                className="size-6 rounded bg-orange-200 text-orange-900 shadow-sm/75 inset-shadow-xs/90 inset-shadow-white hover:bg-orange-300"
                onClick={submitInput}
              >
                💬
              </Button>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

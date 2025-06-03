import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { editPlugin } from "@/shared/sketch-plugin";
import { EditorView } from "@codemirror/view";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { parse } from "@/shared/lang.res.mjs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { format, replaceHoles } from "@/shared/sketch";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
            <div className="flex h-7 items-center justify-between">
              <div className="px-2 text-sm font-normal">🎨 Sketch</div>
              <div className="flex h-4 items-center gap-1 px-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-0.5">
                      <Label htmlFor="lock-switch">✍️</Label>
                      <Switch
                        id="lock-switch"
                        checked={locked}
                        onCheckedChange={setLocked}
                      />
                      <Label htmlFor="lock-switch">🔒</Label>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
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
            </div>
            <Separator />
            <CodeMirror
              value={sketch}
              extensions={[
                javascript({ jsx: true }),
                EditorView.lineWrapping,
                EditorView.editable.of(!locked),
                editPlugin,
              ]}
              onChange={setSketch}
              height="100%"
              className="h-full"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel>
          <LivePreview className={locked ? "" : "pointer-events-none"} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

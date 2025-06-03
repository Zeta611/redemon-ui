import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
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
import { cn } from "@/shared/utils";

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
            <div className="flex h-7 items-center justify-between px-2">
              <div className="text-md font-semibold">🎨 Sketch</div>
              <div className="flex h-4 items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-0.5">
                      <Label htmlFor="lock-switch">✍️</Label>
                      <Switch
                        className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-stone-300"
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
                <Separator className="bg-orange-200" orientation="vertical" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-5"
                      onClick={async () => setSketch(await format(sketch))}
                    >
                      ✨
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Format</p>
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
              className="h-full"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-orange-200" withHandle={false} />
        <ResizablePanel className="dots-wide dots flex items-center justify-center">
          <LivePreview
            className={cn(
              "bg-background rounded-lg border-3 border-orange-300 p-3 font-sans",
              locked || "pointer-events-none",
            )}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

import { useContext } from "react";
import { Plus, WandSparkles } from "lucide-react";
import Timeline from "@/components/Timeline";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { cn } from "@/shared/utils";
import { useAppState } from "@/store/useAppState";
import { ApiKeyContext } from "@/contexts/ApiKeyContext";

export default function TimelinesPane() {
  const apiKey = useContext(ApiKeyContext);

  const lockedSketch = useAppState.use.lockedSketch();
  const timelines = useAppState.use.timelines();
  const setWorkingTimeline = useAppState.use.setWorkingTimeline();
  const addTimeline = useAppState.use.addTimeline();
  const removeTimeline = useAppState.use.removeTimeline();
  const resetTimelines = useAppState.use.resetTimelines();
  const workingTimelineIdx = useAppState.use.workingTimelineIdx();
  const revertTimelineUpTo = useAppState.use.revertTimelineUpTo();
  const synthesizeWithSketchAndTimelines =
    useAppState.use.synthesizeWithSketchAndTimelines();

  const locked = lockedSketch !== null;

  return (
    <div className={cn("h-full", locked || "cursor-not-allowed")}>
      <div
        className={cn(
          "flex h-full flex-col",
          locked
            ? "bg-accent text-accent-foreground"
            : "bg-muted text-muted-foreground pointer-events-none",
        )}
      >
        <div className="flex h-8 items-center justify-between px-2">
          <div className="flex gap-2 font-semibold">
            <span>🎞️</span>
            <span className="font-rounded">Timelines</span>
          </div>
          <div className="flex h-4 items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-5 text-lg"
                  onClick={resetTimelines}
                >
                  🗑️
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Reset Timelines</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div
          className={cn(
            "flex grow flex-col gap-2 overflow-y-auto p-3 pb-17",
            locked || "opacity-60",
          )}
        >
          <ol className="flex flex-col gap-2">
            {timelines.map(({ timeline }, index) => (
              <li key={index}>
                <Timeline
                  timeline={timeline}
                  removeTimeline={() => removeTimeline(index)}
                  isWorking={workingTimelineIdx === index}
                  setIsWorking={() => {
                    setWorkingTimeline(index);
                  }}
                  onRevert={(itemIdx) => revertTimelineUpTo(index, itemIdx)}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <div className="absolute right-3 bottom-3 left-3 flex h-12 gap-3">
            <Button
              variant="default"
              className={cn(
                "text-primary-foreground h-full flex-1 shadow-md/35 inset-shadow-sm/80 inset-shadow-white backdrop-blur-sm",
                locked ? "bg-primary/80 hover:bg-primary" : "bg-primary/60",
              )}
              onClick={addTimeline}
            >
              <Plus />
              <span className="font-rounded font-bold">Add Timeline</span>
            </Button>
            <Button
              variant="secondary"
              className={cn(
                "text-secondary-foreground h-full flex-1 shadow-md/35 inset-shadow-sm/80 inset-shadow-white backdrop-blur-sm",
                locked
                  ? "bg-secondary/80 hover:bg-secondary"
                  : "bg-secondary/60",
              )}
              onClick={() => synthesizeWithSketchAndTimelines(apiKey)}
            >
              <WandSparkles />
              <span className="font-rounded font-bold">Synthesize!</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

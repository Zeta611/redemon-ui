import { Plus, WandSparkles } from "lucide-react";
import Timeline from "./Timeline";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { cn } from "@/shared/utils";
import { timeline } from "@/shared/lang.gen";

type TimelinesPaneProps = {
  locked: boolean;
  timelines: timeline[];
  addTimeline: () => void;
  removeTimeline: (index: number) => void;
  resetTimelines: () => void;
  workingTimeline: number | null;
  setWorkingTimeline: (index: number | null) => void;
  synthesize: () => void;
};

export default function TimelinesPane({
  locked,
  timelines,
  addTimeline,
  removeTimeline,
  resetTimelines,
  workingTimeline,
  setWorkingTimeline,
  synthesize,
}: TimelinesPaneProps) {
  return (
    <div className={cn("h-full", locked || "cursor-not-allowed")}>
      <div
        className={cn(
          "flex h-full flex-col",
          locked ? "bg-orange-50" : "pointer-events-none bg-stone-100",
        )}
      >
        <div className="flex h-8 items-center justify-between px-2">
          <div className="flex gap-2 font-bold">
            <span>🎞️</span>
            <span className="font-serif">Timelines</span>
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
        <div className="flex grow flex-col gap-2 overflow-y-auto p-3 pb-17">
          <ol className="flex flex-col gap-2">
            {timelines.map((timeline, index) => (
              <li key={index}>
                <Timeline
                  timeline={timeline}
                  removeTimeline={() => removeTimeline(index)}
                  isWorking={workingTimeline === index}
                  setIsWorking={() => {
                    setWorkingTimeline(index);
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <div className="absolute right-3 bottom-3 left-3 flex h-12 gap-3">
            <Button
              className="h-full flex-1 bg-orange-500/80 backdrop-blur-sm hover:bg-orange-500"
              onClick={addTimeline}
            >
              <Plus />
              <span className="font-bold">Add Timeline</span>
            </Button>
            <Button
              className="h-full flex-1 bg-purple-500/80 backdrop-blur-sm hover:bg-purple-500"
              onClick={synthesize}
            >
              <WandSparkles />
              <span className="font-bold">Synthesize!</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

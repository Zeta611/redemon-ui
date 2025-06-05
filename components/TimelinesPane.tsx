import { Plus } from "lucide-react";
import { type Timeline as TimelineType } from "./Timeline";
import { default as Timeline } from "./Timeline";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/shared/utils";

type TimelinesPaneProps = {
  locked: boolean;
  timelines: TimelineType[];
  addTimeline: () => void;
  removeTimeline: (index: number) => void;
  resetTimelines: () => void;
  workingTimeline: number | null;
  setWorkingTimeline: (index: number | null) => void;
};

export default function TimelinesPane({
  locked,
  timelines,
  addTimeline,
  removeTimeline,
  resetTimelines,
  workingTimeline,
  setWorkingTimeline,
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
          <Button
            className="absolute right-3 bottom-3 left-3 h-12 bg-orange-500/80 backdrop-blur-sm hover:bg-orange-500"
            onClick={addTimeline}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}

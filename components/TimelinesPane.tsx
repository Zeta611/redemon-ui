import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { type Timeline as TimelineType } from "./Timeline";
import Timeline from "./Timeline";

type TimelinesPaneProps = {
  timelines: TimelineType[];
  addTimeline: () => void;
  removeTimeline: (index: number) => void;
  workingTimeline: number | null;
  setWorkingTimeline: (index: number | null) => void;
};

export default function TimelinesPane({
  timelines,
  addTimeline,
  removeTimeline,
  workingTimeline,
  setWorkingTimeline,
}: TimelinesPaneProps) {
  return (
    <div className="flex flex-col h-full">
      <span className="font-normal text-sm px-2">🎞️ Timelines</span>
      <Separator />
      <div className="flex flex-col p-3 gap-2 grow overflow-y-auto pb-17">
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
          className="bg-blue-300/80 backdrop-blur-sm absolute bottom-3 left-3 right-3 h-12"
          onClick={addTimeline}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}

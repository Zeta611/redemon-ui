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
    <div>
      <span className="font-normal text-sm px-2">🎞️ Timelines</span>
      <Separator />
      <div className="flex flex-col p-3 gap-2">
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
        <Button className="bg-emerald-900" onClick={addTimeline}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}

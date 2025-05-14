import { CircleX } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type TimelineProps = {
  className?: string;
  timeline: number[];
  removeTimeline: () => void;
  isWorking: boolean;
  setIsWorking: () => void;
};

export default function Timeline({
  timeline,
  removeTimeline,
  isWorking,
  setIsWorking,
}: TimelineProps) {
  return (
    <div
      className={cn(
        "flex gap-2 border rounded-md shadow-sm",
        isWorking ? "border-orange-700" : "border-stone-300",
      )}
      onClick={setIsWorking}
    >
      {timeline.map((item, index) => (
        <span key={index} className="bg-orange-500 text-white p-2 rounded-md">
          Event
        </span>
      ))}
      <Button variant="ghost" size="icon" onClick={removeTimeline}>
        <CircleX className="size-4" />
      </Button>
    </div>
  );
}

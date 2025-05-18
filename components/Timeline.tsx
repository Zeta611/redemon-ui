import { CircleX } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export type TimelineItem = {
  kind: "Action";
  action: number;
} | {
  kind: "Sketch";
  sketch: string;
};

export type Timeline = TimelineItem[];

type TimelineProps = {
  className?: string;
  timeline: Timeline;
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
        "flex p-1 gap-2 border-3 rounded-lg shadow-sm h-12 items-center",
        isWorking ? "border-red-400" : "border-stone-300",
      )}
      onClick={setIsWorking}
    >
      {timeline.map((item, index) => (
        item.kind === "Action" ? (
          <span key={index} className="bg-amber-500 border-3 border-amber-700 p-1 rounded-lg">
            👆
          </span>
        ) : (
          <span key={index} className="bg-fuchsia-600 border-3 border-fuchsia-800 p-1 rounded-md">
            🎨
          </span>
        )
      ))}
      <div className="flex-1" />
      <Button variant="ghost" size="icon" onClick={removeTimeline}>
        <CircleX className="size-6" />
      </Button>
    </div>
  );
}

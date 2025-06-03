import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/utils";

export type TimelineItem =
  | {
      kind: "Action";
      action: number;
    }
  | {
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
        "flex h-12 items-center gap-2 rounded-lg border-3 p-1 shadow-sm",
        isWorking
          ? "border-orange-500 bg-orange-200"
          : "border-stone-300 bg-orange-100",
      )}
      onClick={setIsWorking}
    >
      {timeline.map((item, index) =>
        item.kind === "Action" ? (
          <div
            key={index}
            className="rounded-lg border-3 border-amber-700 bg-amber-500 p-1"
          >
            👆 {item.action}
          </div>
        ) : (
          <div
            key={index}
            className="rounded-md border-3 border-fuchsia-800 bg-fuchsia-600 p-1"
          >
            🎨
          </div>
        ),
      )}
      <div className="flex-1" />
      <Button variant="ghost" size="icon" onClick={removeTimeline}>
        <CircleX className="size-6" />
      </Button>
    </div>
  );
}

import { CircleX } from "lucide-react";
import { Button } from "@/ui/button";
import { cn } from "@/shared/utils";

export type Edit =
  | {
      kind: "NodeCopy";
      nodeIdx: number;
    }
  | {
      kind: "NodeDelete";
      nodeIdx: number;
    }
  | {
      kind: "NodeInsert";
      nodeIdx: number;
      node: string;
    }
  | {
      kind: "TextReplace";
      text: string;
    }
  | {
      kind: "AttributeReplace";
      identifier: string;
      value: string;
    };

export type TimelineItem =
  | {
      kind: "Action";
      action: number;
    }
  | {
      kind: "Edit";
      path: number[];
      edit: Edit;
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
      <ol className="flex items-center gap-2 overflow-x-auto">
        {timeline.map((item, index) => {
          switch (item.kind) {
            case "Sketch":
              return (
                <li
                  key={index}
                  className="rounded-md border-3 border-fuchsia-800 bg-fuchsia-600 p-1"
                >
                  🎨
                </li>
              );
            case "Action":
              return (
                <li
                  key={index}
                  className="rounded-lg border-3 border-orange-600 bg-amber-500 p-1"
                >
                  👆 {item.action}
                </li>
              );
            case "Edit":
              return (
                <li
                  key={index}
                  className="rounded-lg border-3 border-emerald-600 bg-emerald-200 p-1"
                >
                  ✏️ {item.edit.kind}@{item.path.join("/")}
                </li>
              );
            default:
              throw item satisfies never;
          }
        })}
      </ol>
      <div className="flex-1" />
      <Button variant="ghost" size="icon" onClick={removeTimeline}>
        <CircleX className="size-6" />
      </Button>
    </div>
  );
}

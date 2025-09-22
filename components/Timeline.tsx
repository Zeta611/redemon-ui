import { CircleX } from "lucide-react";
import { Button } from "@/ui/button";
import { cn } from "@/shared/utils";
import { timeline, timeline_item } from "@/shared/lang.gen";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/ui/context-menu";

type TimelineProps = {
  className?: string;
  timeline: timeline;
  removeTimeline: () => void;
  isWorking: boolean;
  setIsWorking: () => void;
  onRevert: (itemIdx: number) => void;
};

function TimelineItem({
  className,
  item,
}: {
  className?: string;
  item: timeline_item;
}) {
  switch (item.TAG) {
    case "Action":
      switch (item._0.action_type) {
        case "Click":
          return (
            <li
              className={cn(
                "rounded-lg bg-orange-500 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white",
                className,
              )}
            >
              👆 {item._0.label._0}
            </li>
          );
        case "Input":
          return (
            <li
              className={cn(
                "rounded-lg bg-indigo-400 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white",
                className,
              )}
            >
              💬 {item._0.label._0}
            </li>
          );
      }

    case "Edit":
      return (
        <li
          className={cn(
            "rounded-lg bg-emerald-500 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white",
            className,
          )}
        >
          ✏️ {item._1.TAG}
        </li>
      );

    default:
      throw item satisfies never;
  }
}

export default function Timeline({
  timeline,
  removeTimeline,
  isWorking,
  setIsWorking,
  onRevert,
}: TimelineProps) {
  return (
    <div
      className={cn(
        "bg-border flex h-13 items-center gap-2 rounded-lg p-1 shadow-md/35 inset-shadow-sm/80 inset-shadow-white",
        isWorking
          ? "border-primary/85 shadow-primary border-2 shadow-md/45"
          : "opacity-55",
      )}
      onClick={setIsWorking}
    >
      <ol className="flex items-center gap-2">
        {timeline.map((item, index) => (
          <ContextMenu key={index}>
            <ContextMenuTrigger>
              <TimelineItem className="cursor-pointer" item={item} />
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem
                onClick={() => onRevert(index)}
                className="text-xs font-medium text-red-700 hover:text-red-900"
              >
                Revert up to here
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </ol>
      <div className="flex-1" />
      <Button
        variant="ghost"
        className="hover:text-destructive hover:bg-destructive/20 text-destructive"
        size="icon"
        onClick={removeTimeline}
      >
        <CircleX className="size-6" />
      </Button>
    </div>
  );
}

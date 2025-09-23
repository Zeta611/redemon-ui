import { CircleX } from "lucide-react";
import { Button } from "@/ui/button";
import { cn, toArray } from "@/shared/utils";
import { timeline, timeline_item } from "@/shared/lang.gen";
import type {
  const_ as ConstT,
  path as PathT,
  tree as TreeT,
  edit as EditT,
} from "@/shared/lang.gen";
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

const TRUNCATE_AT = 16;
function truncate(value: string, limit = TRUNCATE_AT): string {
  return value.length > limit ? value.slice(0, limit - 1) + "…" : value;
}

function formatConst(value: ConstT): string {
  return value.TAG === "String" ? `"${truncate(value._0)}"` : String(value._0);
}

function formatTree(t: TreeT): string {
  switch (t.TAG) {
    case "Const":
      return formatConst(t._0);
    case "Elem":
      return `<${t._0.name}>`;
  }
}

function formatPath(path: PathT): string {
  return toArray(path)
    .map((p) => `${p._0}`)
    .join(">");
}

function formatEdit(path: PathT, e: EditT, short = false): string {
  switch (e.TAG) {
    case "NodeCopy":
      return short
        ? `Copy`
        : `Copy node ${e._0._0} in path ${formatPath(path)}`;
    case "NodeDelete":
      return short
        ? `Delete`
        : `Delete node ${e._0._0} in path ${formatPath(path)}`;
    case "NodeInsert":
      return short
        ? formatTree(e._1)
        : `Insert ${formatTree(e._1)} at node ${e._0._0} in path ${formatPath(path)}`;
    case "ConstReplace":
      return short
        ? `${formatConst(e._0)}`
        : `Replace const to ${formatConst(e._0)} in path ${formatPath(path)}`;
    case "AttributeReplace":
      return e._1
        ? short
          ? `Set ${e._0}`
          : `Set ${e._0}=${formatConst(e._1)} in path ${formatPath(path)}`
        : short
          ? `Remove ${e._0}`
          : `Remove ${e._0} in path ${formatPath(path)}`;
  }
}

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
              title={`Click node ${item._0.label._0}`}
            >
              👆 #{item._0.label._0}
            </li>
          );
        case "Input":
          return (
            <li
              className={cn(
                "rounded-lg bg-indigo-400 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white",
                className,
              )}
              title={`Input "${item._0.arg ?? ""}" at node ${item._0.label._0}`}
            >
              💬 {item._0.arg}
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
          title={formatEdit(item._0, item._1)}
        >
          ✏️ {formatEdit(item._0, item._1, true)}
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

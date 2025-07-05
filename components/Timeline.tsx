import { CircleX } from "lucide-react";
import { Button } from "@/ui/button";
import { cn } from "@/shared/utils";
import { timeline } from "@/shared/lang.gen";

type TimelineProps = {
  className?: string;
  timeline: timeline;
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
        "bg-border flex h-13 items-center gap-2 rounded-lg p-1 shadow-md/35 inset-shadow-sm/80 inset-shadow-white",
        isWorking
          ? "border-primary/85 shadow-primary border-2 shadow-md/45"
          : "opacity-55",
      )}
      onClick={setIsWorking}
    >
      <ol className="flex items-center gap-2">
        {timeline.map((item, index) => {
          console.debug("Timeline item:", item);
          switch (item.TAG) {
            // case "Sketch":
            //   return (
            //     <li
            //       key={index}
            //       className="rounded-md border-3 border-fuchsia-800 bg-fuchsia-600 p-1"
            //     >
            //       🎨
            //     </li>
            //   );
            case "Action":
              switch (item._0.action_type) {
                case "Click":
                  return (
                    <li
                      key={index}
                      className="rounded-lg bg-orange-500 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white"
                    >
                      👆 {item._0.label._0}
                    </li>
                  );
                case "Input":
                  return (
                    <li
                      key={index}
                      className="text-secondary-foreground rounded-lg bg-indigo-400 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white"
                    >
                      💬 {item._0.label._0}
                    </li>
                  );
              }
            case "Edit":
              return (
                <li
                  key={index}
                  className="rounded-lg bg-emerald-500 p-1.5 shadow-sm/50 inset-shadow-xs/80 inset-shadow-white"
                >
                  ✏️ {item._1.TAG}
                </li>
              );
            default:
              throw item satisfies never;
          }
        })}
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

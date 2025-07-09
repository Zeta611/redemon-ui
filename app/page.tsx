import WorkSpace from "@/components/WorkSpace";
import Bar from "@/components/Bar";
import { Separator } from "@/ui/separator";

const sample = `<div className="flex flex-col items-center gap-2">
  <div className="text-lg font-semibold"></div>
  <button
    className="rounded border-none bg-stone-500 px-2 py-1 text-white"
    onClick={$0}
  >
    Set text
  </button>
  <input
    type="text"
    value=""
    onChange={$1}
    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"
  />
</div>
`;

export default function Home() {
  return (
    <>
      <Bar />
      <Separator />
      <WorkSpace sample={sample} />
    </>
  );
}

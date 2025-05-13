import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function Bar() {
  return (
    <div className="flex items-end gap-5">
      <Link
        href="/"
        className="text-lg lg:text-xl font-bold [font-variant:small-caps]"
      >
        <span>ReDemon</span>
        <span className="border-2 rounded px-0.5 ml-1 text-base lg:text-lg">
          ui
        </span>
      </Link>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Examples</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Simple</MenubarItem>
                <MenubarItem>Complex</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

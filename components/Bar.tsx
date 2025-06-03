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
    <div className="flex items-end gap-5 bg-orange-50 px-3 py-2">
      <Link
        href="/"
        className="text-lg font-bold [font-variant:small-caps] lg:text-xl"
      >
        ReDemon
        <span className="ml-1 rounded border-2 px-0.5 text-base lg:text-lg">
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

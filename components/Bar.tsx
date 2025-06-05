import Link from "next/link";
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

export default function Bar() {
  return (
    <div className="dots-dense dots">
      <div className="flex items-center gap-7 bg-linear-to-l to-orange-50 to-85% px-3 py-2">
        <Link href="/" className="font-heading text-2xl">
          ReDemon UI
        </Link>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="text-md font-medium">
              File
            </MenubarTrigger>
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
            <MenubarTrigger className="text-md font-medium">
              About
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}

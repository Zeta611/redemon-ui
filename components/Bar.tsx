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
} from "@/ui/menubar";

type BarProps = {
  setSampleName: (name: string | undefined) => void;
};

export default function Bar({ setSampleName }: BarProps) {
  return (
    <div className="dots-dense dots">
      <div className="to-accent flex items-center gap-7 bg-linear-to-l to-85% px-3 py-2">
        <Link href="/" className="font-rounded text-2xl font-bold">
          🧙‍♀️ ReDemon UI
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
                  <MenubarItem onClick={() => setSampleName("Counter")}>
                    Counter
                  </MenubarItem>
                  <MenubarItem onClick={() => setSampleName("Text setter")}>
                    Text setter
                  </MenubarItem>
                  <MenubarItem onClick={() => setSampleName("Calculator")}>
                    Calculator
                  </MenubarItem>
                  <MenubarItem onClick={() => setSampleName("Todo list")}>
                    Todo list
                  </MenubarItem>
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

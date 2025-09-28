"use client";

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
import GitHub from "@/components/icons/github";
import { DialogTrigger } from "@/ui/dialog";
import { useAppState } from "@/store/useAppState";

export default function Bar() {
  const { chooseSample } = useAppState();
  return (
    <div className="dots-dense dots">
      <div className="to-accent flex items-center justify-between bg-linear-to-l to-85% px-3 py-2">
        <div className="flex gap-7">
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
                    <MenubarItem onClick={() => chooseSample("Counter")}>
                      Counter
                    </MenubarItem>
                    <MenubarItem onClick={() => chooseSample("Text setter")}>
                      Text setter
                    </MenubarItem>
                    <MenubarItem onClick={() => chooseSample("Calculator")}>
                      Calculator
                    </MenubarItem>
                    <MenubarItem onClick={() => chooseSample("Todo list")}>
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
                Settings
              </MenubarTrigger>
              <MenubarContent>
                <DialogTrigger asChild>
                  <MenubarItem>API Key</MenubarItem>
                </DialogTrigger>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Link href="https://github.com/Zeta611/redemon-ui">
          <GitHub className="size-5.5 rounded-full bg-white" />
        </Link>
      </div>
    </div>
  );
}

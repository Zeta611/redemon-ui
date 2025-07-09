"use client";
import { useState } from "react";
import WorkSpace from "@/components/WorkSpace";
import Bar from "@/components/Bar";
import { Separator } from "@/ui/separator";

export default function Home() {
  const [sampleName, setSampleName] = useState<string | undefined>(undefined);
  return (
    <>
      <Bar setSampleName={setSampleName} />
      <Separator />
      <WorkSpace sampleName={sampleName} />
    </>
  );
}

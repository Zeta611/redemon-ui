"use client";

import { useState } from "react";
import WorkSpace from "@/components/WorkSpace";
import Bar from "@/components/Bar";
import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApiKeyContext } from "@/contexts/ApiKeyContext";

export default function Home() {
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);

  function submitApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const apiKey = (formData.get("api-key") as string).trim();
    if (!apiKey) {
      console.info("Clearing API key");
      setApiKey(undefined);
      return;
    }
    // Basic validation for API key format
    if (!apiKey.startsWith("AIza") || apiKey.length != 39) {
      alert("Please enter a valid API key.");
      return;
    }
    setApiKey(apiKey);
  }

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <form className="flex flex-col gap-3" onSubmit={submitApiKey}>
          <DialogHeader>
            <DialogTitle>API Key</DialogTitle>
            <DialogDescription>
              Your Google API key is required for the LLM synthesis backend.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="api-key">Google API Key</Label>
              <Input id="api-key" name="api-key" placeholder="AIza..." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <Bar />
      <Separator />
      <ApiKeyContext value={apiKey}>
        <WorkSpace />
      </ApiKeyContext>
    </Dialog>
  );
}

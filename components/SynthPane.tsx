"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LivePreview, LiveProvider } from "react-live";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { Separator } from "@/components/ui/separator";
import { useState, useRef, useEffect } from "react";
import root from "react-shadow";
import { unoGenerator as generator, injectStyles } from "@/shared/injectStyles";

// TODO: Remove sample
const sample = `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-lg">
        {count}
      </div>
      <button
        className="border-none bg-stone-500 text-white px-2 py-1 rounded"
        onClick={() => setCount(c => c + 1) }
      >
        Increment
      </button>
    </div>
  );
}

render(<Counter />);
`;

export default function SynthPane() {
  const shadowRoot = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState(sample);

  useEffect(() => {
    (async () => {
      const root = shadowRoot.current?.shadowRoot;
      if (!root) return;
      await injectStyles(code, root);

      const { css: baseCss } = await generator.generate("", { minify: true });
      console.log("Base CSS:", baseCss);
    })();
  }, [code]);

  return (
    <LiveProvider code={code} scope={{ useState }} noInline>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex h-7 items-center justify-between px-2">
              <div className="text-md font-semibold">🤖 Synthesized</div>
            </div>
            <Separator className="bg-orange-200" />
            <CodeMirror
              value={code}
              onChange={setCode}
              extensions={[
                javascript({ jsx: true }),
                githubLight,
                EditorView.lineWrapping,
              ]}
              height="100%"
              className="h-full"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-orange-200" withHandle={false} />
        <ResizablePanel className="dots-wide dots flex items-center justify-center">
          <root.div
            ref={shadowRoot}
            className="bg-background rounded-lg border-3 border-orange-300 p-3 font-sans"
          >
            <LivePreview />
          </root.div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </LiveProvider>
  );
}

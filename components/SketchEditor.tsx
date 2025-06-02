"use client";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { editPlugin } from "@/shared/sketch-plugin";
import { RefObject } from "react";

type SketchEditorProps = {
  code: string;
  setCodeAction: (code: string) => void;
  codeMirrorRef: RefObject<ReactCodeMirrorRef | null>;
};

export default function SketchEditor({
  code,
  setCodeAction,
  codeMirrorRef,
}: SketchEditorProps) {
  return (
    <CodeMirror
      ref={codeMirrorRef}
      value={code}
      extensions={[javascript({ jsx: true }), editPlugin]}
      onChange={setCodeAction}
      height="100%"
      className="h-full"
    />
  );
}

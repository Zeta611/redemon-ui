"use client";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { editPlugin } from "@/shared/sketch-plugin";
import { EditorView } from "@codemirror/view";
import { RefObject } from "react";

type SketchEditorProps = {
  sketch: string;
  setSketchAction: (code: string) => void;
  codeMirrorRef: RefObject<ReactCodeMirrorRef | null>;
};

export default function SketchEditor({
  sketch,
  setSketchAction,
  codeMirrorRef,
}: SketchEditorProps) {
  return (
    <CodeMirror
      ref={codeMirrorRef}
      value={sketch}
      extensions={[
        javascript({ jsx: true }),
        EditorView.lineWrapping,
        editPlugin,
      ]}
      onChange={setSketchAction}
      height="100%"
      className="h-full"
    />
  );
}

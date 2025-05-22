"use client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { editPlugin } from "@/shared/sketch-plugin";

type SketchEditorProps = {
  code: string;
  setCodeAction: (code: string) => void;
};

export default function SketchEditor({
  code,
  setCodeAction,
}: SketchEditorProps) {
  return (
    <CodeMirror
      value={code}
      extensions={[javascript({ jsx: true }), editPlugin]}
      onChange={(value) => setCodeAction(value)}
      height="100%"
      className="h-full"
    />
  );
}

"use client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

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
      extensions={[javascript({ jsx: true })]}
      onChange={(value) => setCodeAction(value)}
      height="100%"
      className="h-full"
    />
  );
}

"use client";
import { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { LiveContext } from "react-live";

export default function SynthEditor() {
  const { code, onChange } = useContext(LiveContext);
  return (
    <CodeMirror
      value={code}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      height="100%"
      className="h-full"
    />
  );
}

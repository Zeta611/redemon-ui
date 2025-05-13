"use client";
import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const sample = `<div className="flex flex-col items-center">
  <span className="font-semibold text-lg">
    0
  </span>
  <button
    className="bg-stone-500 text-white px-2 py-1 rounded"
    onClick={?}
  >
    Increment
  </button>
</div>
`;

export default function Code() {
  const [code, setCode] = useState(sample);
  const onChange = useCallback((value: string) => {
    console.log("value:", value);
    setCode(value);
  }, []);
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

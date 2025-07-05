import prettier from "prettier/standalone";
import prettierPluginFlow from "prettier/plugins/flow";
import prettierPluginEstree from "prettier/plugins/estree";

// TODO: Use the lezer parser to preprocess, instead of this brittle approach
export function preprocessSketch(sketch: string) {
  return sketch
    .replaceAll(
      /(?<=onClick\s*=\s*{\s*)\$(\d*)(?=\s*})/g,
      "() => { addAction($1, 'Click'); }",
    )
    .replaceAll(
      /(?<=onChange\s*=\s*{\s*)\$(\d*)(?=\s*})/g,
      "(e) => { currentInputRef.current = [$1, e.target.value]; }",
    )
    .replaceAll(/\bvalue=/g, "defaultValue=");
}

// TODO: Use the lezer parser to preprocess, instead of this brittle approach
export function updateValueForLabel(
  sketch: string,
  label: number,
  value: string,
) {
  const elementMatch = sketch.match(
    new RegExp(
      String.raw`<\s*input\b.*\bonChange\s*=\s*{\s*\$${label}\s*}\s*.*/>`,
      "s",
    ),
  );
  if (!elementMatch) {
    console.error("No value found for label:", label);
    return sketch;
  }

  const element = elementMatch[0];
  const index = elementMatch.index!;
  const updatedElement = element.replace(
    // NOTE: For future me, ?<= is a positive lookbehind, ?: is a non-capturing group, and ?= is a positive lookahead
    /(?<=\bvalue\s*=\s*")(?:[^"\\]|\\.)*(?=")/,
    value,
  );
  return (
    sketch.slice(0, index) +
    updatedElement +
    sketch.slice(index + element.length)
  );
}

export function stubHoles(sketch: string) {
  // match all`{$1}` and place them in an array
  const matches = [...sketch.matchAll(/{\s*\$(\d*)\s*}/g)];
  const stubs = matches
    .map((match) => `let $${match[1]} = () => {};`)
    .join("\n");
  return `${stubs}\n${sketch}`;
}

export function maxHoleLabel(sketch: string) {
  return [...sketch.matchAll(/\$(\d*)/g)].reduce(
    (max, match) => Math.max(max, parseInt(match[1], 10)),
    0,
  );
}

export function getIndentation(sketch: string, pos: number) {
  const beginningPos = sketch.slice(0, pos).lastIndexOf("\n") + 1;
  if (beginningPos === 0) {
    return 0; // No newline found
  }
  const line = sketch.slice(beginningPos, pos);
  const match = line.match(/^\s*/);
  return match ? match[0].length : 0;
}

export async function format(sketch: string, removeLastSemicolon = true) {
  try {
    const formatted = await prettier.format(sketch, {
      parser: "flow",
      plugins: [prettierPluginFlow, prettierPluginEstree],
    });
    if (removeLastSemicolon) {
      return formatted.trimEnd().slice(0, -1);
    } else {
      return formatted.trimEnd();
    }
  } catch (e) {
    console.error("Error formatting sketch:", e);
    return sketch;
  }
}

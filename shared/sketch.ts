import prettier from "prettier/standalone";
import prettierPluginFlow from "prettier/plugins/flow";
import prettierPluginEstree from "prettier/plugins/estree";

export function replaceHoles(sketch: string, replacement: string) {
  return sketch.replaceAll(/\$(\d*)/g, replacement);
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

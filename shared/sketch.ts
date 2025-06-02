import prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";

export function replaceHoles(sketch: string) {
  return sketch.replaceAll(/\$(\d*)/g, "() => { addAction($1); }");
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

export async function format(sketch: string) {
  const formatted = await prettier.format(sketch, {
    parser: "babel",
    plugins: [prettierPluginBabel, prettierPluginEstree],
  });
  return formatted.trimEnd().slice(0, -1); // Remove the last semicolon
}

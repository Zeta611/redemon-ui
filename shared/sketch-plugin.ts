import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from "@codemirror/view";
import { Range } from "@codemirror/state";
import { syntaxTree } from "@codemirror/language";
import { tw } from "./utils";
import { getIndentation, maxHoleLabel } from "./sketch";

class TextReplaceWidget extends WidgetType {
  constructor(
    readonly id: number,
    readonly value: string,
    readonly onSubmit: (value: string) => void,
  ) {
    super();
  }

  eq(other: TextReplaceWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    wrap.className = tw`inline-flex items-center gap-0.5 pl-1`;

    const textarea = wrap.appendChild(document.createElement("div"));
    textarea.className = tw`z-0 h-4 resize-x overflow-hidden rounded bg-orange-100 px-1 text-black hover:bg-orange-200 focus:bg-orange-200 focus:outline-1 focus:outline-orange-500`;
    textarea.setAttribute("contenteditable", "plaintext-only");
    textarea.textContent = this.value;

    const submitButton = wrap.appendChild(document.createElement("button"));
    submitButton.className = tw`rounded bg-orange-200 p-0.5 text-orange-900 hover:bg-orange-400`;
    submitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
    submitButton.onclick = () => {
      const value = textarea.textContent?.trim();
      if (value) {
        this.onSubmit(value);
      }
    };

    return wrap;
  }
}

class AttributeReplaceWidget extends WidgetType {
  constructor(
    readonly id: number,
    readonly identifier: string,
    readonly value: string,
    readonly onSubmit: (value: string) => void,
  ) {
    super();
  }

  eq(other: AttributeReplaceWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    wrap.className = tw`inline-flex items-center gap-0.5 px-0.5`;

    const textarea = wrap.appendChild(document.createElement("div"));
    textarea.className = tw`z-0 h-4 resize-x overflow-hidden rounded bg-orange-100 px-1 text-black hover:bg-orange-200 focus:bg-orange-200 focus:outline-1 focus:outline-orange-500`;
    textarea.setAttribute("contenteditable", "plaintext-only");
    textarea.textContent = this.value;

    const submitButton = wrap.appendChild(document.createElement("button"));
    submitButton.className = tw`rounded bg-orange-200 p-0.5 text-orange-900 hover:bg-orange-400`;
    submitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
    submitButton.onclick = () => {
      const value = textarea.textContent?.trim();
      if (value) {
        this.onSubmit(value);
      }
    };

    return wrap;
  }
}

function replaceText(
  view: EditorView,
  from: number,
  to: number,
  value: string,
) {
  view.dispatch({
    changes: {
      from,
      to,
      insert: value,
    },
  });
  return true;
}

class NodeEditWidget extends WidgetType {
  constructor(
    readonly id: number,
    readonly onCopy: () => void,
    readonly onRemove: () => void,
  ) {
    super();
  }

  eq(other: NodeEditWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    wrap.className = tw`inline-flex items-center gap-0.5 pl-0.5`;

    const removeButton = wrap.appendChild(document.createElement("button"));
    removeButton.className = tw`rounded bg-red-200 p-0.5 text-red-900 hover:bg-red-400`;
    removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>`;
    removeButton.onclick = this.onRemove;

    const copyButton = wrap.appendChild(document.createElement("button"));
    copyButton.className = tw`rounded bg-green-200 p-0.5 text-green-900 hover:bg-green-400`;
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-plus-icon lucide-copy-plus"><line x1="15" x2="15" y1="12" y2="18"/><line x1="12" x2="18" y1="15" y2="15"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
    copyButton.onclick = this.onCopy;

    return wrap;
  }
}

function copyNode(view: EditorView, from: number, to: number) {
  const sketch = view.state.doc.toString();
  const nextLabel = maxHoleLabel(sketch) + 1;
  const indent = getIndentation(sketch, to);

  const element = view.state.sliceDoc(from, to);
  view.dispatch({
    changes: {
      from: to,
      to: to,
      insert:
        "\n" +
        " ".repeat(indent) +
        element.replace(/\$(\d*)/g, `$${nextLabel}`),
    },
  });
  return true;
}

function removeNode(view: EditorView, from: number, to: number) {
  const sketch = view.state.doc.toString();
  const fromIndent = getIndentation(sketch, from);
  view.dispatch({
    changes: {
      from: from - fromIndent - 1, // -1 for the newline before the element
      to: to,
    },
  });
  return true;
}

function editDecorations(view: EditorView) {
  const widgets: Range<Decoration>[] = [];
  let cnt = 0;

  for (const { from, to } of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      from,
      to,
      enter: (node) => {
        // console.log(node.name, view.state.sliceDoc(node.from, node.to));
        switch (node.name) {
          case "JSXText": {
            let text = view.state.sliceDoc(node.from, node.to);
            if (text.trim() === "") {
              break;
            }
            const leadingSpaceLen = text.match(/^\s+/)?.[0]?.length ?? 0;
            const trailingSpaceLen = text.match(/\s+$/)?.[0]?.length ?? 0;
            const from = node.from + leadingSpaceLen;
            const to = node.to - trailingSpaceLen;
            text = text.slice(leadingSpaceLen, text.length - trailingSpaceLen);
            const deco = Decoration.replace({
              widget: new TextReplaceWidget(++cnt, text, (value) =>
                replaceText(view, from, to, value),
              ),
              side: 1,
            });
            widgets.push(deco.range(from, to));
            break;
          }
          case "JSXAttribute": {
            const attribute = view.state.sliceDoc(node.from, node.to);
            const [identifier, value] = attribute.split("=");
            if (!(value.startsWith('"') && value.endsWith('"'))) {
              break;
            }
            const from = node.from + identifier.length + 2; // +2 for the '="'
            const to = node.to - 1; // -1 for the '"'
            const deco = Decoration.replace({
              widget: new AttributeReplaceWidget(
                ++cnt,
                identifier,
                value.slice(1, -1), // remove the surrounding quotes
                (value) => {
                  replaceText(view, from, to, value);
                },
              ),
              side: 1,
            });
            widgets.push(deco.range(from, to));

            break;
          }
          case "JSXElement": {
            const children = node.node.getChildren("JSXElement");
            children.forEach((child) => {
              const deco = Decoration.widget({
                widget: new NodeEditWidget(
                  ++cnt,
                  () => copyNode(view, child.from, child.to),
                  () => removeNode(view, child.from, child.to),
                ),
                side: 1,
              });
              widgets.push(deco.range(child.to));
            });
            break;
          }
        }
      },
    });
  }
  // widgets should be sorted by from or the plugin will crash
  widgets.sort((a, b) => a.from - b.from);
  return Decoration.set(widgets);
}

function editPlugin() {
  return ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;

      constructor(view: EditorView) {
        this.decorations = editDecorations(view);
      }

      update(update: ViewUpdate) {
        if (
          update.docChanged ||
          update.viewportChanged ||
          syntaxTree(update.startState) != syntaxTree(update.state)
        ) {
          this.decorations = editDecorations(update.view);
        }
      }
    },
    { decorations: (v) => v.decorations },
  );
}

export { editPlugin };

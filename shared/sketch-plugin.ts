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

class EditWidget extends WidgetType {
  constructor(
    readonly id: number,
    readonly onCopy: () => void,
    readonly onRemove: () => void,
  ) {
    super();
  }

  eq(other: EditWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    wrap.setAttribute("class", tw`inline-flex items-center gap-0.5 px-0.5`);

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
        if (node.name === "JSXElement") {
          const children = node.node.getChildren("JSXElement");
          children.forEach((child) => {
            const deco = Decoration.widget({
              widget: new EditWidget(
                ++cnt,
                () => copyNode(view, child.from, child.to),
                () => removeNode(view, child.from, child.to),
              ),
              side: 1,
            });
            widgets.push(deco.range(child.to));
          });
        }
      },
    });
  }
  // widgets should be sorted by from or the plugin will crash
  widgets.sort((a, b) => a.from - b.from);
  return Decoration.set(widgets);
}

const editPlugin = ViewPlugin.fromClass(
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
  {
    decorations: (v) => v.decorations,
    eventHandlers: {
      click: (e, view) => {
        const target = e.target as HTMLElement;
        console.log("target", target);
      },
    },
  },
);

export { editPlugin };

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

    const copyButton = wrap.appendChild(document.createElement("button"));
    copyButton.className = tw`ml-1 size-3 align-top text-xs`;
    copyButton.textContent = "📋";
    copyButton.onclick = this.onCopy;

    const removeButton = wrap.appendChild(document.createElement("button"));
    removeButton.className = tw`ml-1 size-3 align-top text-xs`;
    removeButton.textContent = "❌";
    removeButton.onclick = this.onRemove;
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

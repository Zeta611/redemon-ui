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

class EditWidget extends WidgetType {
  constructor(
    readonly id: number,
    readonly onclick: () => void,
  ) {
    super();
  }

  eq(other: EditWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    const button = wrap.appendChild(document.createElement("button"));
    button.className = tw`ml-1 size-3 bg-orange-500 align-middle`;
    button.onclick = this.onclick;
    return wrap;
  }
}

function duplicateNode(view: EditorView, from: number, to: number) {
  const element = view.state.sliceDoc(from, to);
  const change = { from: to, to: to, insert: element };
  view.dispatch({ changes: change });
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
              widget: new EditWidget(++cnt, () =>
                duplicateNode(view, child.from, child.to),
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
        let target = e.target as HTMLElement;
        console.log("target", target);
      },
    },
  },
);

export { editPlugin };

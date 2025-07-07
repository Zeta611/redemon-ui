import {
  Decoration,
  DecorationSet, // eslint-disable-line
  EditorView,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from "@codemirror/view";
import { Range } from "@codemirror/state";
import { syntaxTree } from "@codemirror/language";
import { RefObject } from "react";
import { tw } from "./utils";
import { getIndentation, maxHoleLabel } from "./sketch";
import {
  attributeReplace,
  constReplace,
  edit,
  index,
  int,
  nodeCopy,
  nodeDelete,
  nodeInsert,
  parse,
  string,
} from "./lang.gen";

const submitButtonClass = tw`rounded bg-orange-200 p-0.5 text-orange-900 shadow-xs/75 inset-shadow-2xs/90 inset-shadow-white hover:bg-orange-300`;
const removeButtonClass = tw`rounded bg-red-300 p-0.5 text-red-900 shadow-xs/75 inset-shadow-2xs/90 inset-shadow-white hover:bg-red-400`;
const copyButtonClass = tw`rounded bg-emerald-300 p-0.5 text-emerald-900 shadow-xs/75 inset-shadow-2xs/90 inset-shadow-white hover:bg-emerald-400`;
const insertButtonClass = tw`rounded bg-amber-300 p-0.5 text-amber-900 shadow-xs/75 inset-shadow-2xs/90 inset-shadow-white hover:bg-amber-400`;

const textAreaClass = tw`z-0 h-4 resize overflow-hidden rounded bg-orange-100 px-1 text-black hover:bg-orange-200 focus:bg-orange-200 focus:outline-1 focus:outline-orange-500`;
const insertAreaClass = tw`z-0 field-sizing-content h-20 w-sm resize overflow-hidden rounded bg-amber-100 px-1 text-black hover:bg-amber-400 focus:bg-amber-200 focus:outline-1 focus:outline-amber-500`;

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
    textarea.className = textAreaClass;
    textarea.setAttribute("contenteditable", "plaintext-only");
    textarea.textContent = this.value;

    const submitButton = wrap.appendChild(document.createElement("button"));
    submitButton.className = submitButtonClass;
    submitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
    submitButton.onclick = () => {
      const value = textarea.textContent?.trim();
      if (value) {
        console.debug("Submitting value:", value);
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
    textarea.className = textAreaClass;
    textarea.setAttribute("contenteditable", "plaintext-only");
    textarea.textContent = this.value;

    const submitButton = wrap.appendChild(document.createElement("button"));
    submitButton.className = submitButtonClass;
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
  readonly onCopy?: () => void;
  readonly onRemove?: () => void;
  readonly onInsert?: (value: string) => void;

  constructor(
    readonly id: number,
    callbacks: {
      onCopy?: () => void;
      onRemove?: () => void;
      onInsert?: (value: string) => void;
    },
  ) {
    super();
    this.onCopy = callbacks.onCopy;
    this.onRemove = callbacks.onRemove;
    this.onInsert = callbacks.onInsert;
  }

  eq(other: NodeEditWidget) {
    return other.id == this.id;
  }

  toDOM() {
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    wrap.className = tw`inline-flex flex-col gap-1 pl-0.5`;

    const buttons = wrap.appendChild(document.createElement("div"));
    buttons.className = tw`flex flex-row items-center gap-1`;

    if (this.onRemove) {
      const removeButton = buttons.appendChild(
        document.createElement("button"),
      );
      removeButton.className = removeButtonClass;
      removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>`;
      removeButton.onclick = this.onRemove;
    }

    if (this.onCopy) {
      const copyButton = buttons.appendChild(document.createElement("button"));
      copyButton.className = copyButtonClass;
      copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-plus-icon lucide-copy-plus"><line x1="15" x2="15" y1="12" y2="18"/><line x1="12" x2="18" y1="15" y2="15"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      copyButton.onclick = this.onCopy;
    }

    if (this.onInsert) {
      const insertButton = buttons.appendChild(
        document.createElement("button"),
      );
      insertButton.className = insertButtonClass;
      insertButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-code-icon lucide-square-code"><path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`;
      insertButton.onclick = () => {
        insertLine.classList.toggle("hidden");
      };

      const insertLine = wrap.appendChild(document.createElement("div"));
      insertLine.className = tw`flex hidden items-end gap-1`;
      const insertArea = insertLine.appendChild(
        document.createElement("textarea"),
      );
      insertArea.className = insertAreaClass;
      insertArea.placeholder = "Insert new element here";
      const submitInsert = insertLine.appendChild(
        document.createElement("button"),
      );
      submitInsert.className = submitButtonClass;
      submitInsert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
      submitInsert.onclick = () => {
        const value = insertArea.value.trim();
        if (value) {
          // TS is dumb...
          this.onInsert!(value);
          insertArea.value = "";
          insertLine.classList.add("hidden");
        }
      };
    }

    return wrap;
  }
}

function copyNode(view: EditorView, from: number, to: number) {
  const sketch = view.state.doc.toString();
  const nextLabel = maxHoleLabel(sketch) + 1;
  const indent = getIndentation(sketch, to);

  const element = view.state.sliceDoc(from, to);
  console.debug("Copying element", element);
  const nextElement = element.replace(/\$\d*/g, `$${nextLabel}`);
  console.debug("Copied new element", nextElement);
  view.dispatch({
    changes: {
      from: to,
      to: to,
      insert: "\n" + " ".repeat(indent) + nextElement,
    },
  });
  return true;
}

function insertNode(view: EditorView, value: string, to: number) {
  const sketch = view.state.doc.toString();
  const indent = getIndentation(sketch, to);
  view.dispatch({
    changes: {
      from: to,
      to: to,
      insert: "\n" + " ".repeat(indent) + value,
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

// This counter is used to *always* give a unique ID to each widget each update
// If this turns out to be a problem, we can keep track of the ranges of each widget and bookkeep them with each edit
let cnt = 0;

function editDecorations(
  view: EditorView,
  addEditRef: RefObject<
    (getSketch: () => string, path: number[], edit: edit) => void
  >,
) {
  const widgets: Range<Decoration>[] = [];
  const currentPath: number[] = [];
  let currentIndex: number | null = null;

  const getSketch = () => view.state.doc.toString();

  syntaxTree(view.state).iterate({
    enter: (node) => {
      console.debug(
        "editDecorations:",
        node.name,
        node.from,
        node.to,
        view.state.sliceDoc(node.from, node.to),
      );
      switch (node.name) {
        case "JSXOpenTag":
          if (currentIndex !== null) {
            currentPath.push(currentIndex);
          }
          currentIndex = 0;
          break;

        case "JSXCloseTag":
          // if (currentPath.length === 0) {
          //   throw new Error("Invalid JSX structure");
          // }
          currentIndex = currentPath.pop()! + 1;
          break;

        case "JSXText": {
          if (currentIndex === null) {
            console.error(
              "JSXText without JSXOpenTag",
              currentPath,
              view.state.sliceDoc(node.from, node.to),
            );
            throw new Error("JSXText without JSXOpenTag");
          }

          let text = view.state.sliceDoc(node.from, node.to);
          if (text.trim() === "") {
            break;
          }
          const leadingSpaceLen = text.match(/^\s+/)?.[0]?.length ?? 0;
          const trailingSpaceLen = text.match(/\s+$/)?.[0]?.length ?? 0;
          const from = node.from + leadingSpaceLen;
          const to = node.to - trailingSpaceLen;
          text = text.slice(leadingSpaceLen, text.length - trailingSpaceLen);
          const path = [...currentPath, currentIndex++];
          const deco = Decoration.replace({
            widget: new TextReplaceWidget(++cnt, text, (value) => {
              replaceText(view, from, to, value);
              if (value.startsWith("{") && value.endsWith("}")) {
                value = value.slice(1, -1).trim();
                addEditRef.current(
                  getSketch,
                  path,
                  constReplace(int(Number(value))),
                );
              } else {
                addEditRef.current(
                  getSketch,
                  path,
                  constReplace(string(value)),
                );
              }
            }),
            side: 1,
          });
          widgets.push(deco.range(from, to));
          break;
        }

        case "JSXEscape": {
          if (currentIndex === null) {
            console.error(
              "JSXEscape without JSXOpenTag",
              currentPath,
              view.state.sliceDoc(node.from, node.to),
            );
            throw new Error("JSXEscape without JSXOpenTag");
          }

          const from = node.from;
          const to = node.to;
          const text = view.state.sliceDoc(from, to);
          const path = [...currentPath, currentIndex++];
          const deco = Decoration.replace({
            widget: new TextReplaceWidget(++cnt, text, (value) => {
              replaceText(view, from, to, value);
              if (value.startsWith("{") && value.endsWith("}")) {
                value = value.slice(1, -1).trim();
                addEditRef.current(
                  getSketch,
                  path,
                  constReplace(int(Number(value))),
                );
              } else {
                addEditRef.current(
                  getSketch,
                  path,
                  constReplace(string(value)),
                );
              }
            }),
            side: 1,
          });
          widgets.push(deco.range(from, to));
          break;
        }

        case "JSXAttribute": {
          const attribute = view.state.sliceDoc(node.from, node.to);
          const [identifier, value] = attribute.split("=");
          const from = node.from + identifier.length + 1; // +1 for the '='
          const to = node.to;
          const path = [...currentPath];
          const deco = Decoration.replace({
            widget: new AttributeReplaceWidget(
              ++cnt,
              identifier,
              value,
              (value) => {
                replaceText(view, from, to, value);
                addEditRef.current(
                  getSketch,
                  path,
                  attributeReplace(
                    identifier,
                    value.startsWith("{") && value.endsWith("}")
                      ? int(Number(value.slice(1, -1).trim()))
                      : string(value.slice(1, -1).trim()),
                  ),
                );
              },
            ),
            side: 1,
          });
          widgets.push(deco.range(from, to));
          break;
        }

        case "JSXElement": {
          const children = node.node.getChildren("JSXElement");
          const path =
            currentIndex === null
              ? [...currentPath]
              : [...currentPath, currentIndex];

          if (children.length === 0) {
            const openTag = node.node.getChild("JSXOpenTag");
            if (!openTag) {
              break;
            }
            const deco = Decoration.widget({
              widget: new NodeEditWidget(++cnt, {
                onInsert: (node) => {
                  insertNode(view, node, openTag.to);
                  addEditRef.current(
                    getSketch,
                    path,
                    nodeInsert(index(0), parse(node)),
                  );
                },
              }),
              side: 1,
            });
            widgets.push(deco.range(openTag.to));
          } else {
            children.forEach((child, idx) => {
              const deco = Decoration.widget({
                widget: new NodeEditWidget(++cnt, {
                  onCopy: () => {
                    copyNode(view, child.from, child.to);
                    addEditRef.current(getSketch, path, nodeCopy(index(idx)));
                  },
                  onRemove: () => {
                    removeNode(view, child.from, child.to);
                    addEditRef.current(getSketch, path, nodeDelete(index(idx)));
                  },
                  onInsert: (node) => {
                    insertNode(view, node, child.to);
                    addEditRef.current(
                      getSketch,
                      path,
                      nodeInsert(index(idx), parse(node)),
                    );
                  },
                }),
                side: 1,
              });
              widgets.push(deco.range(child.to));
            });
          }
          break;
        }
      }
    },
  });

  // widgets should be sorted by from or the plugin will crash
  widgets.sort((a, b) => a.from - b.from);
  return Decoration.set(widgets);
}

function editPlugin(
  addEditRef: RefObject<
    (getSketch: () => string, path: number[], edit: edit) => void
  >,
) {
  console.debug("Creating edit plugin");
  return ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;

      constructor(view: EditorView) {
        this.decorations = editDecorations(view, addEditRef);
      }

      update(update: ViewUpdate) {
        if (
          update.docChanged ||
          update.viewportChanged ||
          syntaxTree(update.startState) != syntaxTree(update.state)
        ) {
          console.debug("Updating edit decorations");
          this.decorations = editDecorations(update.view, addEditRef);
        }
      }
    },
    { decorations: (v) => v.decorations },
  );
}

export { editPlugin };

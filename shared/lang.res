@spice @genType @deriving(accessors)
type const_ =
  | String(string)
  | Int(int)

@spice @genType @deriving(accessors)
type label = Label(int)

@spice @genType
type attr_value = AttrConst(const_) | AttrFunc(label)

@spice
type rec tree =
  | Const(const_)
  | Elem(elem)
@spice
and elem = {
  name: string,
  attrs: list<(string, attr_value)>,
  children: list<tree>,
}

@spice @genType @deriving(accessors)
type index = Index(int)

@spice
type path = list<index>

@spice @genType @deriving(accessors)
type edit =
  | NodeCopy(index)
  | NodeDelete(index)
  | NodeInsert(index, tree)
  | ConstReplace(const_)
  | AttributeReplace(string, Js.Null.t<const_>)

@spice
type action_type = Click | Input

@spice
type action = {
  label: label,
  action_type: action_type,
  arg?: string,
}

@spice
type demo_step = {
  action: action,
  edits: array<(path, edit)>,
}

@spice
type demo = {
  init: tree,
  steps: array<demo_step>,
}

@genType @deriving(accessors)
type timeline_item =
  | Action(action)
  | Edit(path, edit)

@genType
type timeline = array<timeline_item>

let rec collectEdits = timeline => {
  switch timeline[0] {
  | None | Some(Action(_)) => []
  | Some(Edit(path, edit)) => {
      timeline->Array.shift->ignore
      let rest = collectEdits(timeline)
      [(path, edit), ...rest]
    }
  }
}

@genType
type demo_steps = array<demo_step>

@genType
let rec timelineToDemoSteps: timeline => demo_steps = timeline => {
  switch timeline[0] {
  | None => []
  | Some(Edit(_, _)) => {
      Console.error2("Timeline cannot start with an edit action", timeline)
      throw(Failure("Timeline cannot start with an edit action"))
    }
  | Some(Action(action)) => {
      timeline->Array.shift->ignore
      let edits = collectEdits(timeline)
      let steps = timelineToDemoSteps(timeline)
      [{action, edits}, ...steps]
    }
  }
}

@module("./lang.bc.js")
external _parse: string => 'result = "parse"

@genType
let parse: string => tree = prog => {
  switch tree_decode(_parse(prog)) {
  | Ok(tree) => tree
  | Error(err) => throw(Failure(err.path + ": " + err.message))
  }
}

type synthesisResult = {
  code?: string,
  error?: string,
}

@module("./lang.bc.js")
external _synthesize: (string, string) => synthesisResult = "synthesize"

@genType
let synthesize = (prog, steps_array) => {
  // Convert the array of array of steps to a string representation
  let steps =
    steps_array
    ->Array.map(steps => steps->Array.map(step => step->demo_step_encode)->JSON.Encode.array)
    ->JSON.Encode.array
    ->JSON.stringify
  Console.debug2("Stringified steps:", steps)
  _synthesize(prog, steps)
}

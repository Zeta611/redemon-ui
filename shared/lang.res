@spice
type const =
  | String(string)
  | Int(int)
  | Bool(bool)

@spice
type attr_value = AttrConst(const) | AttrFunc

@spice
type rec tree =
  | Const(const)
  | Elem(elem)
@spice
and elem = {
  name: string,
  attrs: list<(string, attr_value)>,
  children: list<tree>,
}

@module("./lang.bc.js")
external _parse: string => 'result = "parse"

let parse = prog => {
  tree_decode(_parse(prog))
}

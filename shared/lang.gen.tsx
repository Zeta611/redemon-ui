/* TypeScript file generated from lang.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as langJS from './lang.res.mjs';

import type {list} from '../shared/shims/RescriptPervasives.shim.ts';

export type const_ = 
    { TAG: "String"; _0: string }
  | { TAG: "Int"; _0: number };

export type label = { TAG: "Label"; _0: number };

export type attr_value = 
    { TAG: "AttrConst"; _0: const_ }
  | { TAG: "AttrFunc"; _0: label };

export type tree = 
    { TAG: "Const"; _0: const_ }
  | { TAG: "Elem"; _0: elem };

export type elem = {
  readonly name: string; 
  readonly attrs: list<[string, attr_value]>; 
  readonly children: list<tree>
};

export type index = { TAG: "Index"; _0: number };

export type path = list<index>;

export type edit = 
    { TAG: "NodeCopy"; _0: index }
  | { TAG: "NodeDelete"; _0: index }
  | { TAG: "NodeInsert"; _0: index; _1: tree }
  | { TAG: "ConstReplace"; _0: const_ }
  | { TAG: "AttributeReplace"; _0: string; _1: (null | const_) };

export type action_type = "Click" | "Input";

export type action = {
  readonly label: label; 
  readonly action_type: action_type; 
  readonly arg?: string
};

export type demo_step = { readonly action: action; readonly edits: Array<[path, edit]> };

export type timeline_item = 
    { TAG: "Action"; _0: action }
  | { TAG: "Edit"; _0: path; _1: edit };

export type timeline = timeline_item[];

export type demo_steps = demo_step[];

export type synthesisResult = { readonly code?: string; readonly error?: string };

export const string: (_1:string) => const_ = langJS.string as any;

export const int: (_1:number) => const_ = langJS.int as any;

export const label: (_1:number) => label = langJS.label as any;

export const index: (_1:number) => index = langJS.index as any;

export const nodeCopy: (_1:index) => edit = langJS.nodeCopy as any;

export const nodeDelete: (_1:index) => edit = langJS.nodeDelete as any;

export const nodeInsert: (_1:index, _2:tree) => edit = langJS.nodeInsert as any;

export const constReplace: (_1:const_) => edit = langJS.constReplace as any;

export const attributeReplace: (_1:string, _2:(null | const_)) => edit = langJS.attributeReplace as any;

export const action: (_1:action) => timeline_item = langJS.action as any;

export const edit: (_1:path, _2:edit) => timeline_item = langJS.edit as any;

export const timelineToDemoSteps: (timeline:timeline) => demo_steps = langJS.timelineToDemoSteps as any;

export const parse: (prog:string) => tree = langJS.parse as any;

export const synthesize: (prog:string, steps_array:Array<demo_step[]>) => synthesisResult = langJS.synthesize as any;

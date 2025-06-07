import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { list } from "./shims/RescriptPervasives.shim";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function tw(strings: TemplateStringsArray, ...values: any[]) {
  return String.raw({ raw: strings }, ...values);
}

export function fromArray<T>(a: T[]): list<T> {
  let _i = (a.length - 1) | 0;
  let _res = /* [] */ 0;
  while (true) {
    const res = _res;
    const i = _i;
    if (i < 0) {
      // @ts-expect-error: ReScript-generated
      return res;
    }
    // @ts-expect-error: ReScript-generated
    _res = {
      hd: a[i],
      tl: res,
    };
    _i = (i - 1) | 0;
    continue;
  }
}

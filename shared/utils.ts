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

export function toArray<T>(l: list<T>): T[] {
  const result: T[] = [];
  // The runtime list can be either pair-based [hd, tl] or object-based { hd, tl }.
  let current: unknown = l as unknown;
  while (current) {
    if (Array.isArray(current)) {
      const [head, tail] = current as unknown as [T, unknown];
      result.push(head);
      current = tail;
    } else if (
      typeof current === "object" &&
      current !== null &&
      "hd" in current &&
      "tl" in current
    ) {
      const node = current as { hd: T; tl: unknown };
      result.push(node.hd);
      current = node.tl;
    } else {
      break;
    }
  }
  return result;
}

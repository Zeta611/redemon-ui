import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function tw(strings: TemplateStringsArray, ...values: any[]) {
  return String.raw({ raw: strings }, ...values);
}

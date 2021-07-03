import { Whitespace } from "./shared";

export type TrimStart<S extends string> = S extends `${Whitespace}${infer T}`
  ? TrimStart<T>
  : S;
export type TrimEnd<S extends string> = S extends `${infer T}${Whitespace}`
  ? TrimEnd<T>
  : S;

export type Trim<S extends string> = TrimEnd<TrimStart<S>>;

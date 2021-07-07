import { expectType } from "tsd";
import {
  ExtractParams,
  HasI18nSlot,
  ParseParams,
} from "../src/utils/ParseParams";

//#region test HasI18nSlot
declare const _hasI18nSlot: <T extends string>(str: T) => HasI18nSlot<T>;
expectType<false>(_hasI18nSlot("not have"));
expectType<false>(_hasI18nSlot("not have {{}}"));
expectType<true>(_hasI18nSlot("has {{o}}"));
//#endregion

//#region test ExtractParams

type T1 = ExtractParams<"some {{param}}">; // "param"
type T2 = ExtractParams<"with {{one}},with {{two}}">; // "one" | "two"

type T1Params = Record<T1, string>; // { param:string }
type T2Params = Record<T2, string>; // { one:string, two:string }

declare const ExtractParams: <T extends string>(str: T) => ExtractParams<T>;

expectType<never>(ExtractParams("nothing"));
expectType<"one">(ExtractParams("{{one}}"));
expectType<"one">(ExtractParams("prfix {{one}}"));
expectType<"one">(ExtractParams("prfix {{one}} rest"));
expectType<"one" | "two">(ExtractParams("prfix {{one}} rest {{two}}"));
expectType<"one" | "two">(ExtractParams("prfix {{one}} rest {{two}} rest2"));

expectType<" one " | "two  ">(
  ExtractParams("prfix {{ one }} rest {{two  }} rest2")
);
//#endregion

//#region test ParseParams

declare const parseParams: <T extends string>(str: T) => ParseParams<T>;

expectType<never>(parseParams("nothing"));
expectType<"one">(parseParams("{{one}}"));
expectType<"one">(parseParams("prfix {{one}}"));
expectType<"one">(parseParams("prfix {{one}} rest"));
expectType<"one" | "two">(parseParams("prfix {{one}} rest {{two}}"));
expectType<"one" | "two">(parseParams("prfix {{one}} rest {{two}} rest2"));
expectType<"one" | "two">(parseParams("prfix {{ one }} rest {{two  }} rest2"));
//#endregion

import { expectType } from "tsd";
import {
  _ExcludeWhitSpace,
  _ExtractParams,
  ParseParams,
} from "../src/utils/ParseParams";

//#region test _ExtractParams

declare const _extractParams: <T extends string>(str: T) => _ExtractParams<T>;

expectType<never>(_extractParams("nothing"));
expectType<"one">(_extractParams("{{one}}"));
expectType<"one">(_extractParams("prfix {{one}}"));
expectType<"one">(_extractParams("prfix {{one}} rest"));
expectType<"one" | "two">(_extractParams("prfix {{one}} rest {{two}}"));
expectType<"one" | "two">(_extractParams("prfix {{one}} rest {{two}} rest2"));

expectType<" one " | "two  ">(
  _extractParams("prfix {{ one }} rest {{two  }} rest2")
);
//#endregion

//#region test _ExcludeWhitSpace
declare const _excludeWhitSpace: <T extends string>(
  ...args: T[]
) => _ExcludeWhitSpace<T>;

expectType<"one" | "two">(_excludeWhitSpace("one", "two", " "));
expectType<"one" | "two">(_excludeWhitSpace("one", "two", " ", "\r"));
expectType<" one " | "  two">(_excludeWhitSpace(" one ", "  two", " ", "\r"));
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

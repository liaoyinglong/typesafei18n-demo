import { expectType } from "tsd";
import {
  _ExtractParams,
  HasI18nKey,
  ParseParams,
} from "../src/utils/ParseParams";

//#region test HasI18nKey
declare const _hasI18nKey: <T extends string>(str: T) => HasI18nKey<T>;
expectType<false>(_hasI18nKey("not have"));
expectType<false>(_hasI18nKey("not have {{}}"));
expectType<true>(_hasI18nKey("has {{o}}"));
//#endregion

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

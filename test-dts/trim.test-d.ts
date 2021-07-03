import { expectType } from "tsd";
import { Trim, TrimEnd, TrimStart } from "../src/utils/trim";

//#region test TrimStart
declare const trimStart: <S extends string>(str: S) => TrimStart<S>;
expectType<"abc">(trimStart("abc"));
expectType<"abc">(trimStart("    abc"));
expectType<"abc  ">(trimStart("    abc  "));
//#endregion

//#region test TrimEnd
declare const trimEnd: <S extends string>(str: S) => TrimEnd<S>;
expectType<"abc">(trimEnd("abc"));
expectType<"abc">(trimEnd("abc  "));
expectType<"    abc">(trimEnd("    abc  "));
//#endregion

//#region test Trim
declare const trim: <S extends string>(str: S) => Trim<S>;
expectType<"abc">(trim("abc"));
expectType<"abc">(trim("abc  "));
expectType<"abc">(trim("    abc  "));
//#endregion

//#region test ExcludeWhitSpace
import { expectType } from "tsd";
import { ExcludeWhitSpace } from "../src/utils/shared";

declare const excludeWhitSpace: <T extends string>(
  ...args: T[]
) => ExcludeWhitSpace<T>;

expectType<"one" | "two">(excludeWhitSpace("one", "two", " "));
expectType<"one" | "two">(excludeWhitSpace("one", "two", " ", "\r"));
expectType<" one " | "  two">(excludeWhitSpace(" one ", "  two", " ", "\r"));
//#endregion

import { HasI18nKey, ParseParams } from "./utils/ParseParams";
import { resources } from "./resources";

type Data = typeof resources.en.global;

function t<K extends keyof Data>(
  key: K,
  ...args: HasI18nKey<Data[K]> extends true
    ? [Record<ParseParams<Data[K]>, string>]
    : []
) {}

// t("noParams");
// t("paramsThree", { one: "" });

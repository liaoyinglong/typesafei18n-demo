import { resources } from "./resources";
import { HasI18nKey, ParseParams } from "./utils/ParseParams";
import { PathKeys } from "./utils/PathKeys";

type Data = typeof resources.en;

type LangData<
  Path extends string,
  D = Data
> = Path extends `${infer NS}:${infer Key}`
  ? NS extends keyof D
    ? D[NS]
    : never
  : never;

type I18nKey<T extends string, D> = T extends `${infer NS}:${infer Key}`
  ? Key extends keyof D
    ? D[Key]
    : never
  : never;

function t<K extends PathKeys<Data>, V extends I18nKey<K, LangData<K>>>(
  key: K,
  ...args: V extends string
    ? HasI18nKey<V> extends true
      ? [Record<ParseParams<V>, string>]
      : []
    : []
) {}

t("global:noParams");

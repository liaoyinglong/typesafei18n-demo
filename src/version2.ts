import { resources } from "./resources";
import { HasI18nKey, ParseParams } from "./utils/ParseParams";
import { PathKeys } from "./utils/PathKeys";
import { GetNsData } from "./utils/GetNsData";

type Data = typeof resources.en;

type I18nKey<T extends string, D> = T extends `${infer NS}:${infer Key}`
  ? Key extends keyof D
    ? D[Key]
    : never
  : never;

function t<K extends PathKeys<Data>, V extends I18nKey<K, GetNsData<K, Data>>>(
  key: K,
  ...args: V extends string
    ? HasI18nKey<V> extends true
      ? [Record<ParseParams<V>, string>]
      : []
    : []
) {}

t("global:noParams");

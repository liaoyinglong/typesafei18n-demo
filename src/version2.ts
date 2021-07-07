import { resources } from "./resources";
import { HasI18nSlot, ParseParams } from "./utils/ParseParams";
import { PathKeys } from "./utils/PathKeys";
import { GetI18nValue } from "./utils/GetI18nValue";

type Data = typeof resources.en;

function t<K extends PathKeys<Data>, V extends GetI18nValue<K, Data>>(
  key: K,
  ...args: HasI18nSlot<V> extends true ? [Record<ParseParams<V>, string>] : []
) {}

t("global:noParams");
// t();

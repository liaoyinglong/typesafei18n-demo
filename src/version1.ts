import { resources } from "./resources";
import { ParseParams } from "./utils/ParseParams";
import { PathKeys } from "./utils/PathKeys";
import { GetI18nValue } from "./utils/GetI18nValue";

type Data = typeof resources.en;

function t<K extends PathKeys<Data>, V extends GetI18nValue<K, Data>>(
  key: K,
  params?: Record<ParseParams<V>, string>
) {}

// 对应翻译为： "Hello "
// 预期要报错，不应该有插值
t("global:noParams", { shoudNotHaveParams: "" });

// 对应的翻译内容为： "{{time}} {{tow}} {{three}} end"
// 预期要报错，应该有插值
t("global:paramsThree3");

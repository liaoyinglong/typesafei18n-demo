import { GetNsData } from "./GetNsData";

export type ExtractI18nKey<T> = T extends `${infer NS}:${infer Key}` ? Key : T;

/**
 * 获取对应翻译字符串
 */
export type GetI18nValue<
  T,
  Data,
  Key = ExtractI18nKey<T>,
  LangData = GetNsData<T, Data>
> = Key extends keyof LangData ? LangData[Key] : Key;

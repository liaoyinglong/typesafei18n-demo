import { GetNsData } from "./GetNsData";

/**
 * 获取对应翻译字符串
 */
export type GetI18nValue<
  T,
  Data,
  LangData = GetNsData<T, Data>
> = T extends `${infer NS}:${infer Key}`
  ? Key extends keyof LangData
    ? LangData[Key]
    : T
  : T;

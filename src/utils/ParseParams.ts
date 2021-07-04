import { ExcludeWhitSpace } from "./shared";
import { Trim } from "./Trim";

/**
 * 判断是否有 {{key}} 插值
 * {{}} 空字符串的并不算
 */
export type HasI18nKey<T extends string> = T extends `${any}{{}}${any}`
  ? false
  : T extends `${any}{{${string}}${any}`
  ? true
  : false;
/**
 * 提取 {{key}} 获得的 key 可能是有 有空格 空字符等
 */
export type _ExtractParams<
  T extends string,
  Params extends string = never
> = T extends `${infer Prefix}{{${infer Param}}}${infer Rest}`
  ? _ExtractParams<Rest, Params | Param>
  : Params;

/**
 * 获得的key 已经过滤掉 前后空格 空字符等
 */
export type ParseParams<
  T extends string,
  Params extends string = never
> = ExcludeWhitSpace<Trim<_ExtractParams<T, Params>>>;

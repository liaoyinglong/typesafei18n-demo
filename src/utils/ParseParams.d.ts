import { Whitespace } from "./shared";
import { Trim } from "./Trim";

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
 * 排除空字符串 换行符等
 */
export type _ExcludeWhitSpace<T extends string> = Exclude<T, Whitespace>;

/**
 * 获得的key 已经过滤掉 前后空格 空字符等
 */
export type ParseParams<
  T extends string,
  Params extends string = never
> = _ExcludeWhitSpace<Trim<_ExtractParams<T, Params>>>;

export type Whitespace = " " | "\n" | "\r" | "\t";
/**
 * 排除空字符串 换行符等
 */
export type ExcludeWhitSpace<T extends string> = Exclude<T, Whitespace>;

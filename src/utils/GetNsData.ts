/**
 * 提取 namespace
 */
export type ExtractNs<T> = T extends `${infer NS}:${infer Key}` ? NS : T;

/**
 * 获取命名空间对应的 data
 */
export type GetNsData<
  Path,
  AllData,
  NS = ExtractNs<Path>
> = NS extends keyof AllData ? AllData[NS] : unknown;

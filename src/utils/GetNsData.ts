type ExtractNs<T extends string> = T extends `${infer NS}:${infer Key}`
  ? NS
  : T;

export type GetNsData<
  Path extends string,
  AllData,
  NS = ExtractNs<Path>
> = NS extends keyof AllData ? AllData[NS] : unknown;

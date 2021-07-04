export type PathKeys<
  Data,
  NS extends keyof Data = keyof Data
> = NS extends string
  ? keyof Data[NS] extends string
    ? `${NS}:${keyof Data[NS]}`
    : never
  : never;

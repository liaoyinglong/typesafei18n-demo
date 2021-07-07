import { ExtractNs, GetNsData } from "../src/utils/GetNsData";
import { expectType } from "tsd";
//#region test ExtractNs

declare const extractNs: <T extends string>(str: T) => ExtractNs<T>;

expectType<"user">(extractNs("user:button"));
expectType<"user">(extractNs("user:"));
expectType<"user">(extractNs("user"));

//#endregion

//#region test GetNsData

const data = {
  user: {
    button: "按钮",
  },
  home: {
    title: "标题",
    subTitle: "子标题",
  },
} as const;

type Data = typeof data;

declare const getNsData: <T extends string>(key: T) => GetNsData<T, Data>;

expectType<Data["user"]>(getNsData("user"));
expectType<Data["user"]>(getNsData("user:"));
expectType<Data["user"]>(getNsData("user:login"));
expectType<Data["home"]>(getNsData("home"));
expectType<Data["home"]>(getNsData("home:"));
expectType<Data["home"]>(getNsData("home:login"));
//#endregion

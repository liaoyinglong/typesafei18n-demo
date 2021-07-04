import { GetNsData } from "../src/utils/GetNsData";
import { expectType } from "tsd";

const data = {
  user: {
    "login.button": "",
  },
  home: {
    title: "",
    subTitle: "",
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

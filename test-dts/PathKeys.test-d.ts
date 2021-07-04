import { PathKeys } from "../src/utils/PathKeys";
import { expectType } from "tsd";

declare const pathKeys: <T>(data: T) => PathKeys<T>;

const data1 = {
  user: {
    "login.button": "",
  },
  home: {
    title: "",
    subTitle: "",
  },
} as const;

expectType<"user:login.button" | "home:title" | "home:subTitle">(
  pathKeys(data1)
);

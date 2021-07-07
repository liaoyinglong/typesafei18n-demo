import { PathKeys } from "../src/utils/PathKeys";
import { expectType } from "tsd";

declare const pathKeys: <T>(data: T) => PathKeys<T>;

const data1 = {
  user: {
    button: "",
  },
  home: {
    title: "",
    subTitle: "",
  },
} as const;

// type Key = PathKeys<typeof data1>;
// function t(key: Key) {}
//
// t();

expectType<"user:button" | "home:title" | "home:subTitle">(pathKeys(data1));

import { GetI18nValue } from "../src/utils/GetI18nValue";
import { expectType } from "tsd";

const resources = {
  global: {
    noParams: "Hello",
    paramsOne: "Hello {{one}}",
    paramsTwo: "Hello {{one}} {{tow}} ",
  },
  login: {
    noParams: "Hello ",
    success: "Hello {{one}}",
    failure: "Hello {{one}} {{tow}} ",
  },
} as const;
type Data = typeof resources;
type T1 = GetI18nValue<"global:noParams", Data>;  // "Hello"
type T2 = GetI18nValue<"global:paramsTwo", Data>; // "Hello {{one}} {{tow}} "
type T3 = GetI18nValue<"login:success", Data>;    // "Hello {{one}}"

declare const getI18nValue: <T>(str: T) => GetI18nValue<T, Data>;

expectType<Data["global"]["noParams"]>(getI18nValue("global:noParams"));
expectType<Data["global"]["paramsTwo"]>(getI18nValue("global:paramsTwo"));

expectType<Data["login"]["noParams"]>(getI18nValue("login:noParams"));
expectType<Data["login"]["failure"]>(getI18nValue("login:failure"));

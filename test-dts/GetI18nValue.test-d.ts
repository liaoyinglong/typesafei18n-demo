import { GetI18nValue } from "../src/utils/GetI18nValue";
import { expectType } from "tsd";

const resources = {
  en: {
    global: {
      noParams: "Hello ",
      paramsOne: "Hello {{one}}",
      paramsTwo: "Hello {{one}} {{tow}} ",
      paramsThree: "Hello {{one}} {{tow}} {{three}}",
      paramsThree2: "Hello {{one}} {{tow}} {{three}} end",
    },
    login: {
      noParams: "Hello ",
      success: "Hello {{one}}",
      failure: "Hello {{one}} {{tow}} ",
    },
  },
} as const;

type Data = typeof resources.en;
declare const getI18nValue: <T>(str: T) => GetI18nValue<T, Data>;

expectType<Data["global"]["noParams"]>(getI18nValue("global:noParams"));
expectType<Data["global"]["paramsTwo"]>(getI18nValue("global:paramsTwo"));

expectType<Data["login"]["noParams"]>(getI18nValue("login:noParams"));
expectType<Data["login"]["failure"]>(getI18nValue("login:failure"));

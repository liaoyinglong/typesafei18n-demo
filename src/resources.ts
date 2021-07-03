export const resources = {
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

export type ResourceItem = typeof resources["en"];

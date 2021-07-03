const resources = {
  en: {
    global: {
      paramsOne: "Hello {{one}}",
      paramsTwo: "Hello {{one}} {{tow}} ",
      paramsThree: "Hello {{one}} {{tow}} {{three}}",
    },
  },
  zh: {},
} as const;

export type MainResourceType = typeof resources["en"];

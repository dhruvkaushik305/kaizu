import { atom } from "recoil";

export const signinAtom = atom({
  key: "signin",
  default: {
    email: "",
    password: "",
  },
});

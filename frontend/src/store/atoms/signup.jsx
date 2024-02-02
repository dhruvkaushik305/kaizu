import { atom } from "recoil";
export const signupAtom = atom({
  key: "signup",
  default: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
});

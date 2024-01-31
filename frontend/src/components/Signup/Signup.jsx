import { Button } from "./Button";
import { InputBar } from "./InputBar";

export function Signup() {
  return (
    <div className="p-6flex-col rounded-md h-fit p-8 bg-white">
      <div className="text-center font-bold text-3xl p-2">Sign Up</div>
      <div className="flex gap-3">
        <label className="w-full">
          First Name: <InputBar type={"text"} placeholder={"john"} />
        </label>
        <label className="w-full">
          Last Name: <InputBar type={"text"} placeholder={"doe"} />
        </label>
      </div>

      <label>
        Email:
        <InputBar type={"text"} placeholder={"johndoe@example.com"} />
      </label>
      <label>
        Password:
        <InputBar type={"password"} />
      </label>
      <Button text={"Sign Up"} />
    </div>
  );
}

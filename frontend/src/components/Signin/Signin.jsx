import { InputBar } from "../Signup/InputBar";
import { Button } from "../Signup/Button";
export function Signin() {
  return (
    <div className="flex-col bg-white rounded-md p-8">
      <div className="text-center font-bold text-3xl">Sign in</div>
      <label>
        Email:
        <InputBar type={"text"} />
      </label>
      <label>
        Password:
        <InputBar type={"password"} />
      </label>
      <Button text={"Sign in"} />
    </div>
  );
}

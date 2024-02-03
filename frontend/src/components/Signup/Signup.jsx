import { Button } from "./Button";
import { InputBar } from "./InputBar";

export function Signup() {
  return (
    <div className="p-6flex-col rounded-md h-fit p-8 bg-white">
      <div className="text-center font-bold text-3xl p-2">Sign Up</div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <label className="flex flex-col items-start gap-1 flex-1">
            First Name:
            <input
              type="text"
              placeholder="john"
              className="focus: outline-none border-black border-2 rounded-md p-1 w-full"
            />
          </label>
          <label className="flex flex-col items-start gap-1 flex-1">
            Last Name:
            <input
              type="text"
              placeholder="doe"
              className="focus: outline-none border-black border-2 rounded-md p-1 w-full"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex flex-col items-start gap-1 flex-1">
            Email:
            <input
              type="text"
              placeholder="johndoe@example.com"
              className="focus: outline-none border-black border-2 rounded-md p-1 w-full"
            />
          </label>
          <label className="flex flex-col items-start gap-1 flex-1">
            Password:
            <input
              type="password"
              placeholder="secret"
              className="focus: outline-none border-black border-2 rounded-md p-1 w-full"
            />
          </label>
        </div>
        <button className="bg-black border-2 text-white px-4 py-2 rounded-md text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}

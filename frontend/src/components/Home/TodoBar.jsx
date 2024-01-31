import { InputBar } from "../Signup/InputBar";
import { Button } from "../Signup/Button";
export function TodoBar() {
  return (
    <div className=" flex w-full justify-center gap-2 items-center absolute bottom-4">
      <input
        type="text"
        placeholder="Add something..."
        className="border-2 border-black w-9/12 rounded-md focus:outline-none py-2 px-2"
      />
      <button className="bg-black text-white p-2 px-3 rounded-md">Add</button>
    </div>
  );
}

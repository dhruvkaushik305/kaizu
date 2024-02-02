export function Signin() {
  return (
    <div className="flex-col bg-white rounded-md p-7">
      <div className="text-center font-bold text-3xl">Sign in</div>
      <label className="flex flex-col gap-1 m-2">
        Email: <br></br>
        <input
          type="text"
          placeholder="johndoe@example.com"
          name="email"
          className="border-black border-2 focus:outline-none rounded-md p-1"
        />
      </label>
      <label className="flex flex-col gap-1 m-2">
        Password:<br></br>
        <input
          type="password"
          placeholder="secret"
          name="password"
          className="border-black border-2 focus:outline-none rounded-md p-1"
        />
      </label>
      <div className="flex justify-center">
        <button className="bg-black text-white py-2 px-3 rounded-md">
          Sign in
        </button>
      </div>
    </div>
  );
}

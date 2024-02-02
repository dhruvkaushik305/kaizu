export function NavBar() {
  return (
    <div className="bg-red-500 w-full h-[64px] flex justify-center items-center">
      <div className="flex w-[70%] justify-between ">
        <div className="text-4xl font-mono text-center">Kaizu</div>
        <div>
          <button className="bg-black text-white px-3 py-2 rounded-md font-semibold">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

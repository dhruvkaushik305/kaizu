export function Button(props) {
  return (
    <div className="text-center">
      <button
        className={`${props.className} bg-black border-2 text-white px-4 py-1 rounded-md mt-3 w-8/12`}
      >
        {props.text}
      </button>
    </div>
  );
}

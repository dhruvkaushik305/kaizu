export function InputBar(props) {
  return (
    <div className="flex-1">
      <input
        type={`${props.type}`}
        // type="password"
        placeholder={props.placeholder}
        className={`focus: outline-none border-black border-2 rounded-md mt-1 w-full p-1 ${props.className}`}
      />
    </div>
  );
}

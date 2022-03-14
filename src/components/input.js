const Input = ({ type, placeholder, id, name, value, onChange, onBlur }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={
        type === "submit"
          ? "text-white bg-indigo-400 rounded-xl p-2 w-3/6 text-sm cursor-pointer hover:bg-indigo-500 font-semibold"
          : "border border-gray-300 focus:outline-none focus:border-gray-400 text-gray-600 rounded-xl p-2 w-3/6 text-sm"
      }
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default Input;

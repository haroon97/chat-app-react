const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="border border-gray-300 focus:outline-none focus:border-gray-400 text-gray-600 rounded-xl p-2 w-3/6 text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md  text-blue-300 hover:bg-stone-600 hover:text-white flex items-center justify-items-center bg-white hover:bg-blue-400"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

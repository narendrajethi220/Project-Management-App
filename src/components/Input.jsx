import PropTypes from "prop-types";
const Input = ({ label, textarea, ...props }) => {
  const styleClasses =
    "w-full p-1 border-b-2 rounded-sm border-zinc-400 bg-zinc-200 text-stone-600 focus:outline-none focus:border-zinc-600";

  return (
    <p className="flex flex-col gap-1 my-4  ">
      <label className="text-sm font-bold uppercase text-zinc-800">
        {label}
      </label>
      {textarea ? (
        <textarea className={styleClasses} {...props} />
      ) : (
        <input className={styleClasses} {...props} />
      )}
    </p>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

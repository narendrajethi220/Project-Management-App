import PropTypes from "prop-types";
const Input = ({ label, textarea, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

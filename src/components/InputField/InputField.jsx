import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputField = ({
  label,
  placeholder,
  required,
  type,
  value,
  onChange,
  isError = false,
}) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
        {required && "*"}
      </label>
      <input
        className={classnames(
          "appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
          {
            "border-red-500": isError,
            "border-gray-500 ": !isError,
          }
        )}
        id="grid-first-name"
        placeholder={placeholder}
        // required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        pattern={type === "tel" ? null : null}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  isError: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;

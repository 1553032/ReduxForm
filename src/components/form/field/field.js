import React from "react";

const renderField = ({
  input,
  type,
  label,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className="form-control"
        />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

export default renderField;

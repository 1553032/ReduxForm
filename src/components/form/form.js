import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "./field/field";
import validate from "../../utils/validation";

const form = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="firstName"
          component={renderField}
          label="First Name"
          type="text"
        />
      </div>
      <div className="form-group">
        <Field
          name="lastName"
          component={renderField}
          label="Last Name"
          type="text"
        />
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" type="text" />
      </div>
      <div className="form-group">
        <button name="submit" className="btn btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "contact",
  validate
})(form);

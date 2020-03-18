import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "../../../utils/validators/validators";

import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import style from "./UsersCourseLoginView.module.css";

const maxLength30 = maxLengthCreator(30);

const validate = values => {
  const errors = {};
  const requiredFields = ["ucLogin", "ucPassword"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.ucLogin &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.ucLogin)
  ) {
    errors.ucLogin = "Invalid email address";
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}

    //<TextField id="outlined-basic" label="Outlined" variant="outlined" />
  />
);

const renderTextPass = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    label={label}
    placeholder={label}
    type="password"
    autoComplete="current-password"
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      {/* <div>
        <Field
          component={"input"}
          name={"ucLogin"}
          placeholder={"Login"}
          type="email"
          validate={[requiredField, maxLength30]}
        />
      </div> */}
      {/* <div>
        <Field
          component={"input"}
          name={"ucPassword"}
          placeholder={"Password"}
          type={"password"}
        />
      </div> */}
      {/* <div>
        <Field component={"input"} name={"ucRememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>

      <p />
      <p /> */}

      <div>
        <Field
          component={renderTextField}
          name={"ucLogin"}
          label="Email"
          type="email"
          // validate={[requiredField, maxLength30]}
        />
      </div>
      <p />
      <div>
        <Field
          component={renderTextPass}
          name="ucPassword"
          label="Password"
          type={"password"}
        />
      </div>
      <div>
        <Field component={"input"} name={"ucRememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      {props.error && (
        <div className={style.FormSummaryError}>{props.error}</div>
      )}
    </form>
  );
};

const LoginFormReduxForm = reduxForm({
  form: "UsersCourseLogin",
  validate
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.UsersCourseLoginRequest();
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <LoginFormReduxForm onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Login;

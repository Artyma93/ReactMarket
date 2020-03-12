import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "../../../utils/validators/validators";

import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

const maxLength30 = maxLengthCreator(30);

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

const renderTextPass = ({ label }) => (
  <TextField
    label={label}
    type="password"
    autoComplete="current-password"
    variant="outlined"
  />
);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"ucLogin"}
          placeholder={"Login"}
          type="email"
          validate={[requiredField, maxLength30]}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"ucPassword"}
          placeholder={"Password"}
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

      <p />
      <p />
{/*       
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <p />
      <div>
        <Field name="email" component={renderTextPass} label="Password" />
      </div> */}
    </form>
  );
};

const LoginFormReduxForm = reduxForm({
  form: "UsersCourseLogin"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props
      .UsersCourseLoginRequest
      // formData.email,
      // formData.password,
      // formData.rememberMe
      ();
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

// class Login extends React.Component {
//   componentDidMount() {}
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Login</h1>
//         <LoginFormReduxForm />
//       </React.Fragment>
//     );
//   }
// }

export default Login;

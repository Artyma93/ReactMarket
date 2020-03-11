import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"ucLogin"}
          placeholder={"Login"}
          // validate={[requiredField, maxLength10]}
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
    </form>
  );
};

const LoginFormReduxForm = reduxForm({
  form: "UsersCourseLogin"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.UsersCourseLoginRequest(
      // formData.email,
      // formData.password,
      // formData.rememberMe
    );
  };


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

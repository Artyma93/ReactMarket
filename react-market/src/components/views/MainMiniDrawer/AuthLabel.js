import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputIcon from "@material-ui/icons/Input";
// const AuthLabelF = props => {
//   const { userCourseAuth, isAuth } = props;
//   return (
//     <React.Fragment>
//       {isAuth === false ? (
//         <NavLink to={"/login"}>
//           <IconButton color="inherit">
//             <InputIcon />
//           </IconButton>
//         </NavLink>
//       ) : (
//         <h1>login</h1>
//       )}
//     </React.Fragment>
//   );
// };

class AuthLabelC extends React.Component {
  componentDidMount() {}
  render() {
    const { userCourseAuth, isAuth } = this.props;

    // console.log("isAuth" + isAuth);
    // debugger;
    return (
      <React.Fragment>
        {!isAuth ? (
          <NavLink to={"/login"}>
            <IconButton color="inherit">
              <InputIcon />
            </IconButton>
          </NavLink>
        ) : (
          <h4>{userCourseAuth.login}</h4>
        )}
      </React.Fragment>
    );
  }
}

// const AuthLabelF2 = props => {
//   console.log(props);
//   const { userCourseAuth, isAuth } = props;
//   if (isAuth === false || isAuth === null) {
//     return <Auto />;
//   } else {
//     // return <Login {...props} />;
//   }

//   return (
//     <React.Fragment>
//       {isAuth === false ? (
//         <NavLink to={"/login"}>
//           <IconButton color="inherit">
//             <InputIcon />
//           </IconButton>
//         </NavLink>
//       ) : (
//         <h1>login</h1>
//       )}
//     </React.Fragment>
//   );
// };

// function Auto() {
//   return (
//     <React.Fragment>
//       <NavLink to={"/login"}>
//         <IconButton color="inherit">
//           <InputIcon />
//         </IconButton>
//       </NavLink>
//     </React.Fragment>
//   );
// }

// function Login(props) {
//   return <h3>login</h3>;
// }

export default AuthLabelC;

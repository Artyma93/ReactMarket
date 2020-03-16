import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputIcon from "@material-ui/icons/Input";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";

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
// const classes = useStyles();

class AuthLabelC extends React.Component {
  componentDidMount() {}
  render() {
    const { userCourseAuth, isAuth } = this.props;

    // console.log("isAuth" + isAuth);
    // debugger;
    return (
      <React.Fragment>
        {!isAuth ? (
          <>
            {/* <NavLink to={"/login"}>
            <IconButton color="inherit">
              <InputIcon />
            </IconButton>
          </NavLink> */}

            <IconButton color="inherit" component={NavLink} to={"/login"}>
              <InputIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={6}>
                <h4>{userCourseAuth.login}</h4>
              </Grid>
              <Grid item xs={6}>
                <IconButton color="inherit">
                  <ExitToAppIcon onClick={this.props.logout} />
                </IconButton>
              </Grid>
            </Grid>
          </>
        )}
      </React.Fragment>
    );
  }
}



export default AuthLabelC;

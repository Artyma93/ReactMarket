import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputIcon from "@material-ui/icons/Input";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";

// const classes = useStyles();

export class UsersCourseLogoutView extends React.Component {
  componentDidMount() {}
  render() {
    const { userCourseAuth, isAuth } = this.props;

    return (
      <React.Fragment>
        {!isAuth ? (
          <>
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
                  <ExitToAppIcon onClick={this.props.UsersCourseLogoutRequest} />
                </IconButton>
              </Grid>
            </Grid>
          </>
        )}
      </React.Fragment>
    );
  }
}

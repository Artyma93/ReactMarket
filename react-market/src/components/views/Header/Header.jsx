import React from "react";
// import {AppBar, ToolBar, Typography} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

export default props => (
  <AppBar position="sticky" color="default">
    <ToolBar>
      Header
    </ToolBar>
  </AppBar>
);

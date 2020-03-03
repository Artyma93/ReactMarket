import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import InputIcon from "@material-ui/icons/Input";

import UsersCourseAutoContainer from "../../containers/UsersCourseAuto";

import LocalMallIcon from "@material-ui/icons/LocalMall";
import WorkIcon from "@material-ui/icons/Work";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";

import { Link } from "react-router-dom";

import MiniDrawer from "../MiniDrawer";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";

import AuthLabel from "./AuthLabel";

import "./MainMiniDrawer.css";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MainMiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { userCource } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemsMenu = {
    items: [
      {
        name: "Бюджет",
        icons: <WorkIcon />,
        link: "/"
      },
      {
        name: "ПФХД",
        icons: <LocalMallIcon />,
        link: "/dog/"
      },
      {
        name: "Расчёт стоимости",
        icons: <BlurCircularIcon />,
        link: "/wfc/"
      },
      // {
      //   name: "Загрузка 1",
      //   icons: <AccountBoxIcon />,
      //   link: "/uc/"
      // },
      {
        name: "Загрузка 2",
        icons: <AccountBoxIcon />,
        link: "/uca/"
      },
      // {
      //   name: "UC Profile",
      //   icons: <AccountBoxIcon />,
      //   link: "/ucp/"
      // },
      {
        name: "BGU",
        icons: <InboxIcon />,
        link: "/bgu/"
      }
    ]
  };

  // debugger

  const { userCourseAuth, isAuth } = props;
  // console.log("isAuth")
  // console.log(isAuth)

  //  debugger;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={11}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item xs={1}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                      [classes.hide]: open
                    })}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6" noWrap>
                    Главное меню
                  </Typography>
                  {/* <IconButton color="inherit">
                    <InputIcon />
                  </IconButton> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <AuthLabel {...props} />
            </Grid>
            {/* <Grid container direction="row" justify="flex-end">
              <Grid item>
                <IconButton color="inherit">
                  <InputIcon />
                </IconButton>
              </Grid>
            </Grid> */}
          </Grid>
        </Toolbar>
        {/* <IconButton color="inherit">
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" noWrap>
          Главное меню2
        </Typography> */}
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {itemsMenu.items.map(item => (
            <React.Fragment>
              <Link to={item.link}>
                <ListItem button key={item.name}>
                  <ListItemIcon>{item.icons}</ListItemIcon>
                  <ListItemText primary={item.name}></ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Typography
          component="div"
          style={{ backgroundColor: "LightGrey", height: "10000" }}
        >
          {userCource}
        </Typography>
      </main>
    </div>
  );
}

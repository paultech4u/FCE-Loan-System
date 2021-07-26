import React from "react";
import clsx from "clsx";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { AttachMoney, Dashboard, Payment, People } from "@material-ui/icons";

function AppSideBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const drawerItems = React.useMemo(() => drawerListItem, []);
  const drawerItemsAdmin = React.useMemo(() => drawerListItemAdmin, []);

  const isAdmin = true;
  const isLoggedIn = true;

  return (
    <Drawer
      open={true}
      hideBackdrop={true}
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: clsx(classes.drawerBgColor, classes.drawer) }}
    >
      <Box className={classes.drawerToolbar} />
      <Box display="flex" flexDirection="column" flex={1}>
        <Box flex={2}>
          <List>
            {isLoggedIn && isAdmin === false
              ? drawerItemsAdmin.map(({ icon, href, title }) => (
                  <ListItem
                    button
                    onClick={() => history.push(href)}
                    className={clsx(classes.drawerItem, {
                      [classes.drawerItemActive]: location.pathname === href,
                    })}
                    key={href}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                ))
              : drawerItems.map(({ icon, href, title }) => (
                  <ListItem
                    button
                    onClick={() => history.push(href)}
                    className={clsx(classes.drawerItem, {
                      [classes.drawerItemActive]: location.pathname === href,
                    })}
                    key={href}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
          </List>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Button
            color="secondary"
            variant="contained"
            onClick={props.onPressed}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

const drawerListItem = [
  {
    icon: <Dashboard fontSize="large" style={{ color: "white" }} />,
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <Payment fontSize="large" style={{ color: "white" }} />,
    href: "/deposit",
    title: "Deposit",
  },
  {
    icon: <AttachMoney fontSize="large" style={{ color: "white" }} />,
    href: "/loan",
    title: "Loan",
  },
];

const drawerListItemAdmin = [
  {
    icon: <Dashboard fontSize="large" style={{ color: "white" }} />,
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <People fontSize="large" style={{ color: "white" }} />,
    href: "/users",
    title: "Users",
  },
  {
    icon: <Payment fontSize="large" style={{ color: "white" }} />,
    href: "/admin/deposit",
    title: "Deposit",
  },
  {
    icon: <AttachMoney fontSize="large" style={{ color: "white" }} />,
    href: "/admin/loans",
    title: "Loan",
  },
];

export default AppSideBar;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
  },
  drawerBgColor: {
    width: 300,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  drawerToolbar: theme.mixins.toolbar,
  drawerItem: {
    marginBottom: 20,
  },
  drawerItemActive: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

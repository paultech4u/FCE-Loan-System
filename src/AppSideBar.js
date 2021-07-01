import React from "react";
import clsx from "clsx";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Divider,
  IconButton,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { Dashboard, Euro, Save, Settings, Style } from "@material-ui/icons";

function AppSideBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const drawerItems = React.useMemo(() => drawerListItem, []);

  return (
    <Drawer
      open={true}
      hideBackdrop={true}
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: clsx(classes.drawerBgColor, classes.drawer) }}
    >
      <Box className={classes.drawerToolbar} />
      <Divider />
      <Box display="flex" flexDirection="column" flex={1}>
        <Box flex={2}>
          <List>
            {drawerItems.map(({ icon, href }) => (
              <ListItem
                button
                onClick={() => history.push(href)}
                className={clsx(classes.drawerItem, {
                  [classes.drawerItemActive]: location.pathname === href,
                })}
                key={href}
              >
                <ListItemIcon>{icon}</ListItemIcon>
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
          <IconButton color="secondary" onClick={props.onLogout}>
            <Settings fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
}

const drawerListItem = [
  {
    icon: <Dashboard fontSize="large" style={{ color: "white" }} />,
    href: "/dashboard",
  },
  {
    icon: <Style fontSize="large" style={{ color: "white" }} />,
    href: "/stock",
  },
  {
    icon: <Save fontSize="large" style={{ color: "white" }} />,
    href: "/orders",
  },
  {
    icon: <Euro fontSize="large" style={{ color: "white" }} />,
    href: "/tracked-orders",
  },
];

export default AppSideBar;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 70,
  },
  drawerBgColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  drawerToolbar: theme.mixins.toolbar,
  drawerItem: {
    marginBottom: 20,
    "& .MuiListItemIcon-root": {
      minWidth: 0,
    },
  },
  drawerItemActive: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

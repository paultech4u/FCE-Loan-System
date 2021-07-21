import React from "react";
import {
  Box,
  AppBar,
  IconButton,
  makeStyles,
  TextField,
  InputAdornment,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Settings, Notifications } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function AppNavBar(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      className={classes.container}
    >
      <Box>
        <TextField
          id="search_item"
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Box mr={40}>
          <IconButton>
            <Badge color="primary" badgeContent={"9+"}>
              <Notifications fontSize="large" />
            </Badge>
          </IconButton>
        </Box>
        <Box mr={40}>
          <IconButton>
            <Settings fontSize="large" />
          </IconButton>
        </Box>
        <Box mr={10}>
          <Avatar
            alt="profile"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/profile")}
          >
            A
          </Avatar>
        </Box>
      </Box>
    </AppBar>
  );
}

export default AppNavBar;

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

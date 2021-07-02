import React from "react";
import {
  Box,
  AppBar,
  IconButton,
  makeStyles,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import PowerSettingNew from "@material-ui/icons/PowerSettingsNew";
import Notifications from "@material-ui/icons/Notifications";
import { Search } from "@material-ui/icons";

function AppNavBar(props) {
  const classes = useStyles();
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
      <Box display="flex">
        <Box>
          <IconButton>
            <Notifications fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <PowerSettingNew fontSize="large" />
          </IconButton>
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

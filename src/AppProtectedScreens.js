import { Box } from "@material-ui/core";
import { Switch } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";

function AppProtectedScreens(params) {
  return (
    <Box display="flex" height={1}>
      <AppSideBar />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppNavBar />
        <Box>
          <Switch></Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default AppProtectedScreens;

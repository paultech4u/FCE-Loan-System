import { Box } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";
import Dashboard from "./pages/dashboard";

function AppProtectedScreens(params) {
  return (
    <Box display="flex" height={1}>
      <AppSideBar />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppNavBar />
        <Box>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect exact to="/dashboard" />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default AppProtectedScreens;

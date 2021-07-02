import { Box, makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";
import Dashboard from "./pages/dashboard";
import background from "./assets/background.jpeg";

function AppProtectedScreens(params) {
  const classes = useStyles();
  return (
    <Box display="flex" height={1}>
      <AppSideBar />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppNavBar />
        <Box className={classes.container}>
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

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundClip: "border-box",
    backgroundSize: 'cover'
  },
}));

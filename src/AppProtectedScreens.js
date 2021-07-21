import { Box, makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";
import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import Saving from "./pages/Saving";
import Profile from "./pages/Profile";
import background from "./assets/background.jpeg";

function AppProtectedScreens(props) {
  const classes = useStyles();
  return (
    <Box display="flex" height={1}>
      <AppSideBar onPressed={props.onPressed} />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppNavBar />
        <Box className={classes.container}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />

            <Route path="/deposit" component={Saving} />
            <Route path="/loan" component={Loan} />
            <Route path="/profile" component={Profile} />
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
    backgroundSize: "cover",
    height: "100%",
    overflowY: "auto",
  },
}));

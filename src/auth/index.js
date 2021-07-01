import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Box } from "@material-ui/core";
import LandingPage from "./LandingPage";
import RegisterForm from "./RegisterForm";

function AuthScreens(props) {
  return (
    <Box height={1} display="flex" flexDirection="column">
      <Switch>
        <Route exact path="/main" component={LandingPage} />
        <Route exact path="/login" component={() => LoginForm(props)} />
        <Route exact path="/register" component={RegisterForm} />
        <Redirect exact to="/main" />
      </Switch>
    </Box>
  );
}

export default AuthScreens;

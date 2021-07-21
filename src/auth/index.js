import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Box, makeStyles } from "@material-ui/core";
import LandingPage from "./LandingPage";
import RegisterForm from "./RegisterForm";
import plainBackground from "../assets/plain.jpeg";

function AuthScreens(props) {
  const classes = useStyles();
  return (
    <Box
      height={1}
      display="flex"
      flexDirection="column"
      className={classes.container}
    >
      <Switch>
        <Route path="/main" component={LandingPage} />
        <Route path="/login" component={() => LoginForm(props)} />
        <Route path="/register" component={RegisterForm} />
        <Redirect exact to="/main" />
      </Switch>
    </Box>
  );
}

export default AuthScreens;

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${plainBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundClip: "border-box",
    backgroundSize: "cover",
  },
}));

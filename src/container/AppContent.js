import { Box, makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import background from "../assets/background.jpeg";
import routes from "../routes";

function AppContent(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Switch>
        {routes.map((route, index) => {
          return (
            route.component && (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect to="/dashboard" />
      </Switch>
    </Box>
  );
}

export default AppContent;

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

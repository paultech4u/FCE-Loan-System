import React from "react";
import theme, { GlobalCss } from "./theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import AuthScreens from "./auth";
import AppLayout from "./container/AppLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // const history = useHistory();
  const toggleScreensViews = () => {
    setIsAuthenticated((p) => !p);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalCss />
        {isAuthenticated === true ? (
          <AppLayout onPressed={toggleScreensViews} />
        ) : (
          <AuthScreens onPressed={toggleScreensViews} />
        )}
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;

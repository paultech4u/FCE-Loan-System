import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box display="flex" alignItems="center" height={1}>
      <Box flex={1}>Image</Box>
      <Box display="flex" alignItems="center" flexDirection="column" flex={1}>
        <Box mb={10}>
          <Typography variant="h5">Log In</Typography>
        </Box>
        <Paper elevation={10} className={classes.authContainer}>
          <Box display="flex" alignItems="center" mb={10}>
            <Box mr={20}>
              <Typography>Staff Id</Typography>
            </Box>
            <TextField id="staff_id" variant="filled" />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={10}>
              <Typography>Password</Typography>
            </Box>
            <TextField id="password" variant="filled" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            m={15}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={props.onPressed}
            >
              Login
            </Button>
            <Box mt={5} display="flex" justifyContent="center">
              <Typography>Don't have an account ?</Typography>
              <Typography
                color="primary"
                style={{cursor: 'pointer', marginLeft: 5}}
                onClick={() => history.push("/register")}
              >
                Register
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default LoginForm;

const useStyles = makeStyles(() => ({
  authContainer: {
    padding: 30,
  },
}));

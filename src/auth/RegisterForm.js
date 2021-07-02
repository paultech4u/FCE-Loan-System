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
import WalletLogo from "../assets/walletLogo.jpeg";

function RegisterForm(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box display="flex" alignItems="center" height={1}>
      <Box display="flex" justifyContent="center" flex={1}>
        <img src={WalletLogo} alt="logo" height={500} />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" flex={1}>
        <Box mb={10}>
          <Typography variant="h5">Sign Up</Typography>
        </Box>
        <Paper elevation={10} className={classes.authContainer}>
          <Box display="flex" alignItems="center" mb={10}>
            <Box mr={28}>
              <Typography>Fullname</Typography>
            </Box>
            <TextField id="fullname" variant="filled" />
          </Box>
          <Box display="flex" alignItems="center" mb={10}>
            <Box mr={42}>
              <Typography>Email</Typography>
            </Box>
            <TextField id="email" variant="filled" />
          </Box>
          <Box display="flex" alignItems="center" mb={10}>
            <Box mr={10}>
              <Typography>Phone Number</Typography>
            </Box>
            <TextField id="phone_number" variant="filled" />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={30}>
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
              Register
            </Button>
            <Box mt={5} display="flex" justifyContent="center">
              <Typography>Already have an account ?</Typography>
              <Typography
                color="primary"
                style={{ cursor: "pointer", marginLeft: 5 }}
                onClick={() => history.push("/login")}
              >
                Log In
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default RegisterForm;

const useStyles = makeStyles(() => ({
  authContainer: {
    padding: 30,
  },
}));

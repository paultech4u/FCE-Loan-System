import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LandingPage(props) {
  const history = useHistory();
  return (
    <Box display="flex" alignItems="center" height={1}>
      <Box flex={1}>Image</Box>
      <Box display="flex" alignItems="center" flexDirection="column" flex={1}>
        <Box mb={10}>
          <Typography variant="h4" align="center">
            WELCOME TO <br /> FCE CO-OPERATIVE SOCIETY
          </Typography>
          <Typography variant="h6" align="center">
            FCE Co-operative was establish on this day.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/login")}
          >
            Get Started 
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;

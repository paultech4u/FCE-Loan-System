import React from "react";
import {
  Box,
  Paper,
  Typography,
  useTheme,
  Avatar,
  Divider,
  Button,
} from "@material-ui/core";
import profilePlaceholder from '../assets/profile_placeholder.png'

function Dashboard(params) {
  const theme = useTheme();
  return (
    <Box p={40} display="flex" flex={1}>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        justifyContent="space-evenly"
      >
        <Paper
          style={{
            width: 800,
            height: 200,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {mockDetails.map(({ type, amount }, index) => (
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              key={index}
            >
              <Typography variant="h5">{type}</Typography>
              <Typography variant="h4">${amount}</Typography>
            </Box>
          ))}
        </Paper>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            width: 800,
            height: 500,
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            p={10}
            bgcolor={theme.palette.primary.main}
          >
            <Typography variant="h5" style={{ color: "white" }}>
              Transaction History
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            flex={1}
          >
            <Typography>No History</Typography>
          </Box>
        </Paper>
      </Box>
      <Paper
        style={{
          width: 500,
          height: 720,
          padding: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Avatar alt="profile_picture" src={profilePlaceholder} style={{ width: 250, height: 250 }}>
            C
          </Avatar>
        </Box>
        <Box display="flex" justifyContent="center" my={10}>
          <Typography variant="h5">John Doe</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="flex-end" mt={10}>
          <Button variant="contained" size="small" color="primary">
            Edit Profile
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;

const mockDetails = [
  { type: "Current Loan", amount: 5000 },
  { type: "Loan Balance", amount: 3000 },
  { type: "Account Balance", amount: 2000 },
];

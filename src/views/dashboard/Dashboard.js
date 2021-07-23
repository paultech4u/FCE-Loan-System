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
import profilePlaceholder from "../../assets/profile_placeholder.png";
import { ProgressStatus } from "../../components/Progress";

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
              <Typography variant="h4"> &#8358;{amount}</Typography>
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
          {mockTrns.length === 0 ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <Typography>No History</Typography>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              maxHeight={450}
              style={{ overflowY: "auto" }}
            >
              {mockTrns.map((values, index) => (
                <Paper
                  elevation={4}
                  key={index}
                  style={{
                    bgcolor: "yellow",
                    margin: "10px 10px",
                    padding: "10px 10px",
                  }}
                >
                  <Typography>{values.type}</Typography>
                  <Typography>{values.date}</Typography>
                  <Box>
                    <Typography variant="h4" align="center">
                      &#8358;{values.amount}
                    </Typography>
                  </Box>
                  <Typography>Message: {values.description}</Typography>
                </Paper>
              ))}
            </Box>
          )}
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
          <Avatar
            alt="profile_picture"
            src={profilePlaceholder}
            style={{ width: 250, height: 250 }}
          >
            C
          </Avatar>
        </Box>
        <Box display="flex" justifyContent="center" my={10}>
          <Typography variant="h5">JohnDoe</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="flex-end" mt={10}>
          <Button variant="contained" size="small" color="primary">
            Edit Profile
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" my={10}>
          <Typography>Username</Typography>
          <Typography>JohnDoe</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" my={10}>
          <Typography>Fullname</Typography>
          <Typography>John Doe</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" my={10}>
          <Typography>Mobile</Typography>
          <Typography>09045678784</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" my={10}>
          <Typography>Email address</Typography>
          <Typography>JohnDoe@gmail.com</Typography>
        </Box>
        <Divider />
        <Box my={10}>
          <Typography>Loan Status: </Typography>
          <ProgressStatus value={50} />
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;

const mockDetails = [
  { type: "Current Loan", amount: "5000.00" },
  { type: "Loan Balance", amount: "3000.00" },
  { type: "Account Balance", amount: "2000.00" },
];

const mockTrns = [
  {
    type: "Transfer",
    description: "Fund Transfer to Musa Musa was successful.",
    amount: "10,000.00",
    date: "23:10 10-July-2021",
  },
  {
    type: "Transfer",
    description: "Fund Transfer to Musa Musa was successful.",
    amount: "10,000.00",
    date: "23:10 10-July-2021",
  },
  {
    type: "Transfer",
    description: "Fund Transfer to Musa Musa was successful.",
    amount: "10,000.00",
    date: "23:10 10-July-2021",
  },
  {
    type: "Transfer",
    description: "Fund Transfer to Musa Musa was successful.",
    amount: "10,000.00",
    date: "23:10 10-July-2021",
  },
];

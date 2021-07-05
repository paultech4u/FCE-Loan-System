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
            width: 900,
            height: 200,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h5">Dashboard:</Typography>
          <Box>
            <Typography variant="h5">Account Balance:</Typography>
            <Typography variant="subtitle1">$5000</Typography>
          </Box>
        </Paper>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            width: 900,
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
          <Avatar alt="profile_picture" style={{ width: 250, height: 250 }}>
            C
          </Avatar>
        </Box>
        <Box display="flex" justifyContent="center" my={10}>
          <Typography variant="caption">John Doe</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex" justifyContent="center" mb={10}>
            <Button>Edit Profile</Button>
            <Divider />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button>Settings</Button>
            <Divider />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;

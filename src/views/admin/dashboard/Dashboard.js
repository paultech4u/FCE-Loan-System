import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import {
  PeopleOutlineOutlined,
  PlaylistAddCheckOutlined,
  ImportExportOutlined,
  TrendingDown
} from "@material-ui/icons";

function AdminDashboard(props) {
  return (
    <Box display="flex" alignItems="flex-start" flex={1}>
      <Box>
        <CustomCard
          icons={<PeopleOutlineOutlined />}
          title="Users"
          style={{ marginBottom: 20, marginRight: 40 }}
        />
        <CustomCard
          icons={<PlaylistAddCheckOutlined />}
          title="Approval/Request"
          style={{ marginBottom: 20, marginRight: 40 }}
        />
      </Box>
      <Box>
        <CustomCard
          icons={<ImportExportOutlined />}
          title="Total Loan Request"
          style={{ marginBottom: 20 }}
        />
        <CustomCard
          icons={<TrendingDown />}
          title="Total Deposit Members"
          style={{ marginBottom: 20 }}
        />
      </Box>
    </Box>
  );
}

export default AdminDashboard;

const CustomCard = ({ icons, title, ...others }) => {
  return (
    <Card {...others}>
      <CardContent>
        <Box>
          <Box display="flex" alignItems="center" color="success.main" my={2}>
            <Box>{icons}</Box>
            <Typography variant="subtitle1" style={{ marginLeft: 7 }}>
              {title}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              width={300}
              bgcolor="action.selected"
              padding={10}
              textAlign="center"
              mb={10}
            >
              <Typography variant="h5">1.3k</Typography>
              <Typography variant="h5">Total Users</Typography>
            </Box>
            <Box
              width={300}
              bgcolor="success.light"
              color="success.dark"
              padding={10}
              textAlign="center"
            >
              <Typography variant="h5">50</Typography>
              <Typography variant="h5">Active Users</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

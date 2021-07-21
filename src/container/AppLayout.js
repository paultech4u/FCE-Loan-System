import { Box } from "@material-ui/core";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";
import AppContent from "./AppContent";

function AppLayout(props) {
  return (
    <Box display="flex" height={1}>
      <AppSideBar onPressed={props.onPressed} />
      <Box display="flex" flexDirection="column" flex={1}>
        <AppNavBar />
        <AppContent />
      </Box>
    </Box>
  );
}

export default AppLayout;

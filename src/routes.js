import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import Saving from "./pages/Saving";
import Profile from "./pages/Profile";

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  { path: "/loan", name: 'Loan', component: Loan },
  { path: "/deposit", name: "Deposit", component: Saving },
];

export default routes;

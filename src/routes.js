import Dashboard from "./views/dashboard/Dashboard";
import Loan from "./views/Loan";
import Saving from "./views/Saving";
import Profile from "./views/Profile";

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  { path: "/loan", name: 'Loan', component: Loan },
  { path: "/deposit", name: "Deposit", component: Saving },
];

export default routes;

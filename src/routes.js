import Dashboard from "./views/dashboard/Dashboard";
import Loan from "./views/loan/Loan";
import Saving from "./views/Saving";
import Profile from "./views/Profile";
import Settings from "./views/Setting";
import Users from "./views/admin/users";
import LoanTable from "./views/admin/loan";
import DepositTable from "./views/admin/deposit";

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  { path: "/loan", name: "Loan", component: Loan },
  { path: "/deposit", name: "Deposit", component: Saving },
  { path: "/setting", name: "Setting", component: Settings },
  { path: "/users", name: "Users", component: Users },
  { path: "/admin/deposit", name: "Deposit", component: DepositTable },
  { path: "/admin/loans", name: "Loan", component: LoanTable },
];

export default routes;

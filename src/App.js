import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landingpage from "./Landingpage/Landingpage.jsx";
import UserLogin from "./User/Login/UserLogin.jsx";
import UserRegister from "./User/Register/UserRegister";
import Pagenotfound from "./User/Pagenotfound/Pagenotfound";
import Arena from "./User/Arenas/Arena";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import AdminUsers from "./Admin/AdminDashboard/AdminUsers";
import AllFutsal from "./Admin/AdminDashboard/AllFutsal";
import AdminFutsalOwners from "./Admin/AdminDashboard/AdminFutsalOwners";
import Logout from "./User/Logout/Logout";
import FutsalOwnerDashBoard from "./Futsalowner/OwnerDashboard/FutsalOwnerDashBoard";
import Membership from "./Futsalowner/OwnerDashboard/Membership";
import Bookings from "./Futsalowner/OwnerDashboard/Bookings";
import Trainings from "./Admin/Trainings/Trainings";
import News from "./Admin/News/News";
import FutsalRegistrationForm from "./Futsalowner/OwnerDashboard/FutsalRegistrationForm";
import PasswordVerify from "./User/Verify/PasswordVerify";
import EmailVerify from "./User/Verify/EmailVerify";
import CheckPin from "./User/Verify/CheckPin";
import NewPassword from "./User/Verify/NewPassword";
import AddTrainingForm from "./Admin/Trainings/AddTrainingForm";
import UserSettings from "./User/UserSettings/UserSettings";
import OwnerSettings from "./Futsalowner/OwnerSettings/OwnerSettings";
import AddTournamentForm from "./Admin/Tournaments/AddTournamentForm";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Test */}
          <Route exact path="/verify" component={EmailVerify} />
          {/* Users */}
          {/* Landing Page */}
          <Route exact path="/" component={Landingpage} />
          {/* Login */}
          <Route exact path="/login" component={UserLogin} />
          {/* Register */}
          <Route exact path="/register" component={UserRegister} />
          {/* Forgot password Check Pin */}
          <Route exact path="/verify_pin" component={CheckPin} />
          {/* New Password */}
          <Route exact path="/new_password" component={NewPassword} />
          {/* Futsal Arenas */}
          <Route exact path="/arenas" component={Arena} />
          {/* Settings */}
          <Route exact path="/settings" component={UserSettings} />
          {/* Change Password */}
          {/* Forgot Password */}
          <Route exact path="/forgot_password" component={PasswordVerify} />
          {/* Admin */}
          <Route exact path="/admin/futsal" component={AllFutsal} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/admin/users" component={AdminUsers} />
          <Route exact path="/admin/owners" component={AdminFutsalOwners} />
          {/* Futsal Owner */}
          <Route exact path="/owner/settings" component={OwnerSettings} />
          <Route
            exact
            path="/owner/dashboard"
            component={FutsalOwnerDashBoard}
          />
          <Route exact path="/owner/members" component={Membership} />
          <Route exact path="/owner/bookings" component={Bookings} />
          <Route
            exact
            path="/futsal/register"
            component={FutsalRegistrationForm}
          />
          {/* Trainings */}
          <Route exact path="/training" component={Trainings} />
          <Route exact path="/add_trainings" component={AddTrainingForm} />
          {/* Tournament */}
          <Route
            exact
            path="/add_tournaments"
            component={AddTournamentForm}
          />{" "}
          {/* News */}
          <Route exact path="/news" component={News} />
          {/* Logout */}
          <Route exact path="/logout" component={Logout} />
          {/* PagenotFOUND */}
          <Route exact path="*" component={Pagenotfound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

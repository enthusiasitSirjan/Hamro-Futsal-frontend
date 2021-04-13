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
import AddTrainingForm from "./Admin/Trainings/AddTrainingForm";
import UserSettings from "./User/UserSettings/UserSettings";
import OwnerSettings from "./Futsalowner/OwnerSettings/OwnerSettings";
import AddTournamentForm from "./Admin/Tournaments/AddTournamentForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
          {/* Futsal Arenas */}
          <PrivateRoute exact path="/arenas" component={Arena} />
          {/* Settings */}
          <PrivateRoute exact path="/settings" component={UserSettings} />
          {/* Change Password */}
          {/* Forgot Password */}
          <Route exact path="/forgot_password" component={PasswordVerify} />
          {/* Admin */}
          <PrivateRoute exact path="/admin/futsal" component={AllFutsal} />
          <PrivateRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <PrivateRoute exact path="/admin/users" component={AdminUsers} />
          <PrivateRoute
            exact
            path="/admin/owners"
            component={AdminFutsalOwners}
          />
          {/* Futsal Owner */}
          <PrivateRoute
            exact
            path="/owner/settings"
            component={OwnerSettings}
          />
          <PrivateRoute
            exact
            path="/owner/dashboard"
            component={FutsalOwnerDashBoard}
          />
          <PrivateRoute exact path="/owner/members" component={Membership} />
          <PrivateRoute exact path="/owner/bookings" component={Bookings} />
          <PrivateRoute
            exact
            path="/futsal/register"
            component={FutsalRegistrationForm}
          />
          {/* Trainings */}
          <PrivateRoute exact path="/training" component={Trainings} />
          <PrivateRoute
            exact
            path="/add_trainings"
            component={AddTrainingForm}
          />
          {/* Tournament */}
          <PrivateRoute
            exact
            path="/add_tournaments"
            component={AddTournamentForm}
          />{" "}
          {/* News */}
          <PrivateRoute exact path="/news" component={News} />
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

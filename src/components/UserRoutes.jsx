import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import EditUser from "./EditUser";
import Profile from "./Profile";
import ConfirmationBox from "./ConfirmationBox";
// import AddUser from "./AddUser";

const UserRoutes = () => {
  return (
    <Switch>
      <Route
        path="/edituser/:id"
        render={(routeConfig) => <EditUser type="edit" {...routeConfig} />}
      />
      <Route
        path="/addUser"
        render={(routeConfig) => <EditUser type="add" {...routeConfig} />}
      />
      <Route path="/profile" component={Profile} />
      <Route path="/userSuccess" component={ConfirmationBox} />
      <Route path="/home" component={Dashboard} />

      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;

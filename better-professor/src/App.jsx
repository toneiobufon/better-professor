
import React from 'react';

import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import AddAssignment from "./pages/AddAssignment";
import Assignments from "./pages/Assignments";
import CreateStudent from "./pages/CreateStudent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Signup from "./pages/Signup";
import NavigationHeader from './components/Navigation'
import EditAssignment from "./pages/EditAssignment";
import EditStudent from "./pages/EditStudent";
import Loading from "./pages/Loading";


function App() {
  return (
    <div >
      <Route path='/' component={NavigationHeader} />
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/addassignment/:id' component={AddAssignment} />
        <PrivateRoute exact path='/assignments/:id' component={Assignments} />
        <PrivateRoute path='/createstudent' component={CreateStudent} />
        <PrivateRoute path='/message/:id' component={Message} />
        <PrivateRoute path='/assignments/:student_id/editassignment/:id' component={EditAssignment} />
        <PrivateRoute path='/editstudent/:id' component={EditStudent} />
        <PrivateRoute path='/loading' component={Loading} />
      </Switch>
    </div>
  );
}

export default App;
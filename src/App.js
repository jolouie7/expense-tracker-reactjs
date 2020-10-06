import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import './App.css';

import ExpenseForm from "./components/ExpenseForm";
import AppNavbar from "./components/AppNavbar";
import SubHeader from "./components/SubHeader";
import PrivateRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <SubHeader />

        <Switch>
          <PrivateRoute path="/expense-list" component={ExpenseForm} />
          <Route exact path="/" component={() => <h1>Home Page</h1>} />
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  // loadUser: () => dispatch(loadUser()),
  // getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps)(App);
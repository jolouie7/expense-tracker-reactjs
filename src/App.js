import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';

import ExpenseForm from "./components/ExpenseForm";
import ExpenseGraph from "./components/ExpenseGraph";
import LandingPage from "./components/LandingPage";
import AppNavbar from "./components/AppNavbar";
import SubHeader from "./components/SubHeader";
import PrivateRoute from "./components/auth/ProtectedRoute";
import { getExpenses } from "./actions/expenseActions";

function App({ getExpenses, expenseList, isAuthenticated }) {
  useEffect(() => {
    getExpenses();
    // }, [getExpenses, expenseList]);
  }, [expenseList]);

  return (
    <Router>
      <div>
        <AppNavbar />
        {isAuthenticated ? <SubHeader /> : null}

        <Switch>
          {isAuthenticated ? (
            <div>
              <PrivateRoute path="/expense-list" component={ExpenseForm} />
              <PrivateRoute
                path="/expense-graph"
                component={ExpenseGraph}
              />{" "}
            </div>
          ) : (
            <Route exact path="/" component={LandingPage} />
          )}
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isLoggedIn: state.authReducer.user,
  expenseList: state.expenseReducer.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (id) => dispatch(getExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

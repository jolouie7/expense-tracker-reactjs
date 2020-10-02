import React from 'react';
import { connect } from "react-redux";
// import './App.css';

import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <div>
      <AppNavbar />
    </div>
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
// import React from 'react';
// import {Route, Redirect} from "react-router-dom";
// import { connect } from "react-redux";

// const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => {
//   return (
//     <Route {...rest} render={
//       (props) => {
//         if (isAuthenticated) {
//           return <Component {...props} />
//         } else {
//           return <Redirect to={
//             {
//               pathname: "/",
//               state: {
//                 from: props.location
//               }
//             }
//           }/>
//         }
//       }
//     }/>
//   )
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.authReducer.isAuthenticated,
// });

// export default connect(mapStateToProps)(ProtectedRoute)

// The react private route component renders a route component if the user is logged in, otherwise it redirects the user to the /login page.
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
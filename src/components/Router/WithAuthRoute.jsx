import React from "react";
import { Route, Redirect } from "react-router-dom";

function withAuthRoute(getToken, pathname) {
  return function AuthRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          if (getToken()) {
            return <Component {...props} />;
          }
          return (
            <Redirect to={{ pathname, state: { from: props.location } }} />
          );
        }}
      />
    );
  };
}
export default withAuthRoute;

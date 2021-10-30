import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div class="spinner-grow spinner-grow-sm text-dark me-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark spinner-grow-sm me-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow spinner-grow-sm text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

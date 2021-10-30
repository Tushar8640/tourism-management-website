import React from "react";
import { NavLink, Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import logo from "../../image/logo.png";

const Nav = () => {
  const { user, logOut } = useFirebase();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              <li className="nav-item mt-lg-2">
                <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mt-lg-2">
                <NavLink className="nav-link" to="/myorders">
                  My Orders
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/manageevent">
                  Manage All event
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addevent">
                  Add event
                </NavLink>
              </li> */}
              { user.email &&
              <li className="nav-item  ">
                <NavLink className="nav-link" to="/dashboard">
                 <span className="myOutlineButton">Dashboard</span> 
                </NavLink>
              </li>
              }
            </ul>

            <div className="d-flex">
              {(user?.email && (
                <div>
                 
                  <button onClick={handleLogOut} className="myOutlineButton">
                    LogOut
                    <span>
                      {" "}
                      <svg
                        className="logout-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <span className="ms-3 purple-text">{user?.displayName}</span>
                </div>
              )) || (
                <div className="div">
                  <Link to="/login">
                    <button className="myOutlineButton">
                      <span>
                      <svg
                        className="logout-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                      </span>
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

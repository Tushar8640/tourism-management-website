import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Addevent from "../AddEvent/Addevent";
import ManageEvents from "../Manage Events/ManageEvents";

const DashBoard = () => {
    const {user}=useAuth()
  const [control, setControl] = useState("ManageOrders");
  return (
    <div className="container-fluid my-5">
      <div className="purple-bg w-50  mx-auto"> <p className="text-center text-white py-3">Welcome!!To Dashboard {user?.displayName}</p></div>
      <div className="row">
        <div className="col-md-2 mt-4 h-auto purple-bg second-color-bg  shadow">
          <ul className="navbar-nav d-flex flex-column align-content-center">
            <li
              onClick={() => setControl("ManageOrders")}
              className="nav-item dash-li btn btn-outline-light mt-4"
            >
              Manage Orders
            </li>
            <li
              onClick={() => setControl("AddEvent")}
              className="nav-item dash-li mt-3 btn btn-outline-light"
            >
              Add Events
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
        <div className="col-md-10">
          {control === "ManageOrders" && <ManageEvents></ManageEvents>}
          {control === "AddEvent" && <Addevent></Addevent>}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

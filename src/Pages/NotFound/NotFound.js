import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-5 text-center">
      <h1 className="">
        Error 404 <br />
        No page Found{" "}
      </h1>
      <Link to="/home">
        <button className=" btn btn-primary my-3">Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

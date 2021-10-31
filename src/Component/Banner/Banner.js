import React from "react";
import banner from "../../image/banner.png";
const Banner = () => {
  return (
    <div className="  banner-design mx-auto  ">
      <div
        className=" vh-100"
        style={{
          backgroundImage: `url("https://i.ibb.co/7y7TdSv/3235342-ai.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex align-content-center justify-content-center">
          <div className="mt-5 w-50">
            <h1 className="purple-text">TRAVEL MORE TO DISCOVER YOURSELF</h1>
            <p className="text-muted ms-1">“Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
            <button className="myButton">Lets go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

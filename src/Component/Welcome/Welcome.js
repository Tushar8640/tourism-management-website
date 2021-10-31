import React from "react";

const Welcome = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 purple-text">Welcome To Our Website</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="div">
              <img className="w-100" src={"https://i.ibb.co/1vVWNnt/undraw-festivities-tvvj.png"} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex ">
          <div className="w-75 mt-4">
              <h2 className="fs-3 mb-4">About Us</h2>
              <p className="text-muted lh-2 ">If you’re looking for exposure to a true winter wonderland, you’ll be hard-pressed to find a better place than Finland for its bright Northern Lights and historical relation to the real Santa Claus. Findland’s official tourism website showcases all of the above while offering more specific travel information about the country’s climate, landscapes, urban sectors, and entertainment opportunities</p>
              <button className="myButton mt-3">Explore us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

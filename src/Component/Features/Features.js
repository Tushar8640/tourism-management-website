import React from "react";

const Features = () => {
  return (
    <div className="my-5 container mx-auto">
      <h1 className="text-center mb-5 purple-text">Our Special Features</h1>

      <div className="row ">
        <div className="col-12 col-md-4 mb-3">
          <div className="shadow text-center px-3 py-4">
            <img className="w-25"  src={"https://i.ibb.co/q9S1wvb/medical-care.png"} alt="" /> 
            <h1 className="fs-4 my-3">Emergency Medic</h1>
            <p>We have emergency medical facility for you.And have Specialized dectors.For emergency situation we will provide ambullance and all necessary equipment.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="shadow text-center px-3 py-4">
            <img  className="w-25" src={"https://i.ibb.co/R0P6Nrh/helping-hand.png"} alt="" />
            <h1 className="fs-4 my-3">24/7 Support</h1>
            <p>We have 24 hrs supoort team.They will help you any situation.When you needed just call to our help line.Our suppor team will contact with you as soon as posible.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="shadow text-center px-3 py-4">
            <img  className="w-25" src={"https://i.ibb.co/r3RR9vR/car.png"} alt="" />
            <h1 className="fs-4 my-3">Personal Vehicle</h1>
            <p>We will provide you peronal vehicle for moving.All the situation will handle by us.Or you can took a driver as low rate .Your moving will be so easy and comfortable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

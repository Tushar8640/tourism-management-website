import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const {user}=useAuth()
  const { id } = useParams();
  const [item, setItem] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const userName = user?.displayName;
  const userEmail = user?.email;
  useEffect(() => {
    fetch(`https://ancient-sierra-97155.herokuapp.com/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  //   console.log(item);
  //   console.log(id);

  const onSubmit = (data) => {
    data.eventName = item?.name;
    data.eventImage = item?.picture;
    data.status = "pending";

    // send order information to database
    fetch("https://ancient-sierra-97155.herokuapp.com/placeorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  //   console.log(watch("example"));
  return (
    <div className="container mx-auto">
      <h1 className="text-center">Place your order</h1>
      <div className="mt-4 row ">

        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-6 col-12 p-3">
          <div className=" shadow-sm mx-2 p-3 row">
            <div className="col-12 col-md-6">
              <img src={item?.picture} className="img-fluid" alt="" />
              <h1>{item?.name}</h1>
            </div>
            <div className="col-12 col-md-6 py-2">
              <h3>About Our Event</h3>
              <p>{item?.details}</p>
              <h1>Price: ${item?.price}</h1>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12 my-3  shadow-sm p-3">
          <div className="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}

              <input className="my-2 p-1 custom-input" defaultValue={userName} {...register("userName")} />
              <br />
              <input className="my-2 p-1 custom-input" defaultValue={userEmail} {...register("email")} />
              <br />

              {/* include validation with required or other standard HTML validation rules */}
              <input
              className="my-2 p-1 custom-input"
                {...register("address", { required: true })}
                placeholder="Your Address"
              />
              <br />
              <input
              className="my-2 py-1 px-2 custom-input"
                {...register("date", { required: true })}
                placeholder="Trip Date"
                type="date"
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input className="myButton" type="submit" />
            </form>
          </div>
        </div>
        {/* <div className="col-lg-1"></div> */}
      </div>
    </div>
  );
};

export default PlaceOrder;

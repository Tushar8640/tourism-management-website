import React from "react";
import { useForm } from "react-hook-form";

const Addevent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://ancient-sierra-97155.herokuapp.com/addevent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
    alert("Event Added")
  };
  return (
    <div className="container mx-auto my-5">
      <h1  className="purple-text text-center mb-4">Add More Event</h1>
      <div className="w-full ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="d-md-flex  justify-content-center">
          <div className="me-md-3">
            {" "}
            <label className="form-label mt-2">Event Name :</label>
            <input
              className="w-full form-control"
              placeholder="Event Name"
              {...register("name")}
            />
            {/* include validation with required or other standard HTML validation rules */}
            <label className="form-label mt-2">Price :</label>
            <input
              className="w-full form-control"
              placeholder="Price"
              type="number"
              {...register("price", { required: true })}
            />
            <label className="form-label mt-2">Picture Url :</label>
            <input
              className="w-full form-control"
              placeholder="Picture url"
              {...register("picture", { required: true })}
            />
            <label className="form-label mt-2">About Event :</label>
            <input
              className="w-full form-control"
              placeholder="About event"
              {...register("about", { required: true })}
            />
          </div>

          <div className="div">
            <label className="form-label mt-2">Duration :</label>
            <input
              className="w-full form-control"
              placeholder=" Duration"
              {...register("duration", { required: true })}
            />

            <label className="form-label mt-2">Event Details :</label>
            <textarea
              className="w-full form-control"
              rows="4"
              cols="50"
              placeholder="Event details"
              {...register("details", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="myButton mt-3" type="submit" />
          </div>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Addevent;

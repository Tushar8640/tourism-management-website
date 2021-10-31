import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [events, setEvents] = useState([]);
  const [isChange, setIsChange] = useState(false);
  // const [isApproved, setIsApproved] = useState(false);

  // get all orders
  useEffect(() => {
    fetch("https://ancient-sierra-97155.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [isChange]);
  console.log(events);

  // delete an event
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to  delete");
    if (confirm) {
      fetch(`https://ancient-sierra-97155.herokuapp.com/delete/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsChange(!isChange);
            alert("Delete SuccessFully");
          } else {
            setIsChange(false);
          }
        });
    }

    console.log(id);
  };

  // approve order
  const handleApprove = (id) => {
    // const status = { status: "approved" };
    fetch(`https://ancient-sierra-97155.herokuapp.com/approve/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // body: JSON.stringify("approved"),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsChange(!isChange);
          alert("Ordered Approved");
        } else {
          setIsChange(false);
        }
      });
    console.log(id);
  };
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center mb-4">All  orders </h1>

      <div className="row">
        {events.map((item, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="mx-2 my-4 shadow-sm p-2">
              <h1 className="fs-4">
                {" "}
                {parseInt(i) + 1}. {item.eventName}
              </h1>
              <h1 className="fs-5">Name: {item.userName}</h1>
              <h1 className="fs-6">{item.email}</h1>
              <p className="my-1"> Date : {item.date}</p>
              <p className="my-1"> Location : {item.address}</p>
              <div className="d-flex  justify-content-lg-between">
                <div>
                  <span>
                    {" "}
                    <button
                      onClick={() => handleApprove(item._id)}
                      className="purple-bg rounded text-white border-0"
                    >
                      Confirm
                    </button>{" "}
                  </span>
                  <span
                    className={
                      "btn-sm " +
                      ((item.status == "approved" && "text-success fw-bold") ||
                        "second-color-text")
                    }
                  >
                    {item.status}
                  </span>{" "}
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn-sm btn-outline-danger ms-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;




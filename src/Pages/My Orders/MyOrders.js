import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(`https://ancient-sierra-97155.herokuapp.com/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsloading(false);
      });
  }, [user.email,isChange]);

  const handleDeleteOrder=(id)=>{
    console.log(id)
    const confirm = window.confirm("Do you want to  delete");
    if (confirm) {
      fetch(`https://ancient-sierra-97155.herokuapp.com/deletemyorder/${id}`, {
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
  }

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-grow spinner-grow-sm text-dark me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark spinner-grow-sm me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <h1>My orders will appear here</h1>
      <div className="row">
        {orders?.map((item) => (
          <div key={item._id} className="shadow-sm my-3 col-12 px-3 col-lg-6 mt-3">
            <div className="d-flex flex-column flex-lg-row">
              <img src={item.eventImage} alt="" />
              <div className="ms-3 my-2">
                  <h1 className="fs-3">{item.eventName}</h1>
                <h6 className="text-warning fs-5">{item.status}</h6>
                <p>{item.date}</p>
                <button onClick={()=>handleDeleteOrder(item._id)} className="btn second-color-bg">Cancle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

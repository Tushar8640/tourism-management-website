import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import { Link } from "react-router-dom";
import Faq from "../../Component/Faq/Faq";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch("https://ancient-sierra-97155.herokuapp.com/alltrips")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setIsloading(false);
      });
  }, []);
  console.log(trips);

  return (
    <div>
      <Banner></Banner>

      {isLoading ? (
        <div className="text-center my-5">
          <div
            className="spinner-grow spinner-grow-sm text-dark me-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-dark spinner-grow-sm me-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <section className="my-5 container">
          <div className="row">
            <h1 className="text-center purple-text">Our Up coming events</h1>
            {trips.map((trip) => (
              <div key={trip._id} className=" col-12 col-md-6 col-lg-4  my-2">
                <div className="m-3 shadow-sm">
                  <img src={trip.picture} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3>Place : {trip.name}</h3>
                    <p>Duration: {trip.duration}</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to={`placeorder/${trip._id}`} className="myButton">
                      Book Now
                    </Link>
                    <span className="ms-4 fs-4 second-color-text">${trip.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      )}
      <section>
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;

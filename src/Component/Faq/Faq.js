import React from "react";

const Faq = () => {
  return (
    <div className="container row mx-auto">
      <h1 className="mb-5 text-center purple-text">Frequently Asked Questions</h1>
      <div className="col-12 col-lg-6 ">
        <img
          className="w-100"
          src={"https://i.ibb.co/74CdXhc/undraw-Faq-re-31cw.png"}
          alt=""
        />
      </div>
      <div className="col-12 col-lg-6">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button "
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                  <span className="purple-text"> If i am Sick or Caring for Someone?</span>
                
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
              Stay home. Most people with COVID-19 have mild illness and can recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.
Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                  <span className="purple-text">
                When NOT to Travel?
                </span>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
              Check these common scenarios to see if you or your travel companions should postpone your travel. This list does not include all possible situations. Talk to your healthcare provider before you travel if you are unsure whether any of these situations apply to you or your travel companions. CDC will continue to update this information as we learn more about COVID-19.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoo"
              >
                  <span className="purple-text">
                Is it safe to travel with Families with?
                </span>
              </button>
              
            </h2>
            <div
              id="panelsStayOpen-collapseTwoo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoo"
            >
              <div className="accordion-body">
              During car travel, making stops along the way for gas, food, or bathroom breaks can put you and your traveling companions in close contact with other people and frequently touched surfaces. If traveling in a RV, you may have to stop less often for food or bathroom breaks, but you could still be in close contact with others while staying at RV parks overnight and while getting gas and supplies.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                  <span className="purple-text">
                Is there any issu to air flyte?
                </span>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
              Under current federal regulations, pilots must report all illnesses and deaths to CDC before arriving to a U.S. destination. According to CDC protocols, if a sick traveler has a contagious disease that is a risk to others on board the airplane, CDC works with local and state health departments and international public health agencies to contact exposed passengers and crew.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

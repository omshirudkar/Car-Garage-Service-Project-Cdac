import React from "react";
import img from "../assests/periodicservices1.jpg";
import bat1 from "../assests/acservicerepair5.jpg";
import bat2 from "../assests/android-app-store.png";
import bat3 from "../assests/batteries3.jpg";
import bat4 from "../assests/customer-service.png";
import bat5 from "../assests/dentingpainting2.jpg";
import bat6 from "../assests/expert-mechanic.png";
import bat7 from "../assests/garage  image1.jpg";
import bat8 from "../assests/garage.png";
import acci from "../assests/accidentservice.jpg";
import tyre from "../assests/tyreswheels6.jpg";
import detail from "../assests/detailingservices8.jpg";
import custom from "../assests/customservices9.png";
import wind from "../assests/windsheild.jpg";
import light from "../assests/light.jpg";
import enigine from "../assests/Engine_Decarbonization.png";
import wash from "../assests/carwash-removebg-preview(3).png";

export default function Home() {
  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="Head">
          <b>Car Repair & Services</b>
        </h1>
      </div>

      <div class="container-fluid home text-center p-5 mt-3 me-3  ">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={bat3} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Batteries</b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={bat5} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Denting And Painting</b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={img} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Periodic Services</b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={acci} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Accidental Car Repair </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={tyre} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Tyres And Wheels </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={custom} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Custom Services </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={wind} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Windshield And Glass </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={light} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Lights And Fitments </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={enigine} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Engine Decarbonization </b>
              </h6>
            </b>
          </div>
          <div class="col-xl-2 img-fluid homeContainer p-2">
            <img src={wash} alt="" />
            <b style={{ fontSize: "15px" }}>
              <h6>
                <b>Car Wash</b>
              </h6>
            </b>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xl-8">
            <h1>MMC Garage - For All Your Automotive Requirements</h1>
            <p>
              MMC Garage is redefining the way people look after their cars. We
              provide an advanced and simple way to book an auto repair and
              maintenance services with just a few clicks. Quality and
              reliability are the two most important pillars of products and
              services. We are passionate and believe that your vehicle deserves
              to be as healthy as you are.MMC Garage helps in maximizing the
              lifespan of your car with quality services exceeding your
              expectations. We provide the most affordable and comprehensive car
              maintenance solutions that you can trust. We at MoveMyCar with
              over 10 years of experience are a well-known and trusted brand in
              the car moving industry
            </p>

            {/* icons */}
            <div className="container">
              <div className="row">
                <div className="col-xl-4 m-3">
                  <img
                    src="Car2\car2\src\assests\garage.png"
                    alt=""
                  />
                  <b className="h-text">Expert Engineers</b>
                  <br />
                  <span>Hire the best and certified engineers</span>
                </div>
                <div className="col-xl-4 m-3">
                  <img
                    src="https://www.garage.movemycar.in/assets/images/garage.png"
                    alt=""
                  />
                  <b className="h-text">Modern Workshop</b>
                  <br />
                  <span>Modern workshop having the right infrastructure</span>
                </div>

                <div className="col-xl-4 m-3">
                  <img
                    src="https://www.garage.movemycar.in/assets/images/wallet.png"
                    alt=""
                  />
                  <b className="h-text">Cost Effective</b>
                  <br />
                  <span>Get the best car services with affordable charges</span>
                </div>
                <div className="col-xl-4 m-3">
                  <img
                    src="https://www.garage.movemycar.in/assets/images/customer-service.png"
                    alt=""
                  />
                  <b className="h-text">Creative Thinking</b>
                  <br />
                  <span>Accurate dashboard tracker for service status</span>
                </div>
              </div>
            </div>
          </div>
          {/* car garage img */}
          <div class="col-xl-4">
            <figure>
              <img
                src="https://www.garage.movemycar.in/assets/images/image-1.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      {/* how it works */}

      <div className="container text-center mt-5 mb-5">
        <h1 className="mb-5">How it Works</h1>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src="https://www.garage.movemycar.in/assets/images/step1.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-xl-3">
              <h3>Get Timely Updates</h3>
              <p>Track car service process with timely automated updates</p>
            </div>
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src="https://www.garage.movemycar.in/assets/images/step2.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-xl-3">
              <h3>Ease of Payment</h3>
              <p>Pay by card/cash according to your car service requirements</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/*  */}
      <div className="container text-center mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3  ">
              <h3>Free Pickup and Drop</h3>
              <p>
                Select the pickup/drop at your convenient date, time and
                location that works best for you
              </p>
            </div>
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src="https://www.garage.movemycar.in/assets/images/step3.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-xl-3">
              <h3>Car is Serviced</h3>
              <p>Hire highly skilled mechanics to service the car</p>
            </div>
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src=" https://www.garage.movemycar.in/assets/images/step4.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="container text-start">
        <div className="row">
          <div className="col-4">
            <figure>
              <img
                src="https://www.garage.movemycar.in/assets/images/schedule-apointment.png"
                alt=""
              />
            </figure>
          </div>
          <div className="col-xl-8">
            <b>
              <h1 className=" ml-5 ">Schedule Your Appointment Today</h1>
            </b>
            <h2 className=" ml-5">Call : 1800-12312-9655</h2>
            <h5 className=" ml-5">
              Repair Services That Come With Our Commitment to Quality
            </h5>
            <button className="p-2 mt-3 btn btn-danger">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Download the MMC Garage App */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-xl-6">
            <h2>Download the MMC Garage App</h2>
            <ol>
              <li>Connect with highly skilled car mechanics with ease</li>
              <li>Ensure the ease of payment</li>
              <li>Enjoy free pickup and drop of your car</li>
            </ol>
            <p>
              Download the MMC Garage app through Google Play Store direct or
              fetch the link through SMS and connect with verified mechanics to
              take care of car repairing and service’s needs.
            </p>

            <input type="tel" name="" id="" className="p-2" placeholder="91+" />
            <br />
            <button className="btn btn-primary p-2 mt-2 ">Get App Link</button>
            <figure className="mt-3">
              <img
                src="https://www.garage.movemycar.in/assets/images/android-app-store.png"
                alt=""
              />
            </figure>
          </div>
          <div className="col-xl-6 text-center ">
            <figure>
              <img
                src="https://www.garage.movemycar.in/assets/images/garage-app.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      {/* Frequently Asked Questions */}

      <div className="container mt-5">
        <h3>Frequently Asked Questions</h3>
        <div
          className="accordion accordion-flush mt-5"
          id="accordionFlushExample"
        >
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Does MMC Garage Provide Car Service At Doorstep? How To Book The
                Certified Car Repair And Maintenance Near Me Through MMC Garage?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The process is quite easy. All you are required to do is to fill
                a form on the home page, provide the necessary details, and you
                will be connected to your nearby workshops instantly. You choose
                to get your car serviced with a workshop that fulfills your
                requirement and budget.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What Kind Of Spare Parts And Engine Oils Are Used By The Car
                Repair Mechanic Near Me?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The car repair and maintenance service providers make use of the
                original, branded spare parts and engine oils to keep your car
                running in a good condition.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What Kind Of Services Are Offered By The Car Garage Near Me?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The car garage companies offer various services like periodic
                services, denting and painting, car spa and cleaning, ac service
                and repair, detailing services, windshield and glass
                replacement, engine decarbonization and lots more.
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Do I Have To Drop My Car At The Workshop For Car Repair And
                Maintenance?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                It is altogether your choice. If you are preoccupied with the
                work and do not have a time to drop the car at the nearest
                garage, then you can also avail the free pickup and drop
                facility. Just sit back and relax.
              </div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Can I Reschedule My Appointment With The Car Automotive Repair
                Near Me?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, you can reschedule your appointment with the car garage for
                the maintenance and fix an alternative date according to your
                convenient date and time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

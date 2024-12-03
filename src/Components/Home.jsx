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
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();

  function f1() {
    navigator("/login");
  }

  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="Head">
          <b>Fake Car Repair & Services</b>
        </h1>
      </div>

      {/* Services Section */}
      <div className="container-fluid home text-center p-5 mt-3 me-3">
        <div className="row d-flex justify-content-center">
          {[
            { imgSrc: bat3, title: "Batteries" },
            { imgSrc: bat5, title: "Denting And Painting" },
            { imgSrc: img, title: "Periodic Services" },
            { imgSrc: acci, title: "Accidental Car Repair" },
            { imgSrc: tyre, title: "Tyres And Wheels" },
            { imgSrc: custom, title: "Custom Services" },
            { imgSrc: wind, title: "Windshield And Glass" },
            { imgSrc: light, title: "Lights And Fitments" },
            { imgSrc: enigine, title: "Engine Decarbonization" },
            { imgSrc: wash, title: "Car Wash" },
          ].map((service, index) => (
            <div key={index} className="col-xl-2 img-fluid homeContainer p-2">
              <img src={service.imgSrc} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>{service.title}</b>
                </h6>
              </b>
            </div>
          ))}
        </div>
      </div>

      {/* Garage Information */}
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h1>MMC Garage - For All Your Automotive Requirements</h1>
            <p>
              MMC Garage is redefining the way people look after their cars. We
              provide an advanced and simple way to book an auto repair and
              maintenance service with just a few clicks. Quality and
              reliability are the two most important pillars of our products and
              services. We are passionate and believe that your vehicle deserves
              to be as healthy as you are. MMC Garage helps in maximizing the
              lifespan of your car with quality services exceeding your
              expectations.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-xl-4 m-3">
                  <img src="Car2/car2/src/assests/garage.png" alt="" />
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
          {/* Car Garage Image */}
          <div className="col-xl-4">
            <figure>
              <img
                src="https://www.garage.movemycar.in/assets/images/image-1.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container text-center mt-5 mb-5">
        <h1 className="mb-5">How it Works</h1>
        <div className="container">
          <div className="row">
            {[
              {
                imgSrc:
                  "https://www.garage.movemycar.in/assets/images/step1.png",
                title: "Get Timely Updates",
                description:
                  "Track car service process with timely automated updates",
              },
              {
                imgSrc:
                  "https://www.garage.movemycar.in/assets/images/step2.png",
                title: "Ease of Payment",
                description:
                  "Pay by card/cash according to your car service requirements",
              },
            ].map((step, index) => (
              <div key={index} className="col-xl-3">
                <figure className="d-flex justify-content-center align-item-center">
                  <img src={step.imgSrc} alt="" />
                </figure>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pickup/Drop & Service Steps */}
      <div className="container text-center mt-5 mb-5">
        <div className="container">
          <div className="row">
            {[
              {
                title: "Free Pickup and Drop",
                description:
                  "Select the pickup/drop at your convenient date, time and location",
              },
              {
                title: "Car is Serviced",
                description: "Hire highly skilled mechanics to service the car",
              },
            ].map((step, index) => (
              <div key={index} className="col-xl-3">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src="https://www.garage.movemycar.in/assets/images/step3.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-xl-3">
              <figure className="d-flex justify-content-center align-item-center">
                <img
                  src="https://www.garage.movemycar.in/assets/images/step4.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
              <h1 className=" ml-5">Schedule Your Appointment Today</h1>
            </b>
            <h2 className=" ml-5">Call : 1800-12312-9655</h2>
            <h5 className=" ml-5">
              Repair Services That Come With Our Commitment to Quality
            </h5>
            <button onClick={f1} className="p-2 mt-3 btn btn-danger">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-xl-6">
            <h2>Download the MMC Garage App</h2>
            <ol>
              <li>Connect with highly skilled car mechanics with ease</li>
              <li>Ensure the ease of payment</li>
              <li>Enjoy our quick services</li>
            </ol>
            <div>
              <img src={bat2} alt="App Store" className="me-2" />
              <img src={bat4} alt="Play Store" />
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src="https://www.garage.movemycar.in/assets/images/mobile-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

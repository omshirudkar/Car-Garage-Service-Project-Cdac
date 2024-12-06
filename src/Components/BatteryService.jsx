import React from "react";
import { useNavigate } from "react-router-dom";
const BatteryService = () => {
  return (
    <div className="service-container">
      <h2>Batteries Service</h2>
      <div className="service-info">
        <img
          src="path-to-battery-image.jpg"
          alt="Battery Service"
          className="service-image"
        />
        <div className="service-details">
          <p>
            At our garage, we offer high-quality battery services for all types
            of vehicles. Whether you need a battery replacement, battery
            testing, or installation, we've got you covered. Our team ensures
            your car's battery is in perfect working condition so that you can
            get back on the road with confidence.
          </p>
          <ul>
            <li>
              <b>Battery Inspection:</b> We check your car's battery health to
              prevent sudden failures.
            </li>
            <li>
              <b>Battery Replacement:</b> If your battery is no longer holding a
              charge, we provide replacements with high-quality batteries.
            </li>
            <li>
              <b>Battery Charging:</b> We recharge your battery to ensure it
              performs optimally.
            </li>
            <li>
              <b>Installation:</b> We install new batteries safely and quickly.
            </li>
          </ul>
          <p>
            For more details or to book a service, <b>contact us</b> today!
          </p>
        </div>
      </div>

      {/* Internal CSS as inline styles */}
      <style>
        {`
          .service-container {
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .service-info {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
          }

          .service-image {
            max-width: 300px;
            margin-right: 20px;
          }

          .service-details {
            max-width: 600px;
            text-align: left;
            margin-top: 20px;
          }

          .service-details ul {
            list-style-type: none;
            padding-left: 0;
          }

          .service-details li {
            margin-bottom: 10px;
            font-size: 16px;
          }

          .service-details b {
            font-weight: bold;
          }

          h2 {
            font-size: 2em;
            color: #333;
          }

          p {
            font-size: 16px;
            color: #555;
          }

          ul li b {
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default BatteryService;

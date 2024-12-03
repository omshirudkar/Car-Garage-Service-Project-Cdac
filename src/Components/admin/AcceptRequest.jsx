import React, { useState } from "react";

export default function AcceptRequest() {
  const [requestDetails, setRequestDetails] = useState("");

  const acceptRequest = () => {
    alert(`Request "${requestDetails}" has been accepted.`);
  };

  return (
    <div style={styles.container}>
      <h2>Accept Garage Requests</h2>
      <div className="mb-3">
        <label className="form-label">Request Details</label>
        <input
          type="text"
          className="form-control"
          value={requestDetails}
          onChange={(e) => setRequestDetails(e.target.value)}
          placeholder="Enter request details"
          style={styles.input}
        />
      </div>
      <button
        className="btn btn-success"
        onClick={acceptRequest}
        style={styles.button}
      >
        Accept Request
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  input: {
    marginBottom: "15px",
  },
  button: {
    marginTop: "10px",
  },
};

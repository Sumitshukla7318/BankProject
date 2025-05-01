import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMobileAlt, FaRupeeSign, FaComments, FaArrowRight } from "react-icons/fa";
import Layout from "./Layout";

const MobileTransfer = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  const validateMobile = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const handleSubmit = () => {
    if (!validateMobile(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Placeholder logic (replace with actual backend call)
    alert(`₹${amount} successfully sent to mobile number: ${mobileNumber}`);
  };

  return (
    <Layout>

    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded">
        <h4 className="text-center mb-4">
          <FaArrowRight className="mb-1 mr-2" /> Transfer via Mobile Number
        </h4>

        <div className="form-group">
          <label><FaMobileAlt className="mr-2" />Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter recipient's mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength={10}
          />
        </div>

        <div className="form-group">
          <label><FaRupeeSign className="mr-2" />Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label><FaComments className="mr-2" />Remarks (Optional)</label>
          <textarea
            className="form-control"
            placeholder="Add remarks (e.g. Gift, Bill Payment)"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary px-4 py-2" onClick={handleSubmit}>
            Send Money
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default MobileTransfer;

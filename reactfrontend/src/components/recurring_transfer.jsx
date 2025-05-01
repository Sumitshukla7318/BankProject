import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRupeeSign, FaCalendarAlt, FaArrowRight, FaClock } from "react-icons/fa"; // Correct icon imports
import Layout from "./Layout";

const RecurringTransfer = () => {
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  const handleSubmit = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (!fromAccount || !toAccount) {
      alert("Please select both source and destination accounts.");
      return;
    }

    // Placeholder logic (replace with actual backend call)
    alert(`Recurring transfer of ₹${amount} set from ${fromAccount} to ${toAccount} every ${frequency}`);
  };

  return (
    <Layout>

    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded">
        <h4 className="text-center mb-4">
          <FaArrowRight className="mb-1 mr-2" /> Set Recurring Transfer
        </h4>

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
          <label><FaClock className="mr-2" /> From Account</label>
          <select className="form-control" value={fromAccount} onChange={(e) => setFromAccount(e.target.value)}>
            <option value="">Select Account</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
            <option value="salary">Salary Account</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaClock className="mr-2" /> To Account</label>
          <select className="form-control" value={toAccount} onChange={(e) => setToAccount(e.target.value)}>
            <option value="">Select Account</option>
            <option value="savings">Savings Account</option>
            <option value="investment">Investment Account</option>
            <option value="emergency">Emergency Fund</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaCalendarAlt className="mr-2" /> Start Date</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label><FaCalendarAlt className="mr-2" /> End Date (Optional)</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label> Frequency</label>
          <select className="form-control" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary px-4 py-2" onClick={handleSubmit}>
            Set Transfer
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default RecurringTransfer;

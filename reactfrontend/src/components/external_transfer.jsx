import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUniversity, FaRupeeSign, FaArrowRight, FaCode } from "react-icons/fa";
import Layout from "./Layout";

const ExternalTransfer = () => {
  const [receiverBank, setReceiverBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [amount, setAmount] = useState("");
  const [transferType, setTransferType] = useState("IMPS");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!receiverBank || !accountNumber || !ifscCode || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    // Replace with actual API call
    alert(`₹${amount} transferred to ${receiverBank} account ${accountNumber}`);
  };

  return (
    <Layout>

    <div className="container mt-5">
      <div className="card shadow p-4 rounded">
        <h4 className="text-center mb-4">
          <FaArrowRight className="mr-2 mb-1" />
          External Fund Transfer
        </h4>

        <div className="form-group">
          <label><FaUniversity className="mr-2" />Receiver Bank Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., State Bank of India"
            value={receiverBank}
            onChange={(e) => setReceiverBank(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Receiver Account Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., 123456789012"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label><FaCode className="mr-2" />IFSC Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., SBIN0001234"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaRupeeSign />
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Transfer Type</label>
          <select
            className="form-control"
            value={transferType}
            onChange={(e) => setTransferType(e.target.value)}
          >
            <option value="IMPS">IMPS (Instant)</option>
            <option value="NEFT">NEFT (1-2 hours)</option>
            <option value="RTGS">RTGS (Large transfers)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Note / Remarks (optional)</label>
          <textarea
            className="form-control"
            placeholder="Payment for invoice #123"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success px-4 py-2" onClick={handleSubmit}>
            Transfer Now
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ExternalTransfer;

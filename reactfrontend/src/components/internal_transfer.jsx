import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExchangeAlt, FaRupeeSign } from "react-icons/fa";
import Layout from "./Layout";

const InternalTransfer = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  // Dummy accounts - replace with actual data from backend
  const accounts = [
    { id: "SAV123", name: "Savings Account - XXXX1234" },
    { id: "CUR456", name: "Current Account - XXXX4567" },
  ];

  const handleTransfer = () => {
    if (!fromAccount || !toAccount || !amount) {
      alert("Please fill in all required fields.");
      return;
    }

    if (fromAccount === toAccount) {
      alert("Cannot transfer to the same account.");
      return;
    }

    // You would call backend API here
    alert(`Transferred ₹${amount} from ${fromAccount} to ${toAccount}`);
  };

  return (
    <Layout>
    <div className="container mt-5">
      <div className="card shadow p-4 rounded">
        <h4 className="text-center mb-4">
          <FaExchangeAlt className="mr-2 mb-1" />
          Internal Account Transfer
        </h4>

        <div className="form-group">
          <label>From Account</label>
          <select
            className="form-control"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
          >
            <option value="">Select</option>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>To Account</label>
          <select
            className="form-control"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
          >
            <option value="">Select</option>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
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
          <label>Note (optional)</label>
          <textarea
            className="form-control"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary px-4 py-2" onClick={handleTransfer}>
            Transfer Funds
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default InternalTransfer;

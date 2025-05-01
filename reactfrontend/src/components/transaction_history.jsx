import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaExchangeAlt,
  FaArrowDown,
  FaArrowUp,
  FaMobileAlt,
  FaGlobe,
  FaUniversity,
} from "react-icons/fa";
import Layout from "./Layout";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    search: "",
  });

  useEffect(() => {
    axios.get("/api/transactions/")
      .then((res) => {
        setTransactions(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    filterTransactions();
  }, [filters]);

  const filterTransactions = () => {
    const { type, status, search } = filters;
    let data = [...transactions];

    if (type) data = data.filter(txn => txn.transaction_type === type);
    if (status) data = data.filter(txn => txn.status === status);
    if (search)
      data = data.filter(txn =>
        txn.reference_number.toLowerCase().includes(search.toLowerCase())
      );

    setFiltered(data);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "DEPOSIT": return <FaArrowDown className="text-success" />;
      case "WITHDRAWAL": return <FaArrowUp className="text-danger" />;
      case "TRANSFER": return <FaExchangeAlt className="text-primary" />;
      default: return null;
    }
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case "WEB": return <FaGlobe className="text-info" />;
      case "MOBILE": return <FaMobileAlt className="text-warning" />;
      case "ATM": return <FaUniversity className="text-secondary" />;
      default: return null;
    }
  };

  const getStatusBadge = (status) => {
    const classes = {
      COMPLETED: "success",
      PENDING: "warning",
      FAILED: "danger",
    };
    return <span className={`badge badge-${classes[status]} px-3`}>{status}</span>;
  };

  return (
    <Layout>
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📊 Transaction History</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Reference Number"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-control"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="DEPOSIT">Deposit</option>
            <option value="WITHDRAWAL">Withdrawal</option>
            <option value="TRANSFER">Transfer</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-control"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All Status</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center text-muted">No transactions found.</div>
      ) : (
        <div className="row">
          {filtered.map((txn) => (
            <div className="col-md-6 col-lg-4 mb-4" key={txn.transaction_id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">
                      {getTypeIcon(txn.transaction_type)}{" "}
                      <span className="text-uppercase ml-1">{txn.transaction_type}</span>
                    </h5>
                    {getChannelIcon(txn.channel)}
                  </div>
                  <p className="mb-1">
                    <strong>Reference:</strong><br />
                    <span className="text-muted">{txn.reference_number}</span>
                  </p>
                  <p className="mb-1">
                    <strong>Amount:</strong>{" "}
                    ₹{parseFloat(txn.amount).toFixed(2)}
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong>{" "}
                    {new Date(txn.timestamp).toLocaleString()}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div><strong>Status:</strong> {getStatusBadge(txn.status)}</div>
                    {txn.description && (
                      <span className="text-muted small" title="Note">
                        {txn.description.length > 25 ? txn.description.slice(0, 25) + "..." : txn.description}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
        </Layout>
  );
};

export default TransactionHistory;

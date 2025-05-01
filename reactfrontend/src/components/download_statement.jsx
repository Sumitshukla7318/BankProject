import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";

const DownloadStatements = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [format, setFormat] = useState("PDF");

  const handleDownload = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    // Simulated download
    alert(`Downloading statement from ${startDate} to ${endDate} as ${format}`);
    // Replace with actual download logic
  };

  return (
    <Layout>
    <div className="container mt-5">
      <div className="card shadow p-4 rounded">
        <h4 className="text-center mb-4">Download Account Statement</h4>
        
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="format">File Format</label>
            <select
              id="format"
              className="form-control"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="PDF">PDF</option>
              <option value="CSV">CSV</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary px-4 py-2"
            onClick={handleDownload}
          >
            <FaFileDownload className="mb-1 mr-2" />
            Download Statement
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default DownloadStatements;

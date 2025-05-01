// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
// import './Dashboard.css'; // Custom styling for dashboard

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userInfo = JSON.parse(localStorage.getItem('customer'));

    if (!isLoggedIn  || !userInfo) {
      navigate('/login');
    } else {
      setUser(userInfo);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Layout>
      <div className="dashboard-container container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5">Welcome, {user?.name}!</h2>
          <p className="lead">Here is your personalized banking dashboard.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 dashboard-card">
              <div className="card-body text-center">
                <i className="fas fa-wallet fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Account Balance</h5>
                <p className="card-text display-6">₹ 85,320.00</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 dashboard-card">
              <div className="card-body text-center">
                <i className="fas fa-history fa-3x text-success mb-3"></i>
                <h5 className="card-title">Recent Transactions</h5>
                <p className="card-text">Check your latest transactions and expenses.</p>
                <button className="btn btn-outline-success btn-sm mt-2">View</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 dashboard-card">
              <div className="card-body text-center">
                <i className="fas fa-credit-card fa-3x text-danger mb-3"></i>
                <h5 className="card-title">Cards & Services</h5>
                <p className="card-text">Manage your debit/credit cards and other services.</p>
                <button className="btn btn-outline-danger btn-sm mt-2">Manage</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-dark px-4 py-2" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt mr-2"></i> Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;

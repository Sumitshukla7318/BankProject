// src/components/Layout.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BalanceModal from './BalanceModal';
import TransactionHistory from './transaction_history';

function Layout({ children }) {
  const navigate = useNavigate();

  // Check if customer is logged in
  const isLoggedIn = !!localStorage.getItem("customer");

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SwiftWave Bank
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">

              {/* Home */}
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

              {/* Account Services Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="accountDropdown" role="button" data-toggle="dropdown">
                  Account Services
                </Link>
                <div className="dropdown-menu" aria-labelledby="accountDropdown">
                <BalanceModal />
                <Link className="dropdown-item" to="/transaction_history">Transaction History</Link>
                  {/* <Link className="dropdown-item" to="/view-balance">View Balance</Link> */}
      
                  <Link className="dropdown-item" to="/statements">Download Statements</Link>
                </div>
              </li>

              {/* Transfer Money Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="transferDropdown" role="button" data-toggle="dropdown">
                  Transfer Money
                </Link>
                <div className="dropdown-menu" aria-labelledby="transferDropdown">
                  <Link className="dropdown-item" to="/internal-transfer">Internal Transfer</Link>
                  <Link className="dropdown-item" to="/external-transfer">External Transfer</Link>
                  <Link className="dropdown-item" to="/mobile-transfer">Transfer via Mobile Number</Link>
                  <Link className="dropdown-item" to="/recurring-transfer">Set Recurring Transfer</Link>
                </div>
              </li>

              {/* Deposit Funds */}
              <li className="nav-item"><Link className="nav-link" to="/deposit-funds">Deposit Funds</Link></li>

              {/* Loan Services Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="loanDropdown" role="button" data-toggle="dropdown">
                  Loan Services
                </Link>
                <div className="dropdown-menu" aria-labelledby="loanDropdown">
                  <Link className="dropdown-item" to="/apply-loan">Apply for Loan</Link>
                  <Link className="dropdown-item" to="/loan-status">Check Loan Status</Link>
                  <Link className="dropdown-item" to="/loan-calculator">Loan EMI Calculator</Link>
                </div>
              </li>

              {/* Other Pages */}
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>

              {/* Conditional Login / Logout */}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/create-account">Open Account</Link></li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="nav-link text-white bg-transparent border-0 p-2" onClick={handleLogout}>Logout</button>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-fill">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4 mt-auto shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="font-weight-bold">SwiftWave Bank</h5>
              <p>Empowering your financial future.</p>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="font-weight-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link className="text-white" to="/privacy">Privacy Policy</Link></li>
                <li><Link className="text-white" to="/terms">Terms & Conditions</Link></li>
                <li><Link className="text-white" to="/support">Customer Support</Link></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h6 className="font-weight-bold">Contact Us</h6>
              <p>Email: support@swiftwavebank.com</p>
              <p>Phone: +1 800 123 4567</p>
            </div>
          </div>

          <hr className="bg-light" />
          <p className="mb-0">&copy; {new Date().getFullYear()} SwiftWave Bank. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Layout;

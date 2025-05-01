// src/components/Home.jsx

import React, { useEffect } from 'react';
import Layout from './Layout'; // Master page
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import karo
import './Home.css';

function Home() {
  const navigate = useNavigate();
 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <Layout>
      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-4 text-white">Welcome to SwiftWave Bank</h1>
          <p className="lead text-light">Banking Made Swift, Secure, and Simple.</p>
          <div className="mt-4">
            <Link to="/create-account" className="btn btn-light btn-lg mr-3">Create Account</Link>
            <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="fas fa-lock fa-3x text-primary mb-3"></i>
              <h4>Secure Banking</h4>
              <p>Your security is our top priority with encrypted transactions.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-clock fa-3x text-primary mb-3"></i>
              <h4>24/7 Support</h4>
              <p>Our support team is always available to help you anytime.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-bolt fa-3x text-primary mb-3"></i>
              <h4>Instant Transactions</h4>
              <p>Transfer and receive money within seconds, anywhere!</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;

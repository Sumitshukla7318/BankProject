// src/pages/AboutUs.jsx

import React from 'react';
import Layout from './Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center text-primary mb-4">About SwiftWave Bank</h1>

        <div className="row">
          <div className="col-md-6">
            <h3 className="font-weight-bold mb-3">Our Mission</h3>
            <p>
              At SwiftWave Bank, our mission is to provide seamless, efficient, and trustworthy banking services to individuals and businesses alike. We aim to build lasting relationships with our customers by offering personalized solutions that empower them to reach their financial goals.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="font-weight-bold mb-3">Our Vision</h3>
            <p>
              Our vision is to become the most innovative and customer-centric bank, recognized for our commitment to excellence and integrity. We aspire to lead the way in digital banking and provide accessible financial services to all.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <h2 className="text-center text-primary mb-4">Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="team-member-1.jpg" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">CEO & Founder</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="team-member-2.jpg" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">COO</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="team-member-3.jpg" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Alex Brown</h5>
                <p className="card-text">CFO</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <div className="text-center">
          <h3 className="font-weight-bold mb-4">Why Choose Us?</h3>
          <p>
            We prioritize customer satisfaction and believe in providing efficient, personalized banking solutions. Our innovative approach to banking ensures that you get the best service, security, and flexibility for your financial needs.
          </p>
          <button className="btn btn-primary btn-lg mt-4" onClick={() => window.location.href = "/services"}>Explore Our Services</button>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;

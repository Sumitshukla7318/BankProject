// src/components/Services.jsx

import React from 'react';
import { FaUniversity, FaMoneyCheckAlt, FaPiggyBank, FaCreditCard, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import Layout from './Layout';

function Services() {
  const services = [
    {
      title: 'Savings Account',
      description: 'Secure and reliable savings account options with attractive interest rates.',
      icon: <FaPiggyBank size={40} className="text-success mb-3" />,
    },
    {
      title: 'Current Account',
      description: 'Effortless current accounts designed for businesses and professionals.',
      icon: <FaUniversity size={40} className="text-primary mb-3" />,
    },
    {
      title: 'Credit & Debit Cards',
      description: 'Enjoy shopping with our secure and globally accepted cards.',
      icon: <FaCreditCard size={40} className="text-warning mb-3" />,
    },
    {
      title: 'Online & Mobile Banking',
      description: 'Bank anywhere, anytime with our easy-to-use mobile and online banking.',
      icon: <FaMobileAlt size={40} className="text-info mb-3" />,
    },
    {
      title: 'Loans & Mortgages',
      description: 'Flexible loans and mortgage options with minimal documentation.',
      icon: <FaMoneyCheckAlt size={40} className="text-danger mb-3" />,
    },
    {
      title: 'Insurance Services',
      description: 'Protect yourself and your family with our comprehensive insurance plans.',
      icon: <FaShieldAlt size={40} className="text-secondary mb-3" />,
    },
  ];

  return (
    <Layout>
      <div className="container py-5">
        <h2 className="text-center mb-5 text-primary font-weight-bold" style={{ fontSize: '2.5rem' }}>
          Our Banking Services
        </h2>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
              <div className="card shadow-sm rounded-4 text-center p-4 w-100">
                {service.icon}
                <h4 className="font-weight-bold mb-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Services;

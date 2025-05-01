
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import Layout from './Layout'; //existing Layout
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8000/accounts/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            credentials: 'include',  // Important for cookies/session
            body: JSON.stringify(formData),
          });
      if (response.ok) {

        const data = await response.json();
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('customer',JSON.stringify(data));
        localStorage.setItem('token', data.token || 'dummy-token'); // Store token (if backend sends one)
        navigate('/dashboard');
        console.log('Login successful:', data);
       
      } else {
       
        const errorData = await response.json();
        alert(errorData.error || 'Login failed');
      
    }
    } catch (error) {
        console.error('Error:', error);
        alert(error)

        alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4 shadow-lg rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
          <h2 className="text-center mb-4 text-success">
            <FaSignInAlt className="mb-2" /> Login to SwiftWave
          </h2>
          <form onSubmit={handleSubmit}>

            {/* Email Address */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Email Address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light">
                    <FaEnvelope />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group mb-4">
              <label className="font-weight-bold">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light">
                    <FaLock />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-success btn-block font-weight-bold py-2"
              style={{ fontSize: '18px' }}
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;

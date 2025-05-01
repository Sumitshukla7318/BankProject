import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLock, 
  FaRegAddressBook, 
  FaIdCard, 
  FaImage,
  FaHome,
  FaBirthdayCake,
  FaCodeBranch,
  FaVenusMars,
  FaGlobe
} from 'react-icons/fa'; 
import Layout from './Layout';

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'savings',
    balance: 0.00,
    address: '',
    dob: '',
    branch: '',
    gender: '',
    nationality: '',
    idProofNumber: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('password', formData.password);
    data.append('account_type', formData.accountType);
    data.append('address', formData.address);
    data.append('dob', formData.dob);
    data.append('branch', formData.branch);
    data.append('gender', formData.gender);
    data.append('nationality', formData.nationality);
    data.append('id_proof_number', formData.idProofNumber);
    if (formData.profilePicture) data.append('profile_picture', formData.profilePicture);

    try {
      const response = await fetch('http://localhost:8000/accounts/create_account/', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log('Account created successfully:', responseData);
        // success message show
        alert('Account created successfully!');
      } else {
        console.error('Failed to create account:', responseData);
        alert(responseData.message || 'Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4 shadow-lg rounded-4" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="text-center mb-4 text-primary">Create Your SwiftWave Account</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">

            {/* Full Name */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaUser /></span>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange} 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Email Address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaEnvelope /></span>
                </div>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Phone Number</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaPhone /></span>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange} 
                  placeholder="Enter your phone number" 
                  required 
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaLock /></span>
                </div>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange} 
                  placeholder="Enter password" 
                  required 
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Confirm Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaLock /></span>
                </div>
                <input 
                  type="password" 
                  className="form-control" 
                  name="confirmPassword" 
                  value={formData.confirmPassword}
                  onChange={handleChange} 
                  placeholder="Confirm your password" 
                  required 
                />
              </div>
            </div>

            {/* Account Type */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Account Type</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaRegAddressBook /></span>
                </div>
                <select 
                  className="form-control" 
                  name="accountType" 
                  value={formData.accountType}
                  onChange={handleChange}
                >
                  <option value="savings">Savings Account</option>
                  <option value="current">Current Account</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaHome /></span>
                </div>
                <textarea 
                  className="form-control" 
                  name="address" 
                  value={formData.address}
                  onChange={handleChange} 
                  placeholder="Enter your address" 
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Date of Birth</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaBirthdayCake /></span>
                </div>
                <input 
                  type="date" 
                  className="form-control" 
                  name="dob" 
                  value={formData.dob}
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Branch */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Branch</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaCodeBranch /></span>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  name="branch" 
                  value={formData.branch}
                  onChange={handleChange} 
                  placeholder="Enter your branch name" 
                />
              </div>
            </div>

            {/* Gender */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Gender</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaVenusMars /></span>
                </div>
                <select 
                  className="form-control" 
                  name="gender" 
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Nationality */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">Nationality</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaGlobe /></span>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  name="nationality" 
                  value={formData.nationality}
                  onChange={handleChange} 
                  placeholder="Enter your nationality" 
                />
              </div>
            </div>

            {/* ID Proof Number */}
            <div className="form-group mb-3">
              <label className="font-weight-bold">ID Proof Number (Aadhaar/PAN)</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaIdCard /></span>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  name="idProofNumber" 
                  value={formData.idProofNumber}
                  onChange={handleChange} 
                  placeholder="Enter your ID proof number" 
                />
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="form-group mb-4">
              <label className="font-weight-bold">Upload Profile Picture</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light"><FaImage /></span>
                </div>
                <input 
                  type="file" 
                  className="form-control" 
                  name="profilePicture" 
                  onChange={handleChange} 
                  accept="image/*" 
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-block font-weight-bold py-2" style={{ fontSize: '18px' }}>
              Create Account
            </button>

          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CreateAccount;
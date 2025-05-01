// src/pages/ContactUs.jsx

import React, { useState } from 'react';
import Layout from '../components/Layout';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message Sent:', formData);
        // Add form submission logic here (e.g., API call to send the message)
    };

    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="text-center text-primary mb-4">Contact SwiftWave Bank</h1>

                <div className="row">
                    <div className="col-md-6">
                        <h3 className="font-weight-bold mb-3">Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="form-group mb-3">
                                <label className="font-weight-bold">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group mb-3">
                                <label className="font-weight-bold">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="form-group mb-3">
                                <label className="font-weight-bold">Your Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Type your message here"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block font-weight-bold py-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h3 className="font-weight-bold mb-3">Our Location</h3>
                        <p><strong>SwiftWave Bank</strong></p>
                        <p>Announcing Soon, Prayagraj, India</p>
                        <p>Phone: +91 7318206263</p>
                        <p>Email: contact@swiftwavebank.com</p>
                        <div className="map-container mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.722711967049!2d-122.08147368468979!3d37.3946161798286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f5c07c39f3%3A0x38343da9b7f43093!2sApple!5e0!3m2!1sen!2sus!4v1658254451224!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactUs;

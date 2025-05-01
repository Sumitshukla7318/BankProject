import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';

const LoanApplication = () => {
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [income, setIncome] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!loanType || !loanAmount || !loanTenure || !income) {
      setIsError(true);
      setMessage('All fields are required.');
      return;
    }

    // Simulate loan application success
    setIsError(false);
    setMessage('Loan Application Submitted Successfully!');
    setIsSubmitted(true);
  };

  return (
    <Layout>

    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Header className="text-center">
              <h4>Apply for a Loan</h4>
            </Card.Header>
            <Card.Body>
              {message && (
                <Alert variant={isError ? 'danger' : 'success'}>
                  {message}
                </Alert>
              )}

              {!isSubmitted ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="loanType">
                    <Form.Label>Loan Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={loanType}
                      onChange={handleLoanTypeChange}
                    >
                      <option value="">Select Loan Type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="car">Car Loan</option>
                      <option value="education">Education Loan</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="loanAmount">
                    <Form.Label>Loan Amount (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      min="5000"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="loanTenure">
                    <Form.Label>Loan Tenure (Months)</Form.Label>
                    <Form.Control
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      min="12"
                      required
                      />
                  </Form.Group>

                  <Form.Group controlId="income">
                    <Form.Label>Monthly Income (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      min="10000"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit Application
                  </Button>
                </Form>
              ) : (
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3"
                  >
                    Apply for Another Loan
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
    </Layout>
  );
};

export default LoanApplication;

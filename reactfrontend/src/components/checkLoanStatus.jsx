import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const CheckLoanStatus = () => {
  const [loanId, setLoanId] = useState('');
  const [loanStatus, setLoanStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleCheckStatus = (e) => {
    e.preventDefault();

    // Simulate API call to check loan status
    if (loanId === '') {
      setIsError(true);
      setMessage('Please enter a valid loan ID.');
      return;
    }

    // Simulating a status check for demo purposes
    if (loanId === '12345') {
      setIsError(false);
      setMessage('Loan Status: Approved');
      setLoanStatus('approved');
    } else {
      setIsError(false);
      setMessage('Loan Status: Pending');
      setLoanStatus('pending');
    }
  };

  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Header className="text-center">
              <h4>Check Loan Status</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleCheckStatus}>
                <Form.Group controlId="loanId">
                  <Form.Label>Enter Loan Application ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Loan ID"
                    value={loanId}
                    onChange={(e) => setLoanId(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Check Status
                </Button>
              </Form>

              {message && (
                <Alert variant={isError ? 'danger' : 'success'} className="mt-3">
                  {message}
                </Alert>
              )}

              {loanStatus && loanStatus === 'approved' && (
                <div className="mt-3">
                  <h5>Loan Details</h5>
                  <p>Loan Amount: ₹500,000</p>
                  <p>Tenure: 5 Years</p>
                  <p>Status: Approved</p>
                  <p>Estimated Approval Date: 20th May 2025</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default CheckLoanStatus;

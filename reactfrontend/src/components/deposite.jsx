import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';

const DepositFunds = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [transactionPassword, setTransactionPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountNumber || !depositAmount || !transactionPassword) {
      setIsError(true);
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/accounts/deposit-funds/', {
        method: 'POST',
        credentials: 'include',  // for session-based authentication
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_number: accountNumber,
          amount: depositAmount,
          password: transactionPassword, // or "transaction_password" if you're using that key
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsError(false);
        setMessage(data.message || 'Deposit Successful!');
        setDepositAmount('');
        setTransactionPassword('');
      } else {
        setIsError(true);
        setMessage(data.error || 'Deposit Failed');
      }
    } catch (error) {
      console.error("Error during deposit:", error);
      setIsError(true);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout>
      <Container className="mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card>
              <Card.Header className="text-center">
                <h4>Deposit Funds</h4>
              </Card.Header>
              <Card.Body>
                {message && (
                  <Alert variant={isError ? 'danger' : 'success'}>
                    {message}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="accountNumber" className="mb-3">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter account number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="depositAmount" className="mb-3">
                    <Form.Label>Deposit Amount (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter amount"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      min="1"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="transactionPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={transactionPassword}
                      onChange={(e) => setTransactionPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Deposit Funds
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default DepositFunds;

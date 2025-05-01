import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Layout from './Layout';

const LoanEmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [message, setMessage] = useState('');

  // Calculate EMI
  const calculateEmi = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      setMessage('Please fill all fields!');
      return;
    }

    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const months = parseInt(loanTenure);

    const monthlyRate = annualRate / 12 / 100;
    const emiAmount = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayable = emiAmount * months;
    const totalInterestAmount = totalPayable - principal;

    setEmi(emiAmount.toFixed(2));
    setTotalPayment(totalPayable.toFixed(2));
    setTotalInterest(totalInterestAmount.toFixed(2));
    setMessage('');
  };

  return (
    <Layout>
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Header className="text-center">
              <h4>Loan EMI Calculator</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="loanAmount">
                  <Form.Label>Loan Amount (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Loan Amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="interestRate" className="mt-3">
                  <Form.Label>Interest Rate (%)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Enter Annual Interest Rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="loanTenure" className="mt-3">
                  <Form.Label>Loan Tenure (in Years)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Loan Tenure"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={calculateEmi}
                  className="w-100 mt-4"
                >
                  Calculate EMI
                </Button>
              </Form>

              {message && (
                <Alert variant="danger" className="mt-3">
                  {message}
                </Alert>
              )}

              {emi && (
                <div className="mt-4">
                  <Row>
                    <Col md={4}>
                      <h5>EMI: ₹{emi}</h5>
                    </Col>
                    <Col md={4}>
                      <h5>Total Payment: ₹{totalPayment}</h5>
                    </Col>
                    <Col md={4}>
                      <h5>Total Interest: ₹{totalInterest}</h5>
                    </Col>
                  </Row>
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

export default LoanEmiCalculator;

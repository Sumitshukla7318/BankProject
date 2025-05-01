import React from 'react';
import Layout from './Layout';

import { Accordion, Card, Button } from 'react-bootstrap';

function Faq() {
  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-primary">Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h5>How do I open a new account?</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                To open a new account, click on the "Create Account" button on our homepage and follow the registration process. You will need to provide your personal details and choose the type of account you'd like to open.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <h5>How do I reset my password?</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                If you've forgotten your password, click on the "Forgot Password" link on the login page. We will send you a password reset link to your registered email address. Follow the instructions to reset your password.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <h5>What are the bank's working hours?</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Our banking hours are Monday to Friday, from 9:00 AM to 5:00 PM. Our customer support is available during these hours, and online banking services are accessible 24/7.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <h5>How do I apply for a loan?</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                To apply for a loan, visit the "Loan Application" page on our website. You will be required to fill out a form with the necessary information, and our team will get in touch with you for further steps.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <h5>Is my data secure with your bank?</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Yes, your data is fully secure with us. We use the latest encryption technologies and best practices to ensure the safety and privacy of your personal and financial information.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Layout>
  );
}

export default Faq;

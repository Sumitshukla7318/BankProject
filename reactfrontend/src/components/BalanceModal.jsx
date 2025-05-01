import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BalanceModal() {
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      const response = await fetch('http://localhost:8000/accounts/get_balance/', {
        method: 'GET',
        credentials: 'include',  // Include session cookie
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      if (response.ok) {
        setBalance(data.balance);
      } else {
        alert(data.error || 'Failed to fetch balance');
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShow = () => {
    setShow(true);
    setLoading(true);
    fetchBalance();
  };

  return (
    <>
      <Link className="dropdown-item" to="#" onClick={handleShow}>
        View Balance
      </Link>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Account Balance</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <h4 className="mb-3">Available Balance</h4>
              <div className="display-4 text-success mb-4">
                ₹{balance?.toLocaleString('en-IN') || 'N/A'}
              </div>
              <small className="text-muted">
                Last updated: {new Date().toLocaleString()}
              </small>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BalanceModal;

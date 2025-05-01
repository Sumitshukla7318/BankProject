import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Services from './components/services';
import AboutUs from './components/about_us';
import ContactUs from './components/contact_us';
import Faq from './components/faq';
import Dashboard from './components/dashboard';
import TransactionHistory from './components/transaction_history';
import DownloadStatements from './components/download_statement';
import InternalTransfer from './components/internal_transfer';
import ExternalTransfer from './components/external_transfer';
import MobileTransfer from './components/mobile_transfer';
import RecurringTransfer from './components/recurring_transfer';
import DepositFunds from './components/deposite';
import LoanApplication from './components/LoanApplication';
import CheckLoanStatus from './components/checkLoanStatus';
import LoanEmiCalculator from './components/EMICalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/transaction_history" element={<TransactionHistory/>} />
        <Route path="/statements" element={<DownloadStatements/>} />
        <Route path="/internal-transfer" element={<InternalTransfer/>} />
        <Route path="/external-transfer" element={<ExternalTransfer/>} />
        <Route path="/mobile-transfer" element={<MobileTransfer/>} />
        <Route path="/recurring-transfer" element={<RecurringTransfer/>} />
        <Route path="/deposit-funds" element={<DepositFunds/>} />
        <Route path="/apply-loan" element={<LoanApplication/>} />
        <Route path="/loan-status" element={<CheckLoanStatus/>} />
        <Route path="/loan-calculator" element={<LoanEmiCalculator/>} />


      </Routes>
    </Router>
  );
}

export default App;

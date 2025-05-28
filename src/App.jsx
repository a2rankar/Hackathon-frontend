import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import AddAuthorityForm from './components/AddAuthorityForm';
import AuthoritiesList from './components /AuthoritiesList/AuthoritiesList';
// import ProfileInfo from './components/ProfileInfo';
import SubmissionsList from './components /SubmissionList/SubmissionsList';
import { SubmissionDetail } from './components /SubmissionDetail/SubmissionDetail';
// import QRForm from './components/QRForm';
import SubmissionForm from './components /SubmissionForm/SubmissionForm';




export default function App() {
  return (
    <Router>
      {/* <nav className="p-4 bg-gray-100 shadow flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/authorities">Authorities</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/qr">QR Generator</Link>
        <Link to="/submit">Добавить жалобу</Link>

      </nav> */}
      <Routes>
      <Route path="/" element={<SubmissionsList />} />
      <Route path="/submit" element={<SubmissionForm />} />
      <Route path="/submission/:id" element={<SubmissionDetail />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/authorities" element={<AuthoritiesList />} />
        {/* <Route path="/profile" element={<ProfileInfo />} /> */}
        {/* <Route path="/qr" element={<QRForm />} /> */}
      </Routes>
    </Router>
  );
}

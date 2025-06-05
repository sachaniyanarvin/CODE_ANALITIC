// frontend/src/components/Dashboard.tsx
import React, { useContext } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome, <strong>{user?.email}</strong>!</p>

      <button onClick={handleLogout} style={{
        margin: '1rem 0', 
        padding: '0.5rem 1rem', 
        backgroundColor: '#EF4444', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer'
      }}>
        Logout
      </button>

      <nav style={{ margin: '1rem 0' }}>
        <Link to="profile" style={{ marginRight: '1rem' }}>My Profile</Link>
      </nav>

      {/* Nested routes under /dashboard */}
      <Routes>
        <Route path="/" element={<p>Select an option above.</p>} />
      </Routes>
    </div>
  );
};

export default Dashboard;

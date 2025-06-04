import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { FaHome, FaUser, FaCog, FaBell } from 'react-icons/fa';
import IconButton from './components/IconButton';
import SocialIcons from './components/SocialIcons';
import FloatingActionButton from './components/FloatingActionButton';
import { MdAdd } from 'react-icons/md';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <header className="header">
            <div className="container flex justify-between items-center">
              <div className="flex items-center gap-md">
                <IconButton icon={FaHome} variant="primary" />
                <h1 className="text-xl font-bold">CodeMentor AI</h1>
              </div>
              <div className="flex items-center gap-sm">
                <IconButton icon={FaBell} variant="secondary" badge="3" />
                <IconButton icon={FaUser} variant="secondary" />
                <IconButton icon={FaCog} variant="secondary" />
              </div>
            </div>
          </header>

          <main className="main">
            <div className="container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </main>

          <footer className="footer">
            <div className="container">
              <div className="flex flex-col items-center gap-md">
                <SocialIcons />
                <p className="text-center text-gray-600">
                  © 2024 CodeMentor AI. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          <FloatingActionButton
            icon={MdAdd}
            onClick={() => console.log('Add new item')}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 
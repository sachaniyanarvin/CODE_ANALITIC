// frontend/src/components/Login.tsx
import React, { useState, useContext } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGithub, FaGoogle } from 'react-icons/fa';
import '../styles/Login.css';
import { AuthContext } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      // Axios error: err.response.data.message
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <img
            src="https://source.unsplash.com/60x60/?tech,login"
            alt="Login Icon"
            className="login-icon"
          />
          <h2>Welcome Back 👋</h2>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </div>

        {error && <div className="error-msg">{error}</div>}

        {/* Social Buttons (no functionality right now) */}
        <div className="social-buttons">
          <button type="button" className="social-btn google">
            <FaGoogle /> <span>Google</span>
          </button>
          <button type="button" className="social-btn github">
            <FaGithub /> <span>GitHub</span>
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <div className="input-icon">
              <FaEnvelope />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <FaLock />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

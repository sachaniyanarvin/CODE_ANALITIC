// frontend/src/components/SignUp.tsx
import React, { useState, useContext } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>(''); // Success message state
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await signup(email, password);
      setSuccess('Account created successfully! Redirecting to login...');
      // Wait 2 seconds, then navigate to login
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to create an account');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create your account</h2>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>} {/* Success message */}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button type="submit">Sign up</button>
        </form>

        <div className="login-redirect">
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

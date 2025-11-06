import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div className="form-container" style={{marginTop: '80px', maxWidth: '500px'}}>
          <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Reset Password</h1>
          <p style={{textAlign: 'center', color: '#666', marginBottom: '40px'}}>
            Enter your email address and we'll send you instructions to reset your password
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '15px'}}>
                Send Reset Instructions
              </button>
            </form>
          ) : (
            <div className="alert alert-success">
              <p style={{marginBottom: '10px', fontWeight: '600'}}>✓ Email Sent!</p>
              <p>
                We've sent password reset instructions to <strong>{email}</strong>.
                Please check your inbox and follow the link to reset your password.
              </p>
            </div>
          )}

          <p style={{textAlign: 'center', marginTop: '30px', color: '#666'}}>
            Remember your password?{' '}
            <Link to="/login" style={{color: '#3498db', fontWeight: '600'}}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

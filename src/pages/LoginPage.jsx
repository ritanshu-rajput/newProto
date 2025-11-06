import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'renter'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (formData.userType === 'owner') {
      navigate('/owner/dashboard');
    } else {
      navigate('/renter/dashboard');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div className="form-container" style={{marginTop: '80px'}}>
          <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Welcome Back</h1>
          <p style={{textAlign: 'center', color: '#666', marginBottom: '40px'}}>
            Login to your account to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>I am a:</label>
              <select
                value={formData.userType}
                onChange={(e) => setFormData({...formData, userType: e.target.value})}
              >
                <option value="renter">Renter</option>
                <option value="owner">Owner/Estate Agent</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div style={{textAlign: 'right', marginBottom: '20px'}}>
              <Link to="/forgot-password" style={{color: '#3498db', fontSize: '14px'}}>
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '15px'}}>
              Login
            </button>
          </form>

          <p style={{textAlign: 'center', marginTop: '30px', color: '#666'}}>
            Don't have an account?{' '}
            <Link to="/signup" style={{color: '#3498db', fontWeight: '600'}}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

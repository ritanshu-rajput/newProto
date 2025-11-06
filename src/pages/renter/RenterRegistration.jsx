import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function RenterRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate('/renter/dashboard', { state: { newUser: true } });
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div className="form-container" style={{marginTop: '40px', maxWidth: '600px'}}>
          <h1 style={{marginBottom: '10px'}}>Create Renter Account</h1>
          <p style={{color: '#666', marginBottom: '30px'}}>
            Sign up for free and start searching for your perfect rental home
          </p>

          <form onSubmit={handleSubmit}>
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Your Information</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+44 1234 567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <p style={{fontSize: '12px', color: '#666', marginTop: '5px'}}>
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div className="form-group">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Benefits Info */}
            <div className="card" style={{marginBottom: '30px', backgroundColor: '#f0f8ff'}}>
              <div className="card-header">What You Get (Free!)</div>
              <div className="card-body">
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '10px 0', borderBottom: '1px solid #d1ecf1'}}>
                    ✓ Browse all property listings
                  </li>
                  <li style={{padding: '10px 0', borderBottom: '1px solid #d1ecf1'}}>
                    ✓ Contact up to 5 property owners
                  </li>
                  <li style={{padding: '10px 0', borderBottom: '1px solid #d1ecf1'}}>
                    ✓ Save favorite properties
                  </li>
                  <li style={{padding: '10px 0'}}>
                    ✓ Access to messaging system
                  </li>
                </ul>

                <div style={{marginTop: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', fontWeight: '600', marginBottom: '5px'}}>
                    💡 Want unlimited owner contacts?
                  </p>
                  <p style={{fontSize: '14px', color: '#666'}}>
                    Get verified for just £6.99 (one-time payment) and unlock unlimited contacts plus a verified badge!
                  </p>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '15px'}}>
              Create Free Account
            </button>
          </form>

          <p style={{textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px'}}>
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          <p style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
            Already have an account?{' '}
            <Link to="/login" style={{color: '#3498db', fontWeight: '600'}}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RenterRegistration;

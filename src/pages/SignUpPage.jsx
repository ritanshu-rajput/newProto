import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

function SignUpPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    if (type === 'owner') {
      navigate('/owner/register');
    } else {
      navigate('/renter/register');
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
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '800px', margin: '60px auto', textAlign: 'center'}}>
          <h1 style={{marginBottom: '20px', fontSize: '36px'}}>Create Your Account</h1>
          <p style={{marginBottom: '50px', fontSize: '18px', color: '#666'}}>
            Choose your account type to get started
          </p>

          <div className="grid grid-2">
            {/* Renter Option */}
            <div
              className={`card ${userType === 'renter' ? 'featured' : ''}`}
              style={{cursor: 'pointer', padding: '40px'}}
              onClick={() => handleUserTypeSelect('renter')}
            >
              <div style={{fontSize: '64px', marginBottom: '20px'}}>🔍</div>
              <div className="card-header" style={{fontSize: '24px', textAlign: 'center'}}>
                I'm a Renter
              </div>
              <div className="card-body" style={{marginTop: '20px', fontSize: '16px'}}>
                <p>Looking for a place to rent</p>
                <ul style={{listStyle: 'none', marginTop: '20px', textAlign: 'left'}}>
                  <li style={{padding: '10px 0'}}>✓ Free to browse properties</li>
                  <li style={{padding: '10px 0'}}>✓ Contact 5 owners for free</li>
                  <li style={{padding: '10px 0'}}>✓ Optional verification for unlimited contacts</li>
                  <li style={{padding: '10px 0'}}>✓ Save favorite properties</li>
                </ul>
              </div>
              <button
                className="btn btn-primary"
                style={{marginTop: '30px', width: '100%'}}
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserTypeSelect('renter');
                }}
              >
                Sign Up as Renter
              </button>
            </div>

            {/* Owner Option */}
            <div
              className={`card ${userType === 'owner' ? 'featured' : ''}`}
              style={{cursor: 'pointer', padding: '40px'}}
              onClick={() => handleUserTypeSelect('owner')}
            >
              <div style={{fontSize: '64px', marginBottom: '20px'}}>🏠</div>
              <div className="card-header" style={{fontSize: '24px', textAlign: 'center'}}>
                I'm an Owner/Agent
              </div>
              <div className="card-body" style={{marginTop: '20px', fontSize: '16px'}}>
                <p>Looking to list properties</p>
                <ul style={{listStyle: 'none', marginTop: '20px', textAlign: 'left'}}>
                  <li style={{padding: '10px 0'}}>✓ List multiple properties</li>
                  <li style={{padding: '10px 0'}}>✓ AI-powered descriptions</li>
                  <li style={{padding: '10px 0'}}>✓ View verified renter profiles</li>
                  <li style={{padding: '10px 0'}}>✓ Direct messaging</li>
                </ul>
              </div>
              <button
                className="btn btn-primary"
                style={{marginTop: '30px', width: '100%'}}
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserTypeSelect('owner');
                }}
              >
                Sign Up as Owner
              </button>
            </div>
          </div>

          <p style={{marginTop: '40px', color: '#666'}}>
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

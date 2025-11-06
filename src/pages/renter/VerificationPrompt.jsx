import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

function VerificationPrompt() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/renter/dashboard">Dashboard</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '900px', margin: '60px auto'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <div style={{fontSize: '80px', marginBottom: '20px'}}>🔒</div>
            <h1 style={{marginBottom: '15px', fontSize: '36px'}}>
              Get Verified to Contact More Owners
            </h1>
            <p style={{fontSize: '18px', color: '#666'}}>
              You've reached your free contact limit. Get verified to unlock unlimited contacts!
            </p>
          </div>

          <div className="grid grid-2" style={{marginBottom: '40px'}}>
            {/* Free Option */}
            <div className="card">
              <div className="card-header">Your Current Plan</div>
              <div className="card-body">
                <div style={{fontSize: '36px', fontWeight: '700', color: '#95a5a6', marginBottom: '15px'}}>
                  Free
                </div>

                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                    ✓ Browse all properties
                  </li>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                    ✓ Save favorites
                  </li>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#e74c3c', fontWeight: '600'}}>
                    ⚠️ Contact up to 5 owners only
                  </li>
                  <li style={{padding: '12px 0', color: '#999'}}>
                    ✗ No verified badge
                  </li>
                </ul>

                <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#856404'}}>
                    <strong>You've contacted:</strong> 5 out of 5 owners
                  </p>
                </div>

                <button className="btn btn-outline" style={{width: '100%', marginTop: '20px'}} disabled>
                  Current Plan
                </button>
              </div>
            </div>

            {/* Verified Option */}
            <div className="card featured" style={{border: '3px solid #3498db'}}>
              <div style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '8px',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: '14px',
                marginBottom: '20px'
              }}>
                RECOMMENDED
              </div>

              <div className="card-header">Get Verified</div>
              <div className="card-body">
                <div style={{fontSize: '48px', fontWeight: '700', color: '#27ae60', marginBottom: '5px'}}>
                  £6.99
                </div>
                <p style={{color: '#666', marginBottom: '20px'}}>One-time payment</p>

                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                    ✓ Browse all properties
                  </li>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                    ✓ Save favorites
                  </li>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#27ae60', fontWeight: '600'}}>
                    ✓ Contact UNLIMITED owners
                  </li>
                  <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#27ae60', fontWeight: '600'}}>
                    ✓ Verified badge on profile
                  </li>
                  <li style={{padding: '12px 0', color: '#27ae60', fontWeight: '600'}}>
                    ✓ Priority in owner responses
                  </li>
                </ul>

                <button
                  className="btn btn-success"
                  style={{width: '100%', marginTop: '20px', padding: '15px', fontSize: '16px'}}
                  onClick={() => navigate('/renter/verification')}
                >
                  Get Verified Now
                </button>
              </div>
            </div>
          </div>

          {/* Why Get Verified Section */}
          <div className="card">
            <div className="card-header">Why Should You Get Verified?</div>
            <div className="card-body">
              <div className="grid grid-2">
                <div style={{padding: '20px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>📈</div>
                  <h3 style={{marginBottom: '10px'}}>Better Response Rate</h3>
                  <p style={{color: '#666'}}>
                    Verified renters receive 3x more responses from property owners compared to unverified users.
                  </p>
                </div>

                <div style={{padding: '20px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>⚡</div>
                  <h3 style={{marginBottom: '10px'}}>Faster Applications</h3>
                  <p style={{color: '#666'}}>
                    Your verification documents are pre-approved, making the rental application process much faster.
                  </p>
                </div>

                <div style={{padding: '20px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>🏆</div>
                  <h3 style={{marginBottom: '10px'}}>Stand Out</h3>
                  <p style={{color: '#666'}}>
                    Your verified badge shows owners you're a serious, trustworthy renter.
                  </p>
                </div>

                <div style={{padding: '20px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>🔐</div>
                  <h3 style={{marginBottom: '10px'}}>Secure Process</h3>
                  <p style={{color: '#666'}}>
                    Your documents are encrypted and stored securely. Only owners you contact can view them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Need */}
          <div className="alert alert-info" style={{marginTop: '30px'}}>
            <h3 style={{marginBottom: '15px'}}>What You'll Need to Get Verified:</h3>
            <ul style={{marginLeft: '20px'}}>
              <li style={{marginBottom: '8px'}}>Government-issued ID (Passport or Driving License)</li>
              <li style={{marginBottom: '8px'}}>Recent pay slips (last 3 months)</li>
              <li style={{marginBottom: '8px'}}>Bank statements</li>
              <li style={{marginBottom: '8px'}}>One-time payment of £6.99</li>
            </ul>
            <p style={{marginTop: '15px', fontSize: '14px'}}>
              <strong>Approval time:</strong> 24-48 hours after document submission
            </p>
          </div>

          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <button
              className="btn btn-success"
              style={{padding: '15px 50px', fontSize: '18px', marginRight: '15px'}}
              onClick={() => navigate('/renter/verification')}
            >
              Get Verified Now - £6.99
            </button>
            <Link to="/renter/dashboard" className="btn btn-outline" style={{padding: '15px 30px'}}>
              Maybe Later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationPrompt;

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function SubscriptionPlans() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    navigate('/owner/payment', { state: { plan: planId } });
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/owner/dashboard">Dashboard</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1200px', margin: '40px auto'}}>
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h1 style={{fontSize: '42px', marginBottom: '15px'}}>Choose Your Plan</h1>
            <p style={{fontSize: '18px', color: '#666'}}>
              Select the perfect subscription plan for your property listing needs
            </p>
          </div>

          <div className="subscription-plans">
            {/* Basic Plan */}
            <div className="plan-card">
              <div className="plan-name">Basic</div>
              <div className="plan-price">
                ₹999<span style={{fontSize: '16px', color: '#666'}}>/month</span>
              </div>

              <ul className="plan-features">
                <li>✓ List up to 10 properties</li>
                <li>✓ 10 images per property</li>
                <li>✓ AI description generator</li>
                <li>✓ View verified renter profiles</li>
                <li>✓ Direct messaging</li>
                <li>✓ Basic analytics</li>
                <li>✓ Email support</li>
              </ul>

              <button
                className="btn btn-outline"
                style={{width: '100%'}}
                onClick={() => handleSelectPlan('basic')}
              >
                Select Basic
              </button>
            </div>

            {/* Standard Plan - Featured */}
            <div className="plan-card featured">
              <div style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                display: 'inline-block',
                marginBottom: '15px'
              }}>
                MOST POPULAR
              </div>
              <div className="plan-name">Standard</div>
              <div className="plan-price">
                ₹1,999<span style={{fontSize: '16px', color: '#666'}}>/month</span>
              </div>

              <ul className="plan-features">
                <li>✓ List up to 20 properties</li>
                <li>✓ 20 images per property</li>
                <li>✓ AI description generator</li>
                <li>✓ View verified renter profiles</li>
                <li>✓ Direct messaging</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority email support</li>
                <li>✓ Featured listings</li>
                <li>✓ Property performance insights</li>
              </ul>

              <button
                className="btn btn-primary"
                style={{width: '100%'}}
                onClick={() => handleSelectPlan('standard')}
              >
                Select Standard
              </button>
            </div>

            {/* Premium Plan */}
            <div className="plan-card">
              <div className="plan-name">Premium</div>
              <div className="plan-price">
                ₹4,999<span style={{fontSize: '16px', color: '#666'}}>/month</span>
              </div>

              <ul className="plan-features">
                <li>✓ Unlimited properties</li>
                <li>✓ Unlimited images per property</li>
                <li>✓ AI description generator</li>
                <li>✓ View verified renter profiles</li>
                <li>✓ Direct messaging</li>
                <li>✓ Advanced analytics</li>
                <li>✓ 24/7 priority support</li>
                <li>✓ Premium featured listings</li>
                <li>✓ Property performance insights</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ API access</li>
                <li>✓ Custom branding</li>
              </ul>

              <button
                className="btn btn-outline"
                style={{width: '100%'}}
                onClick={() => handleSelectPlan('premium')}
              >
                Select Premium
              </button>
            </div>
          </div>

          {/* Features Comparison */}
          <div style={{marginTop: '60px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Compare Plans</h2>

            <div className="card">
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid #e0e0e0'}}>
                    <th style={{textAlign: 'left', padding: '15px'}}>Feature</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Basic</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Standard</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                    <td style={{padding: '15px'}}>Property Listings</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>10</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>20</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Unlimited</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                    <td style={{padding: '15px'}}>Images per Property</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>10</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>20</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Unlimited</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                    <td style={{padding: '15px'}}>AI Description Generator</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>✓</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>✓</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                    <td style={{padding: '15px'}}>Featured Listings</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>—</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>✓</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>✓</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                    <td style={{padding: '15px'}}>Analytics</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Basic</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Advanced</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Advanced</td>
                  </tr>
                  <tr>
                    <td style={{padding: '15px'}}>Support</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Email</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>Priority Email</td>
                    <td style={{textAlign: 'center', padding: '15px'}}>24/7 Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="alert alert-info" style={{marginTop: '30px'}}>
            <p><strong>💳 Payment Information:</strong></p>
            <ul style={{marginTop: '10px', marginLeft: '20px'}}>
              <li>All plans are billed monthly</li>
              <li>You can upgrade or downgrade your plan anytime</li>
              <li>Secure payment processing via Stripe</li>
              <li>Cancel anytime - no long-term commitment</li>
            </ul>
          </div>

          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link to="/owner/dashboard" className="btn btn-secondary">
              Decide Later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlans;

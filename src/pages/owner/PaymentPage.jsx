import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan || 'standard';

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const planDetails = {
    basic: { name: 'Basic', price: '₹999', features: 'Up to 10 properties' },
    standard: { name: 'Standard', price: '₹1,999', features: 'Up to 20 properties' },
    premium: { name: 'Premium', price: '₹4,999', features: 'Unlimited properties' }
  };

  const selectedPlan = planDetails[plan];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    navigate('/owner/dashboard', { state: { paymentSuccess: true } });
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/owner/subscription-plans">Back to Plans</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1000px', margin: '40px auto'}}>
          <h1 style={{marginBottom: '30px'}}>Complete Your Payment</h1>

          <div className="grid grid-2">
            {/* Payment Form */}
            <div>
              <div className="card">
                <div className="card-header">Payment Details</div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        value={formData.cardName}
                        onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                        required
                      />
                    </div>

                    <div className="form-group-inline">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength="5"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength="3"
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Billing Address</label>
                      <textarea
                        placeholder="Enter your billing address"
                        value={formData.billingAddress}
                        onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                        required
                      />
                    </div>

                    <div style={{marginTop: '30px'}}>
                      <button type="submit" className="btn btn-success" style={{width: '100%', padding: '15px'}}>
                        Pay {selectedPlan.price}/month
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
                <div style={{fontSize: '12px', color: '#666'}}>🔒 Secured by Stripe</div>
                <div style={{fontSize: '12px', color: '#666'}}>|</div>
                <div style={{fontSize: '12px', color: '#666'}}>💳 All major cards accepted</div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card">
                <div className="card-header">Order Summary</div>
                <div className="card-body">
                  <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e0e0e0'}}>
                    <h3 style={{fontSize: '24px', color: '#3498db', marginBottom: '10px'}}>
                      {selectedPlan.name} Plan
                    </h3>
                    <p style={{color: '#666'}}>{selectedPlan.features}</p>
                  </div>

                  <div style={{marginBottom: '15px', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Subscription (Monthly)</span>
                    <span style={{fontWeight: '600'}}>{selectedPlan.price}</span>
                  </div>

                  <div style={{marginBottom: '15px', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Tax (18% GST)</span>
                    <span style={{fontWeight: '600'}}>
                      {plan === 'basic' ? '₹180' : plan === 'standard' ? '₹360' : '₹900'}
                    </span>
                  </div>

                  <div style={{paddingTop: '15px', borderTop: '2px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '700'}}>
                    <span>Total</span>
                    <span style={{color: '#27ae60'}}>
                      {plan === 'basic' ? '₹1,179' : plan === 'standard' ? '₹2,359' : '₹5,899'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card" style={{marginTop: '20px'}}>
                <div className="card-header">What's Included</div>
                <div className="card-body">
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                      ✓ Immediate access to all features
                    </li>
                    <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                      ✓ Cancel anytime - no commitment
                    </li>
                    <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                      ✓ Upgrade or downgrade anytime
                    </li>
                    <li style={{padding: '10px 0'}}>
                      ✓ Secure payment via Stripe
                    </li>
                  </ul>
                </div>
              </div>

              <div className="alert alert-info" style={{marginTop: '20px'}}>
                <p style={{fontSize: '12px'}}>
                  <strong>💡 Note:</strong> Your subscription will auto-renew monthly.
                  You can cancel anytime from your account settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;

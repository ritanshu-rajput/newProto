import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function RenterVerification() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    idProof: null,
    paySlips: null,
    bankStatements: null,
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      navigate('/renter/dashboard', { state: { verificationSubmitted: true } });
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
          <Link to="/renter/dashboard">Dashboard</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '900px', margin: '40px auto'}}>
          {/* Progress Steps */}
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: step >= 1 ? '#3498db' : '#e0e0e0',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '700',
                  margin: '0 auto 10px'
                }}>
                  1
                </div>
                <div style={{fontSize: '14px', color: step >= 1 ? '#3498db' : '#999'}}>
                  Upload Documents
                </div>
              </div>

              <div style={{width: '100px', height: '2px', backgroundColor: step >= 2 ? '#3498db' : '#e0e0e0'}} />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: step >= 2 ? '#3498db' : '#e0e0e0',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '700',
                  margin: '0 auto 10px'
                }}>
                  2
                </div>
                <div style={{fontSize: '14px', color: step >= 2 ? '#3498db' : '#999'}}>
                  Payment
                </div>
              </div>
            </div>
          </div>

          <h1 style={{marginBottom: '30px', textAlign: 'center'}}>
            {step === 1 ? 'Upload Verification Documents' : 'Complete Payment'}
          </h1>

          {/* Step 1: Upload Documents */}
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Identity Proof</div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Passport or Driving License *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="idProof"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFormData({...formData, idProof: e.target.files[0]})}
                        required
                      />
                      <label htmlFor="idProof">
                        <div style={{fontSize: '48px'}}>🆔</div>
                        <p>Click to upload ID proof</p>
                        <p style={{fontSize: '12px', color: '#999'}}>PDF, JPG, or PNG (Max 5MB)</p>
                        {formData.idProof && (
                          <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                            ✓ {formData.idProof.name}
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Income Verification</div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Recent Pay Slips (Last 3 months) *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="paySlips"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => setFormData({...formData, paySlips: e.target.files})}
                        required
                      />
                      <label htmlFor="paySlips">
                        <div style={{fontSize: '48px'}}>💰</div>
                        <p>Click to upload pay slips</p>
                        <p style={{fontSize: '12px', color: '#999'}}>PDF, JPG, or PNG (Max 10MB total)</p>
                        {formData.paySlips && (
                          <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                            ✓ {formData.paySlips.length} file(s) selected
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{marginBottom: '30px'}}>
                <div className="card-header">Bank Statements</div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Bank Statements *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="bankStatements"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => setFormData({...formData, bankStatements: e.target.files})}
                        required
                      />
                      <label htmlFor="bankStatements">
                        <div style={{fontSize: '48px'}}>🏦</div>
                        <p>Click to upload bank statements</p>
                        <p style={{fontSize: '12px', color: '#999'}}>PDF, JPG, or PNG (Max 10MB total)</p>
                        {formData.bankStatements && (
                          <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                            ✓ {formData.bankStatements.length} file(s) selected
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="alert alert-info" style={{marginBottom: '30px'}}>
                <p><strong>🔐 Your Privacy Matters:</strong></p>
                <ul style={{marginTop: '10px', marginLeft: '20px'}}>
                  <li>All documents are encrypted and stored securely</li>
                  <li>Only property owners you choose to contact can view your documents</li>
                  <li>You can remove your documents anytime from your profile</li>
                  <li>We never share your information with third parties</li>
                </ul>
              </div>

              <div style={{display: 'flex', gap: '15px'}}>
                <button type="submit" className="btn btn-primary" style={{flex: 1, padding: '15px'}}>
                  Continue to Payment
                </button>
                <Link to="/renter/dashboard" className="btn btn-outline">
                  Cancel
                </Link>
              </div>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2" style={{marginBottom: '30px'}}>
                {/* Payment Form */}
                <div>
                  <div className="card">
                    <div className="card-header">Payment Details</div>
                    <div className="card-body">
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
                      <h3 style={{fontSize: '24px', color: '#3498db', marginBottom: '15px'}}>
                        Verification Package
                      </h3>

                      <ul style={{listStyle: 'none', padding: 0, marginBottom: '20px'}}>
                        <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Unlimited owner contacts
                        </li>
                        <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Verified badge
                        </li>
                        <li style={{padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Priority responses
                        </li>
                        <li style={{padding: '10px 0'}}>
                          ✓ Lifetime access
                        </li>
                      </ul>

                      <div style={{marginBottom: '15px', display: 'flex', justifyContent: 'space-between'}}>
                        <span>Verification Fee</span>
                        <span style={{fontWeight: '600'}}>£6.99</span>
                      </div>

                      <div style={{paddingTop: '15px', borderTop: '2px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '700'}}>
                        <span>Total</span>
                        <span style={{color: '#27ae60'}}>£6.99</span>
                      </div>

                      <p style={{fontSize: '12px', color: '#666', marginTop: '15px'}}>
                        One-time payment. No recurring charges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', gap: '15px'}}>
                <button type="submit" className="btn btn-success" style={{flex: 1, padding: '15px'}}>
                  Pay £6.99 & Complete Verification
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                  Back
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default RenterVerification;

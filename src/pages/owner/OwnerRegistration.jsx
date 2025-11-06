import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function OwnerRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    idProof: null,
    propertyDocuments: null,
    estateLicense: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/owner/verification-pending');
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
        <div className="form-container" style={{marginTop: '40px', maxWidth: '700px'}}>
          <h1 style={{marginBottom: '10px'}}>Owner/Estate Agent Registration</h1>
          <p style={{color: '#666', marginBottom: '30px'}}>
            Please provide your details and verification documents. Your account will be reviewed by our admin team.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Basic Information</div>
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
                  <label>Company Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Your company or agency name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Verification Documents</div>
              <div className="card-body">
                <div className="form-group">
                  <label>ID Proof (Passport/Driving License) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="idProof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setFormData({...formData, idProof: e.target.files[0]})}
                      required
                    />
                    <label htmlFor="idProof">
                      <div style={{fontSize: '48px'}}>📄</div>
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

                <div className="form-group">
                  <label>Property Ownership Documents *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="propertyDocs"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) => setFormData({...formData, propertyDocuments: e.target.files})}
                      required
                    />
                    <label htmlFor="propertyDocs">
                      <div style={{fontSize: '48px'}}>🏠</div>
                      <p>Click to upload property documents</p>
                      <p style={{fontSize: '12px', color: '#999'}}>PDF, JPG, or PNG (Max 10MB total)</p>
                      {formData.propertyDocuments && (
                        <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                          ✓ {formData.propertyDocuments.length} file(s) selected
                        </p>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Estate Agent License (If applicable)</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="estateLicense"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setFormData({...formData, estateLicense: e.target.files[0]})}
                    />
                    <label htmlFor="estateLicense">
                      <div style={{fontSize: '48px'}}>📋</div>
                      <p>Click to upload estate agent license</p>
                      <p style={{fontSize: '12px', color: '#999'}}>PDF, JPG, or PNG (Max 5MB)</p>
                      {formData.estateLicense && (
                        <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                          ✓ {formData.estateLicense.name}
                        </p>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <p><strong>📋 Verification Process:</strong></p>
              <ul style={{marginTop: '10px', marginLeft: '20px'}}>
                <li>Your documents will be reviewed within 24-48 hours</li>
                <li>You'll receive an email notification once approved</li>
                <li>After approval, you can choose a subscription plan and start listing properties</li>
              </ul>
            </div>

            <div style={{display: 'flex', gap: '15px', marginTop: '30px'}}>
              <button type="submit" className="btn btn-primary" style={{flex: 1}}>
                Submit for Verification
              </button>
              <Link to="/signup" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OwnerRegistration;

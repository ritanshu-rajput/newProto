import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function OwnerProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+44 1234 567890',
    companyName: 'Doe Properties Ltd.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
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
          <Link to="/owner/manage-listings">My Listings</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/owner/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '900px', margin: '40px auto'}}>
          <h1 style={{marginBottom: '30px'}}>Account Settings</h1>

          {/* Tabs */}
          <div style={{display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '2px solid #e0e0e0'}}>
            <button
              className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('profile')}
              style={{borderRadius: '6px 6px 0 0', borderBottom: 'none'}}
            >
              Profile Information
            </button>
            <button
              className={`btn ${activeTab === 'subscription' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('subscription')}
              style={{borderRadius: '6px 6px 0 0', borderBottom: 'none'}}
            >
              Subscription
            </button>
            <button
              className={`btn ${activeTab === 'security' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('security')}
              style={{borderRadius: '6px 6px 0 0', borderBottom: 'none'}}
            >
              Security
            </button>
          </div>

          {/* Profile Information Tab */}
          {activeTab === 'profile' && (
            <div className="card">
              <div className="card-header">Profile Information</div>
              <div className="card-body">
                <form onSubmit={handleSave}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                    <p style={{fontSize: '12px', color: '#666', marginTop: '5px'}}>
                      ✓ Email verified
                    </p>
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={profileData.companyName}
                      onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Verification Status</label>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <span className="badge badge-success">Verified</span>
                      <span style={{fontSize: '14px', color: '#666'}}>
                        Your account was verified on Oct 15, 2024
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <div>
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Current Subscription</div>
                <div className="card-body">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                    <div>
                      <h3 style={{fontSize: '24px', color: '#3498db', marginBottom: '10px'}}>Basic Plan</h3>
                      <p style={{color: '#666', marginBottom: '5px'}}>₹999/month</p>
                      <p style={{color: '#666'}}>Up to 10 properties</p>
                    </div>
                    <span className="badge badge-success">Active</span>
                  </div>

                  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px', marginBottom: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                      <span>Properties Used:</span>
                      <strong>3 / 10</strong>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                      <span>Next Billing Date:</span>
                      <strong>December 15, 2024</strong>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>Auto-renewal:</span>
                      <strong style={{color: '#27ae60'}}>Enabled</strong>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '10px'}}>
                    <Link to="/owner/subscription-plans" className="btn btn-primary">
                      Upgrade Plan
                    </Link>
                    <button className="btn btn-outline">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">Payment History</div>
                <div className="card-body" style={{padding: 0}}>
                  <table style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                      <tr style={{borderBottom: '2px solid #e0e0e0', backgroundColor: '#f8f9fa'}}>
                        <th style={{textAlign: 'left', padding: '15px'}}>Date</th>
                        <th style={{textAlign: 'left', padding: '15px'}}>Description</th>
                        <th style={{textAlign: 'right', padding: '15px'}}>Amount</th>
                        <th style={{textAlign: 'center', padding: '15px'}}>Status</th>
                        <th style={{textAlign: 'center', padding: '15px'}}>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                        <td style={{padding: '15px'}}>Nov 15, 2024</td>
                        <td style={{padding: '15px'}}>Basic Plan - Monthly</td>
                        <td style={{textAlign: 'right', padding: '15px'}}>₹1,179</td>
                        <td style={{textAlign: 'center', padding: '15px'}}>
                          <span className="badge badge-success">Paid</span>
                        </td>
                        <td style={{textAlign: 'center', padding: '15px'}}>
                          <button className="btn btn-outline" style={{fontSize: '12px', padding: '4px 8px'}}>
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                        <td style={{padding: '15px'}}>Oct 15, 2024</td>
                        <td style={{padding: '15px'}}>Basic Plan - Monthly</td>
                        <td style={{textAlign: 'right', padding: '15px'}}>₹1,179</td>
                        <td style={{textAlign: 'center', padding: '15px'}}>
                          <span className="badge badge-success">Paid</span>
                        </td>
                        <td style={{textAlign: 'center', padding: '15px'}}>
                          <button className="btn btn-outline" style={{fontSize: '12px', padding: '4px 8px'}}>
                            Download
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="card">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                <form onSubmit={handleSave}>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      value={profileData.currentPassword}
                      onChange={(e) => setProfileData({...profileData, currentPassword: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={profileData.newPassword}
                      onChange={(e) => setProfileData({...profileData, newPassword: e.target.value})}
                    />
                    <p style={{fontSize: '12px', color: '#666', marginTop: '5px'}}>
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      value={profileData.confirmPassword}
                      onChange={(e) => setProfileData({...profileData, confirmPassword: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </form>

                <div style={{marginTop: '40px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px'}}>
                  <h4 style={{marginBottom: '10px', color: '#856404'}}>Account Security</h4>
                  <p style={{fontSize: '14px', color: '#856404', marginBottom: '10px'}}>
                    • Two-factor authentication: Not enabled
                  </p>
                  <p style={{fontSize: '14px', color: '#856404', marginBottom: '15px'}}>
                    • Last login: Nov 6, 2024 at 10:30 AM
                  </p>
                  <button className="btn btn-outline" style={{fontSize: '14px'}}>
                    Enable Two-Factor Authentication
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function RenterProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+44 7890 123456',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isVerified, setIsVerified] = useState(false);

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
          <Link to="/renter/dashboard">Dashboard</Link>
          <Link to="/renter/search">Search</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/renter/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '900px', margin: '40px auto'}}>
          <h1 style={{marginBottom: '30px'}}>My Profile</h1>

          {/* Tabs */}
          <div style={{display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '2px solid #e0e0e0'}}>
            <button
              className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('profile')}
              style={{borderRadius: '6px 6px 0 0', borderBottom: 'none'}}
            >
              Personal Information
            </button>
            <button
              className={`btn ${activeTab === 'verification' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('verification')}
              style={{borderRadius: '6px 6px 0 0', borderBottom: 'none'}}
            >
              Verification Status
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
              <div className="card-header">Personal Information</div>
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

                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Verification Status Tab */}
          {activeTab === 'verification' && (
            <div>
              {!isVerified ? (
                <>
                  <div className="card" style={{marginBottom: '20px', backgroundColor: '#fff3cd', borderColor: '#ffc107'}}>
                    <div className="card-body">
                      <h3 style={{marginBottom: '15px', color: '#856404'}}>⚠️ Account Not Verified</h3>
                      <p style={{color: '#856404', marginBottom: '20px'}}>
                        Your account is not verified yet. Get verified to unlock unlimited owner contacts and stand out with a verified badge!
                      </p>

                      <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
                        <div style={{flex: 1, padding: '15px', backgroundColor: 'white', borderRadius: '6px'}}>
                          <div style={{fontSize: '24px', fontWeight: '700', color: '#e74c3c', marginBottom: '5px'}}>
                            3/5
                          </div>
                          <div style={{fontSize: '14px', color: '#666'}}>Owner Contacts Used</div>
                        </div>

                        <div style={{flex: 1, padding: '15px', backgroundColor: 'white', borderRadius: '6px'}}>
                          <div style={{fontSize: '24px', fontWeight: '700', color: '#f39c12', marginBottom: '5px'}}>
                            2
                          </div>
                          <div style={{fontSize: '14px', color: '#666'}}>Contacts Remaining</div>
                        </div>
                      </div>

                      <Link to="/renter/verification-prompt" className="btn btn-success">
                        Get Verified Now - £6.99
                      </Link>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">Benefits of Verification</div>
                    <div className="card-body">
                      <ul style={{listStyle: 'none', padding: 0}}>
                        <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Contact unlimited property owners
                        </li>
                        <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Verified badge on your profile
                        </li>
                        <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Priority in owner responses (3x better response rate)
                        </li>
                        <li style={{padding: '12px 0', borderBottom: '1px solid #e0e0e0'}}>
                          ✓ Faster rental applications
                        </li>
                        <li style={{padding: '12px 0'}}>
                          ✓ One-time payment, lifetime access
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="card" style={{backgroundColor: '#d4edda', borderColor: '#28a745'}}>
                  <div className="card-body">
                    <h3 style={{marginBottom: '15px', color: '#155724'}}>✓ Account Verified</h3>
                    <p style={{color: '#155724', marginBottom: '20px'}}>
                      Your account has been verified. You can now contact unlimited property owners!
                    </p>

                    <div className="card" style={{backgroundColor: 'white', marginBottom: '20px'}}>
                      <div className="card-header">Your Verification Documents</div>
                      <div className="card-body" style={{padding: 0}}>
                        <table style={{width: '100%'}}>
                          <tbody>
                            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                              <td style={{padding: '15px'}}>Identity Proof</td>
                              <td style={{padding: '15px', textAlign: 'right'}}>
                                <span className="badge badge-success">Verified</span>
                              </td>
                            </tr>
                            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                              <td style={{padding: '15px'}}>Pay Slips</td>
                              <td style={{padding: '15px', textAlign: 'right'}}>
                                <span className="badge badge-success">Verified</span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{padding: '15px'}}>Bank Statements</td>
                              <td style={{padding: '15px', textAlign: 'right'}}>
                                <span className="badge badge-success">Verified</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p style={{fontSize: '14px', color: '#155724'}}>
                      Verified on: October 20, 2024
                    </p>
                  </div>
                </div>
              )}
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

                <div style={{marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                  <h4 style={{marginBottom: '10px'}}>Account Activity</h4>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>
                    • Last login: Nov 6, 2024 at 9:15 AM
                  </p>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '15px'}}>
                    • Account created: Oct 1, 2024
                  </p>
                </div>

                <div style={{marginTop: '40px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px'}}>
                  <h4 style={{marginBottom: '10px', color: '#856404'}}>Delete Account</h4>
                  <p style={{fontSize: '14px', color: '#856404', marginBottom: '15px'}}>
                    Once you delete your account, there is no going back. All your data will be permanently deleted.
                  </p>
                  <button className="btn btn-secondary" style={{fontSize: '14px'}}>
                    Delete My Account
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

export default RenterProfile;

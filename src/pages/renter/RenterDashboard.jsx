import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../App.css';

function RenterDashboard() {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (location.state?.newUser) {
      setAlertMessage('✓ Account created successfully! Welcome to RentEasy.');
      setShowAlert(true);
    } else if (location.state?.verificationSubmitted) {
      setAlertMessage('✓ Verification documents submitted! We will review them within 24-48 hours.');
      setShowAlert(true);
    }

    if (showAlert) {
      setTimeout(() => setShowAlert(false), 5000);
    }
  }, [location]);

  const savedProperties = [
    {
      id: 1,
      title: '2 BHK Apartment in Downtown',
      location: 'Mumbai, Maharashtra',
      rent: 25000,
      bedrooms: 2,
      verified: true
    },
    {
      id: 3,
      title: 'Studio Apartment Near IT Park',
      location: 'Bangalore, Karnataka',
      rent: 18000,
      bedrooms: 1,
      verified: true
    }
  ];

  const recentContacts = [
    {
      id: 1,
      propertyTitle: '2 BHK Apartment in Downtown',
      ownerName: 'John Smith Properties',
      lastMessage: 'Sure, viewing available this Saturday',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 2,
      propertyTitle: 'Studio Apartment Near IT Park',
      ownerName: 'ABC Real Estate',
      lastMessage: 'The property is still available',
      time: '2 days ago',
      unread: false
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/renter/dashboard">Dashboard</Link>
          <Link to="/renter/search">Search Properties</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/renter/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div className="dashboard">
          {/* Alert */}
          {showAlert && (
            <div className="alert alert-success">
              {alertMessage}
            </div>
          )}

          {/* Welcome Section */}
          <div style={{marginBottom: '30px'}}>
            <h1 style={{marginBottom: '10px'}}>Welcome back, Sarah!</h1>
            <p style={{color: '#666'}}>Continue your search for the perfect rental home</p>
          </div>

          {/* Verification Status */}
          <div className="card" style={{marginBottom: '30px', backgroundColor: '#fff3cd', borderColor: '#ffc107'}}>
            <div className="card-body">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <h3 style={{marginBottom: '10px', color: '#856404'}}>⚠️ Account Not Verified</h3>
                  <p style={{color: '#856404'}}>
                    You've contacted 3 out of 5 free owner contacts. Get verified for unlimited contacts and stand out to property owners!
                  </p>
                </div>
                <Link to="/renter/verification-prompt" className="btn btn-success">
                  Get Verified - £6.99
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-value">12</div>
              <div className="stat-label">Properties Viewed</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">5</div>
              <div className="stat-label">Saved Properties</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">Owners Contacted</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">2/5</div>
              <div className="stat-label">Contacts Remaining</div>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Recent Conversations</span>
              <Link to="/messages" style={{fontSize: '14px', color: '#3498db'}}>View All</Link>
            </div>
            <div className="card-body" style={{padding: 0}}>
              {recentContacts.map(contact => (
                <Link
                  key={contact.id}
                  to="/messages"
                  style={{
                    display: 'block',
                    padding: '20px',
                    borderBottom: '1px solid #e0e0e0',
                    textDecoration: 'none',
                    color: 'inherit',
                    backgroundColor: contact.unread ? '#f0f8ff' : 'white',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <div>
                      <h4 style={{marginBottom: '5px', fontWeight: '600'}}>
                        {contact.ownerName}
                        {contact.unread && (
                          <span style={{
                            marginLeft: '10px',
                            fontSize: '10px',
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '10px'
                          }}>
                            NEW
                          </span>
                        )}
                      </h4>
                      <p style={{fontSize: '14px', color: '#666'}}>{contact.propertyTitle}</p>
                    </div>
                    <span style={{fontSize: '12px', color: '#999'}}>{contact.time}</span>
                  </div>
                  <p style={{fontSize: '14px', color: '#666'}}>{contact.lastMessage}</p>
                </Link>
              ))}

              {recentContacts.length === 0 && (
                <div style={{textAlign: 'center', padding: '40px'}}>
                  <p style={{color: '#666'}}>No conversations yet</p>
                  <Link to="/renter/search" className="btn btn-primary" style={{marginTop: '15px'}}>
                    Start Searching Properties
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Saved Properties */}
          <div className="card">
            <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Saved Properties</span>
              <Link to="/renter/search" style={{fontSize: '14px', color: '#3498db'}}>Browse More</Link>
            </div>
            <div className="card-body" style={{padding: 0}}>
              <div className="grid grid-2" style={{padding: '20px', gap: '20px'}}>
                {savedProperties.map(property => (
                  <Link
                    key={property.id}
                    to={`/renter/property/${property.id}`}
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >
                    <div className="card" style={{marginBottom: 0, transition: 'transform 0.3s, box-shadow 0.3s'}}>
                      <div className="property-image">Property Image</div>
                      <div style={{padding: '15px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                          <h4 style={{fontSize: '16px', fontWeight: '600'}}>{property.title}</h4>
                          {property.verified && (
                            <span className="badge badge-success" style={{fontSize: '10px'}}>Verified</span>
                          )}
                        </div>
                        <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>
                          📍 {property.location}
                        </p>
                        <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>
                          🛏️ {property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}
                        </p>
                        <div style={{fontSize: '20px', fontWeight: '700', color: '#27ae60'}}>
                          ₹{property.rent.toLocaleString()}/month
                        </div>
                        <button
                          className="btn btn-primary"
                          style={{width: '100%', marginTop: '15px', fontSize: '14px'}}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/renter/property/${property.id}`;
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {savedProperties.length === 0 && (
                <div style={{textAlign: 'center', padding: '40px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>❤️</div>
                  <p style={{color: '#666', marginBottom: '15px'}}>No saved properties yet</p>
                  <Link to="/renter/search" className="btn btn-primary">
                    Browse Properties
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="grid grid-3" style={{marginTop: '30px'}}>
            <Link to="/renter/search" className="card" style={{textDecoration: 'none', color: 'inherit', textAlign: 'center', padding: '30px'}}>
              <div style={{fontSize: '48px', marginBottom: '15px'}}>🔍</div>
              <h3 style={{marginBottom: '10px'}}>Search Properties</h3>
              <p style={{color: '#666', fontSize: '14px'}}>Find your perfect rental home</p>
            </Link>

            <Link to="/renter/verification-prompt" className="card" style={{textDecoration: 'none', color: 'inherit', textAlign: 'center', padding: '30px'}}>
              <div style={{fontSize: '48px', marginBottom: '15px'}}>✓</div>
              <h3 style={{marginBottom: '10px'}}>Get Verified</h3>
              <p style={{color: '#666', fontSize: '14px'}}>Unlock unlimited contacts</p>
            </Link>

            <Link to="/renter/profile" className="card" style={{textDecoration: 'none', color: 'inherit', textAlign: 'center', padding: '30px'}}>
              <div style={{fontSize: '48px', marginBottom: '15px'}}>👤</div>
              <h3 style={{marginBottom: '10px'}}>Complete Profile</h3>
              <p style={{color: '#666', fontSize: '14px'}}>Add more details about yourself</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenterDashboard;

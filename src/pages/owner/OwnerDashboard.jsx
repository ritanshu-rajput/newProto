import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../App.css';

function OwnerDashboard() {
  const location = useLocation();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (location.state?.paymentSuccess || location.state?.propertyAdded) {
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 5000);
    }
  }, [location]);

  const mockProperties = [
    {
      id: 1,
      title: '2 BHK Apartment in Downtown',
      location: 'Mumbai, Maharashtra',
      rent: '₹25,000',
      status: 'Active',
      views: 145,
      interests: 12
    },
    {
      id: 2,
      title: '3 BHK Villa in Green Valley',
      location: 'Pune, Maharashtra',
      rent: '₹45,000',
      status: 'Active',
      views: 89,
      interests: 8
    },
    {
      id: 3,
      title: 'Studio Apartment Near IT Park',
      location: 'Bangalore, Karnataka',
      rent: '₹18,000',
      status: 'Active',
      views: 203,
      interests: 15
    }
  ];

  const mockInterests = [
    {
      id: 1,
      renterName: 'Rahul Sharma',
      property: '2 BHK Apartment in Downtown',
      verified: true,
      message: 'Hi, I am interested in viewing this property...',
      time: '2 hours ago'
    },
    {
      id: 2,
      renterName: 'Priya Patel',
      property: '3 BHK Villa in Green Valley',
      verified: true,
      message: 'Looking for a long-term rental. Is this available?',
      time: '5 hours ago'
    },
    {
      id: 3,
      renterName: 'Amit Kumar',
      property: 'Studio Apartment Near IT Park',
      verified: false,
      message: 'Can we schedule a viewing this weekend?',
      time: '1 day ago'
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
          <Link to="/owner/dashboard">Dashboard</Link>
          <Link to="/owner/manage-listings">My Listings</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/owner/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div className="dashboard">
          {/* Success Alert */}
          {showSuccessAlert && (
            <div className="alert alert-success">
              {location.state?.paymentSuccess && '✓ Payment successful! Your subscription is now active.'}
              {location.state?.propertyAdded && '✓ Property published successfully!'}
            </div>
          )}

          {/* Welcome Section */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
            <div>
              <h1 style={{marginBottom: '10px'}}>Welcome back, John!</h1>
              <p style={{color: '#666'}}>Here's what's happening with your properties</p>
            </div>
            <Link to="/owner/add-property" className="btn btn-primary">
              + Add New Property
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">Active Listings</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">437</div>
              <div className="stat-label">Total Views</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">35</div>
              <div className="stat-label">Interests Received</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">7/10</div>
              <div className="stat-label">Properties Used</div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header">Current Subscription</div>
            <div className="card-body">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <h3 style={{marginBottom: '5px'}}>Basic Plan</h3>
                  <p style={{color: '#666'}}>₹999/month • Up to 10 properties</p>
                  <p style={{color: '#666', fontSize: '14px', marginTop: '5px'}}>
                    Renews on: December 15, 2024
                  </p>
                </div>
                <div>
                  <Link to="/owner/subscription-plans" className="btn btn-outline">
                    Upgrade Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Interests */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Recent Interests</span>
              <Link to="/messages" style={{fontSize: '14px', color: '#3498db'}}>View All</Link>
            </div>
            <div className="card-body" style={{padding: 0}}>
              {mockInterests.map(interest => (
                <div key={interest.id} style={{padding: '20px', borderBottom: '1px solid #e0e0e0'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                    <div>
                      <h4 style={{marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                        {interest.renterName}
                        {interest.verified && (
                          <span className="badge badge-success">Verified</span>
                        )}
                      </h4>
                      <p style={{fontSize: '14px', color: '#666'}}>{interest.property}</p>
                    </div>
                    <span style={{fontSize: '12px', color: '#999'}}>{interest.time}</span>
                  </div>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>
                    {interest.message}
                  </p>
                  <div style={{display: 'flex', gap: '10px'}}>
                    <Link to={`/renter-profile/${interest.id}`} className="btn btn-outline" style={{fontSize: '14px', padding: '6px 12px'}}>
                      View Profile
                    </Link>
                    <Link to="/messages" className="btn btn-primary" style={{fontSize: '14px', padding: '6px 12px'}}>
                      Reply
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Properties */}
          <div className="card">
            <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Your Active Properties</span>
              <Link to="/owner/manage-listings" style={{fontSize: '14px', color: '#3498db'}}>Manage All</Link>
            </div>
            <div className="card-body" style={{padding: 0}}>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid #e0e0e0', backgroundColor: '#f8f9fa'}}>
                    <th style={{textAlign: 'left', padding: '15px'}}>Property</th>
                    <th style={{textAlign: 'left', padding: '15px'}}>Location</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Rent</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Views</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Interests</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Status</th>
                    <th style={{textAlign: 'center', padding: '15px'}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProperties.map(property => (
                    <tr key={property.id} style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '15px'}}>{property.title}</td>
                      <td style={{padding: '15px'}}>{property.location}</td>
                      <td style={{textAlign: 'center', padding: '15px', fontWeight: '600', color: '#27ae60'}}>
                        {property.rent}
                      </td>
                      <td style={{textAlign: 'center', padding: '15px'}}>{property.views}</td>
                      <td style={{textAlign: 'center', padding: '15px'}}>{property.interests}</td>
                      <td style={{textAlign: 'center', padding: '15px'}}>
                        <span className="badge badge-success">{property.status}</span>
                      </td>
                      <td style={{textAlign: 'center', padding: '15px'}}>
                        <button className="btn btn-outline" style={{fontSize: '12px', padding: '6px 12px'}}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;

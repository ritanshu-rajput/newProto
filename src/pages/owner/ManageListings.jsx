import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function ManageListings() {
  const [filter, setFilter] = useState('all');

  const mockProperties = [
    {
      id: 1,
      title: '2 BHK Apartment in Downtown',
      location: 'Mumbai, Maharashtra',
      rent: '₹25,000',
      status: 'Active',
      views: 145,
      interests: 12,
      image: null,
      bedrooms: 2,
      bathrooms: 2,
      postedDate: 'Oct 15, 2024'
    },
    {
      id: 2,
      title: '3 BHK Villa in Green Valley',
      location: 'Pune, Maharashtra',
      rent: '₹45,000',
      status: 'Active',
      views: 89,
      interests: 8,
      image: null,
      bedrooms: 3,
      bathrooms: 3,
      postedDate: 'Oct 20, 2024'
    },
    {
      id: 3,
      title: 'Studio Apartment Near IT Park',
      location: 'Bangalore, Karnataka',
      rent: '₹18,000',
      status: 'Active',
      views: 203,
      interests: 15,
      image: null,
      bedrooms: 1,
      bathrooms: 1,
      postedDate: 'Oct 25, 2024'
    },
    {
      id: 4,
      title: 'Luxury Penthouse with City View',
      location: 'Mumbai, Maharashtra',
      rent: '₹75,000',
      status: 'Draft',
      views: 0,
      interests: 0,
      image: null,
      bedrooms: 4,
      bathrooms: 4,
      postedDate: 'Nov 1, 2024'
    }
  ];

  const filteredProperties = filter === 'all'
    ? mockProperties
    : mockProperties.filter(p => p.status.toLowerCase() === filter);

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
        <div style={{maxWidth: '1200px', margin: '40px auto'}}>
          {/* Header Section */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
            <div>
              <h1 style={{marginBottom: '10px'}}>Manage Listings</h1>
              <p style={{color: '#666'}}>View and manage all your property listings</p>
            </div>
            <Link to="/owner/add-property" className="btn btn-primary">
              + Add New Property
            </Link>
          </div>

          {/* Filters */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-body">
              <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <span style={{fontWeight: '600', marginRight: '10px'}}>Filter:</span>
                <button
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('all')}
                  style={{fontSize: '14px', padding: '8px 16px'}}
                >
                  All ({mockProperties.length})
                </button>
                <button
                  className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('active')}
                  style={{fontSize: '14px', padding: '8px 16px'}}
                >
                  Active ({mockProperties.filter(p => p.status === 'Active').length})
                </button>
                <button
                  className={`btn ${filter === 'draft' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('draft')}
                  style={{fontSize: '14px', padding: '8px 16px'}}
                >
                  Drafts ({mockProperties.filter(p => p.status === 'Draft').length})
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-2">
            {filteredProperties.map(property => (
              <div key={property.id} className="card">
                <div className="property-image">
                  Property Image
                </div>
                <div style={{padding: '20px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                    <h3 style={{fontSize: '18px', fontWeight: '600'}}>{property.title}</h3>
                    <span className={`badge ${property.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                      {property.status}
                    </span>
                  </div>

                  <p style={{color: '#666', fontSize: '14px', marginBottom: '10px'}}>
                    📍 {property.location}
                  </p>

                  <div style={{display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '14px', color: '#666'}}>
                    <span>🛏️ {property.bedrooms} Bed</span>
                    <span>🚿 {property.bathrooms} Bath</span>
                  </div>

                  <div style={{fontSize: '24px', fontWeight: '700', color: '#27ae60', marginBottom: '15px'}}>
                    {property.rent}/month
                  </div>

                  {property.status === 'Active' && (
                    <div style={{display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px', marginBottom: '15px'}}>
                      <div style={{flex: 1, textAlign: 'center'}}>
                        <div style={{fontSize: '20px', fontWeight: '700', color: '#3498db'}}>{property.views}</div>
                        <div style={{fontSize: '12px', color: '#666'}}>Views</div>
                      </div>
                      <div style={{flex: 1, textAlign: 'center'}}>
                        <div style={{fontSize: '20px', fontWeight: '700', color: '#3498db'}}>{property.interests}</div>
                        <div style={{fontSize: '12px', color: '#666'}}>Interests</div>
                      </div>
                    </div>
                  )}

                  <div style={{fontSize: '12px', color: '#999', marginBottom: '15px'}}>
                    Posted: {property.postedDate}
                  </div>

                  <div style={{display: 'flex', gap: '10px'}}>
                    <button className="btn btn-outline" style={{flex: 1, fontSize: '14px'}}>
                      Edit
                    </button>
                    <Link
                      to={`/renter/property/${property.id}`}
                      className="btn btn-outline"
                      style={{flex: 1, fontSize: '14px'}}
                    >
                      View
                    </Link>
                    {property.status === 'Active' ? (
                      <button className="btn btn-secondary" style={{fontSize: '14px'}}>
                        Deactivate
                      </button>
                    ) : (
                      <button className="btn btn-success" style={{fontSize: '14px'}}>
                        Publish
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div style={{textAlign: 'center', padding: '60px 20px'}}>
              <div style={{fontSize: '64px', marginBottom: '20px'}}>🏠</div>
              <h3 style={{marginBottom: '10px'}}>No properties found</h3>
              <p style={{color: '#666', marginBottom: '20px'}}>
                {filter === 'all'
                  ? "You haven't added any properties yet."
                  : `No ${filter} properties found.`}
              </p>
              <Link to="/owner/add-property" className="btn btn-primary">
                Add Your First Property
              </Link>
            </div>
          )}

          {/* Subscription Limit Info */}
          <div className="alert alert-info" style={{marginTop: '30px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <strong>📊 Property Limit:</strong> You're using {mockProperties.filter(p => p.status === 'Active').length} out of 10 available property slots in your Basic plan.
              </div>
              <Link to="/owner/subscription-plans" className="btn btn-outline" style={{fontSize: '14px'}}>
                Upgrade Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageListings;

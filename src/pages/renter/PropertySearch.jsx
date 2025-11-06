import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function PropertySearch() {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: 'all',
    bedrooms: 'all',
    amenities: []
  });

  const mockProperties = [
    {
      id: 1,
      title: '2 BHK Apartment in Downtown',
      location: 'Mumbai, Maharashtra',
      rent: 25000,
      bedrooms: 2,
      bathrooms: 2,
      propertyType: 'apartment',
      amenities: ['WiFi', 'Parking', 'Gym'],
      verified: true,
      images: 8
    },
    {
      id: 2,
      title: '3 BHK Villa in Green Valley',
      location: 'Pune, Maharashtra',
      rent: 45000,
      bedrooms: 3,
      bathrooms: 3,
      propertyType: 'villa',
      amenities: ['WiFi', 'Parking', 'Garden', 'Swimming Pool'],
      verified: true,
      images: 12
    },
    {
      id: 3,
      title: 'Studio Apartment Near IT Park',
      location: 'Bangalore, Karnataka',
      rent: 18000,
      bedrooms: 1,
      bathrooms: 1,
      propertyType: 'studio',
      amenities: ['WiFi', 'Security', 'Elevator'],
      verified: true,
      images: 6
    },
    {
      id: 4,
      title: 'Luxury Penthouse with City View',
      location: 'Mumbai, Maharashtra',
      rent: 75000,
      bedrooms: 4,
      bathrooms: 4,
      propertyType: 'apartment',
      amenities: ['WiFi', 'Parking', 'Gym', 'Swimming Pool', 'Security'],
      verified: true,
      images: 15
    },
    {
      id: 5,
      title: 'Cozy 1 BHK Near Metro Station',
      location: 'Delhi, NCR',
      rent: 15000,
      bedrooms: 1,
      bathrooms: 1,
      propertyType: 'apartment',
      amenities: ['WiFi', 'Security'],
      verified: false,
      images: 5
    },
    {
      id: 6,
      title: '2 BHK Furnished Apartment',
      location: 'Chennai, Tamil Nadu',
      rent: 22000,
      bedrooms: 2,
      bathrooms: 2,
      propertyType: 'apartment',
      amenities: ['WiFi', 'Parking', 'Air Conditioning', 'Furnished'],
      verified: true,
      images: 10
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
          <Link to="/renter/search">Search</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/renter/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1400px', margin: '40px auto'}}>
          <h1 style={{marginBottom: '30px'}}>Find Your Perfect Rental Home</h1>

          {/* Filters */}
          <div className="filters-container">
            <div className="filters-row">
              <div className="form-group" style={{marginBottom: 0}}>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="City or area"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
              </div>

              <div className="form-group" style={{marginBottom: 0}}>
                <label>Property Type</label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                >
                  <option value="all">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              <div className="form-group" style={{marginBottom: 0}}>
                <label>Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                >
                  <option value="all">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>

              <div className="form-group" style={{marginBottom: 0}}>
                <label>Price Range (₹)</label>
                <div style={{display: 'flex', gap: '10px'}}>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                    style={{width: '50%'}}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                    style={{width: '50%'}}
                  />
                </div>
              </div>
            </div>

            <div style={{marginTop: '15px', display: 'flex', gap: '10px', alignItems: 'center'}}>
              <span style={{fontWeight: '600'}}>Amenities:</span>
              {['WiFi', 'Parking', 'Gym', 'Swimming Pool', 'Security', 'Furnished'].map(amenity => (
                <label key={amenity} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({...filters, amenities: [...filters.amenities, amenity]});
                      } else {
                        setFilters({...filters, amenities: filters.amenities.filter(a => a !== amenity)});
                      }
                    }}
                    style={{marginRight: '5px'}}
                  />
                  {amenity}
                </label>
              ))}
            </div>

            <div style={{marginTop: '15px', display: 'flex', gap: '10px'}}>
              <button className="btn btn-primary">
                Apply Filters
              </button>
              <button className="btn btn-outline">
                Clear All
              </button>
            </div>
          </div>

          {/* Results Header */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 0 20px'}}>
            <h3>Showing {mockProperties.length} properties</h3>
            <select style={{padding: '8px', border: '1px solid #ddd', borderRadius: '4px'}}>
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Viewed</option>
            </select>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-3">
            {mockProperties.map(property => (
              <Link
                key={property.id}
                to={`/renter/property/${property.id}`}
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <div className="property-card">
                  <div className="property-image" style={{position: 'relative'}}>
                    Property Image
                    {property.verified && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          backgroundColor: '#27ae60',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}
                      >
                        ✓ Verified Owner
                      </span>
                    )}
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      📸 {property.images} photos
                    </span>
                  </div>

                  <div className="property-info">
                    <div className="property-title">{property.title}</div>
                    <div className="property-price">₹{property.rent.toLocaleString()}/month</div>
                    <div className="property-details">📍 {property.location}</div>
                    <div className="property-details">
                      🛏️ {property.bedrooms} Bed • 🚿 {property.bathrooms} Bath
                    </div>

                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px'}}>
                      {property.amenities.slice(0, 3).map(amenity => (
                        <span
                          key={amenity}
                          style={{
                            fontSize: '11px',
                            padding: '3px 8px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '4px',
                            color: '#3498db'
                          }}
                        >
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span
                          style={{
                            fontSize: '11px',
                            padding: '3px 8px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '4px',
                            color: '#3498db'
                          }}
                        >
                          +{property.amenities.length - 3} more
                        </span>
                      )}
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

          {/* Pagination */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px'}}>
            <button className="btn btn-outline">Previous</button>
            <button className="btn btn-primary">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearch;

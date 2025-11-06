import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Mock property data
  const property = {
    id: id,
    title: '2 BHK Apartment in Downtown',
    location: 'Bandra West, Mumbai, Maharashtra 400050',
    rent: 25000,
    maintenance: 2000,
    parking: 1000,
    deposit: 50000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Apartment',
    furnishingStatus: 'Semi-Furnished',
    area: 1200,
    availableFrom: 'Immediate',
    amenities: ['WiFi', 'Parking', 'Gym', 'Security', 'Elevator', 'Power Backup'],
    utilitiesIncluded: ['Water', 'Security'],
    description: `Beautiful 2 BHK apartment located in the heart of Bandra West, Mumbai. This spacious property features 2 bedrooms and 2 bathrooms, perfect for comfortable living.

The property includes modern amenities such as WiFi, Parking, Gym, Security, Elevator, Power Backup. With excellent connectivity and nearby access to shopping centers, schools, and public transportation, this property offers the perfect blend of comfort and convenience.

The property is well-maintained with ample natural light and ventilation. Ideal for families or working professionals looking for a quality living space in a prime location.`,
    idealRenter: `Looking for responsible working professionals or small families who value cleanliness and maintain good communication.

Preferred tenants should have stable income and good rental history. Property is semi-furnished, so suitable for those looking for ready-to-move-in accommodation.

Non-smokers preferred. Small pets may be considered on a case-by-case basis.`,
    images: 8,
    postedDate: 'Oct 15, 2024',
    owner: {
      name: 'John Smith Properties',
      verified: true,
      responseRate: '95%',
      responseTime: 'Within 2 hours',
      propertiesListed: 5
    }
  };

  const handleContactOwner = () => {
    // Check if user has reached contact limit (this would be based on actual user state)
    const contactsUsed = 3;
    const isVerified = false;

    if (contactsUsed >= 5 && !isVerified) {
      navigate('/renter/verification-prompt');
    } else {
      setShowContactModal(true);
    }
  };

  const handleSendMessage = () => {
    setShowContactModal(false);
    navigate('/messages');
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
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1200px', margin: '20px auto'}}>
          {/* Back Button */}
          <Link to="/renter/search" style={{display: 'inline-flex', alignItems: 'center', marginBottom: '20px', color: '#3498db', textDecoration: 'none'}}>
            ← Back to Search
          </Link>

          {/* Property Images */}
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '30px', height: '400px'}}>
            <div style={{
              backgroundColor: '#ddd',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: '#999'
            }}>
              Main Property Image
            </div>
            <div style={{display: 'grid', gridTemplateRows: '1fr 1fr', gap: '10px'}}>
              <div style={{
                backgroundColor: '#ddd',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#999'
              }}>
                Image 2
              </div>
              <div style={{
                backgroundColor: '#ddd',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#999',
                position: 'relative'
              }}>
                <span>+{property.images - 3} more photos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-3" style={{gridTemplateColumns: '2fr 1fr', gap: '30px'}}>
            {/* Left Column - Property Details */}
            <div>
              {/* Title and Basic Info */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <div>
                    <h1 style={{fontSize: '28px', marginBottom: '10px'}}>{property.title}</h1>
                    <p style={{fontSize: '16px', color: '#666', display: 'flex', alignItems: 'center', gap: '5px'}}>
                      📍 {property.location}
                    </p>
                  </div>
                  <button
                    className={`btn ${isSaved ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    {isSaved ? '❤️ Saved' : '🤍 Save'}
                  </button>
                </div>

                <div style={{display: 'flex', gap: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                  <div>
                    <div style={{fontSize: '32px', fontWeight: '700', color: '#27ae60'}}>
                      ₹{property.rent.toLocaleString()}/mo
                    </div>
                    <div style={{fontSize: '14px', color: '#666'}}>Monthly Rent</div>
                  </div>
                  <div style={{borderLeft: '1px solid #ddd', paddingLeft: '30px'}}>
                    <div style={{fontSize: '20px', fontWeight: '600', color: '#666'}}>
                      ₹{property.deposit.toLocaleString()}
                    </div>
                    <div style={{fontSize: '14px', color: '#666'}}>Security Deposit</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Key Features</div>
                <div className="card-body">
                  <div className="grid grid-3" style={{gap: '20px'}}>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>🛏️</div>
                      <div style={{fontWeight: '600'}}>{property.bedrooms} Bedrooms</div>
                    </div>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>🚿</div>
                      <div style={{fontWeight: '600'}}>{property.bathrooms} Bathrooms</div>
                    </div>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>📏</div>
                      <div style={{fontWeight: '600'}}>{property.area} sq ft</div>
                    </div>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>🏢</div>
                      <div style={{fontWeight: '600'}}>{property.propertyType}</div>
                    </div>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>🛋️</div>
                      <div style={{fontWeight: '600'}}>{property.furnishingStatus}</div>
                    </div>
                    <div style={{textAlign: 'center', padding: '15px'}}>
                      <div style={{fontSize: '32px', marginBottom: '5px'}}>📅</div>
                      <div style={{fontWeight: '600'}}>{property.availableFrom}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Charges */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Additional Charges</div>
                <div className="card-body">
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                    <span>Maintenance Charges</span>
                    <strong>₹{property.maintenance.toLocaleString()}/month</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e0e0e0'}}>
                    <span>Parking Charges</span>
                    <strong>₹{property.parking.toLocaleString()}/month</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}}>
                    <span style={{fontWeight: '600'}}>Total Monthly Cost</span>
                    <strong style={{fontSize: '20px', color: '#27ae60'}}>
                      ₹{(property.rent + property.maintenance + property.parking).toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Amenities</div>
                <div className="card-body">
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                    {property.amenities.map(amenity => (
                      <span
                        key={amenity}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#f0f8ff',
                          borderRadius: '20px',
                          fontSize: '14px',
                          color: '#3498db',
                          border: '1px solid #d1ecf1'
                        }}
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>

                  <div style={{marginTop: '20px'}}>
                    <h4 style={{marginBottom: '10px', fontSize: '14px', fontWeight: '600'}}>Utilities Included:</h4>
                    <div style={{display: 'flex', gap: '10px'}}>
                      {property.utilitiesIncluded.map(utility => (
                        <span
                          key={utility}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#d4edda',
                            borderRadius: '16px',
                            fontSize: '13px',
                            color: '#155724'
                          }}
                        >
                          {utility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Property Description</div>
                <div className="card-body">
                  <p style={{lineHeight: '1.8', whiteSpace: 'pre-line', color: '#666'}}>
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Ideal Renter Profile */}
              <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">Looking For</div>
                <div className="card-body">
                  <p style={{lineHeight: '1.8', whiteSpace: 'pre-line', color: '#666'}}>
                    {property.idealRenter}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Owner Info & Actions */}
            <div>
              {/* Contact Card - Sticky */}
              <div style={{position: 'sticky', top: '20px'}}>
                <div className="card" style={{marginBottom: '20px'}}>
                  <div className="card-header">Owner Information</div>
                  <div className="card-body">
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#3498db',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: '700'
                      }}>
                        JS
                      </div>
                      <div>
                        <h4 style={{marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                          {property.owner.name}
                          {property.owner.verified && (
                            <span className="badge badge-success">Verified</span>
                          )}
                        </h4>
                        <p style={{fontSize: '12px', color: '#666'}}>
                          {property.owner.propertiesListed} properties listed
                        </p>
                      </div>
                    </div>

                    <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px', marginBottom: '15px'}}>
                      <div style={{marginBottom: '10px', fontSize: '14px'}}>
                        <strong>Response Rate:</strong> {property.owner.responseRate}
                      </div>
                      <div style={{fontSize: '14px'}}>
                        <strong>Response Time:</strong> {property.owner.responseTime}
                      </div>
                    </div>

                    <button
                      className="btn btn-success"
                      style={{width: '100%', marginBottom: '10px', padding: '12px'}}
                      onClick={handleContactOwner}
                    >
                      Contact Owner
                    </button>

                    <button
                      className="btn btn-outline"
                      style={{width: '100%'}}
                      onClick={() => navigate('/owner/dashboard')}
                    >
                      View All Properties
                    </button>
                  </div>
                </div>

                {/* Safety Tips */}
                <div className="card">
                  <div className="card-header">Safety Tips</div>
                  <div className="card-body">
                    <ul style={{fontSize: '13px', color: '#666', lineHeight: '1.8', marginLeft: '20px'}}>
                      <li>Always visit the property in person</li>
                      <li>Verify owner's identity and documents</li>
                      <li>Never transfer money before signing agreement</li>
                      <li>Read rental agreement carefully</li>
                      <li>Report suspicious activity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">Contact Owner</div>
            <div className="modal-body">
              <p style={{marginBottom: '20px', color: '#666'}}>
                Send a message to {property.owner.name} about this property.
              </p>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  placeholder="Hi, I'm interested in this property..."
                  style={{minHeight: '120px'}}
                  defaultValue={`Hi, I'm interested in the property "${property.title}". I would like to schedule a viewing. When would be a good time?`}
                />
              </div>

              <div className="alert alert-info">
                <p style={{fontSize: '14px'}}>
                  <strong>💡 Tip:</strong> Introduce yourself and mention your preferred move-in date to get faster responses!
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowContactModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;

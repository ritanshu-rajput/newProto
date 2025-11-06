import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function AddPropertyPage() {
  const navigate = useNavigate();
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [formData, setFormData] = useState({
    propertyType: 'apartment',
    address: '',
    city: '',
    pincode: '',
    rentAmount: '',
    maintenanceCharges: '',
    parkingCharges: '',
    utilitiesIncluded: [],
    bedrooms: '',
    bathrooms: '',
    amenities: [],
    propertyImages: [],
    description: '',
    idealRenterProfile: ''
  });

  const propertyTypes = ['Apartment', 'House', 'Studio', 'Villa', 'Condo', 'Townhouse'];
  const amenitiesList = ['WiFi', 'Parking', 'Gym', 'Swimming Pool', 'Security', 'Elevator', 'Garden', 'Balcony', 'Air Conditioning', 'Furnished'];
  const utilitiesList = ['Water', 'Electricity', 'Gas', 'Internet', 'TV Cable'];

  const handleGenerateAI = () => {
    // Simulate AI generation
    const generatedDescription = `Beautiful ${formData.propertyType} located in ${formData.city}. This spacious property features ${formData.bedrooms} bedrooms and ${formData.bathrooms} bathrooms, perfect for comfortable living.

The property includes modern amenities such as ${formData.amenities.join(', ')}. With excellent connectivity and nearby access to shopping centers, schools, and public transportation, this property offers the perfect blend of comfort and convenience.

The property is well-maintained with ample natural light and ventilation. Ideal for ${formData.bedrooms} bedroom seekers looking for a quality living space in a prime location.`;

    setFormData({...formData, description: generatedDescription});
    setShowAIModal(false);
    setAiPrompt('');
  };

  const handleGenerateRenterProfile = () => {
    const generatedProfile = `Looking for responsible ${formData.bedrooms > 2 ? 'families or working professionals' : 'working professionals or students'} who value cleanliness and maintain good communication.

Preferred tenants should have stable income and good rental history. ${formData.amenities.includes('Furnished') ? 'Property is fully furnished, so suitable for those looking for ready-to-move-in accommodation.' : 'Tenants should be willing to maintain the property well.'}

Non-smokers preferred. Small pets may be considered on a case-by-case basis.`;

    setFormData({...formData, idealRenterProfile: generatedProfile});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/owner/dashboard', { state: { propertyAdded: true } });
  };

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/owner/dashboard" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/owner/dashboard">Dashboard</Link>
          <Link to="/owner/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '900px', margin: '40px auto'}}>
          <h1 style={{marginBottom: '30px'}}>Add New Property</h1>

          <form onSubmit={handleSubmit}>
            {/* Property Basic Details */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Basic Details</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Property Type *</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    required
                  >
                    {propertyTypes.map(type => (
                      <option key={type} value={type.toLowerCase()}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Full Address *</label>
                  <input
                    type="text"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group-inline">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Pin Code *</label>
                    <input
                      type="text"
                      placeholder="Pin code"
                      value={formData.pincode}
                      onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-inline">
                  <div className="form-group">
                    <label>Bedrooms *</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="Number of bedrooms"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Bathrooms *</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Number of bathrooms"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Pricing Details</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Monthly Rent (₹) *</label>
                  <input
                    type="number"
                    placeholder="Enter monthly rent amount"
                    value={formData.rentAmount}
                    onChange={(e) => setFormData({...formData, rentAmount: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group-inline">
                  <div className="form-group">
                    <label>Maintenance Charges (₹)</label>
                    <input
                      type="number"
                      placeholder="Monthly maintenance"
                      value={formData.maintenanceCharges}
                      onChange={(e) => setFormData({...formData, maintenanceCharges: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Parking Charges (₹)</label>
                    <input
                      type="number"
                      placeholder="Monthly parking"
                      value={formData.parkingCharges}
                      onChange={(e) => setFormData({...formData, parkingCharges: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Utilities Included</label>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px'}}>
                    {utilitiesList.map(utility => (
                      <label key={utility} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <input
                          type="checkbox"
                          checked={formData.utilitiesIncluded.includes(utility)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({...formData, utilitiesIncluded: [...formData.utilitiesIncluded, utility]});
                            } else {
                              setFormData({...formData, utilitiesIncluded: formData.utilitiesIncluded.filter(u => u !== utility)});
                            }
                          }}
                          style={{marginRight: '5px'}}
                        />
                        {utility}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Amenities</div>
              <div className="card-body">
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                  {amenitiesList.map(amenity => (
                    <label key={amenity} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px', border: '1px solid #ddd', borderRadius: '6px'}}>
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({...formData, amenities: [...formData.amenities, amenity]});
                          } else {
                            setFormData({...formData, amenities: formData.amenities.filter(a => a !== amenity)});
                          }
                        }}
                        style={{marginRight: '8px'}}
                      />
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Images */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Property Images</div>
              <div className="card-body">
                <div className="file-upload">
                  <input
                    type="file"
                    id="propertyImages"
                    accept="image/*"
                    multiple
                    onChange={(e) => setFormData({...formData, propertyImages: e.target.files})}
                  />
                  <label htmlFor="propertyImages">
                    <div style={{fontSize: '48px'}}>📸</div>
                    <p>Click to upload property images</p>
                    <p style={{fontSize: '12px', color: '#999'}}>JPG or PNG (Max 10 images for Basic plan)</p>
                    {formData.propertyImages.length > 0 && (
                      <p style={{color: '#27ae60', fontWeight: '600', marginTop: '10px'}}>
                        ✓ {formData.propertyImages.length} image(s) selected
                      </p>
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Property Description with AI */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Property Description</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    placeholder="Describe your property in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    style={{minHeight: '150px'}}
                    required
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowAIModal(true)}
                >
                  ✨ Generate with AI
                </button>
              </div>
            </div>

            {/* Ideal Renter Profile with AI */}
            <div className="card" style={{marginBottom: '30px'}}>
              <div className="card-header">Ideal Renter Profile</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Renter Preferences *</label>
                  <textarea
                    placeholder="Describe your ideal renter..."
                    value={formData.idealRenterProfile}
                    onChange={(e) => setFormData({...formData, idealRenterProfile: e.target.value})}
                    style={{minHeight: '120px'}}
                    required
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleGenerateRenterProfile}
                >
                  ✨ Generate with AI
                </button>
              </div>
            </div>

            {/* Submit Buttons */}
            <div style={{display: 'flex', gap: '15px', marginTop: '30px'}}>
              <button type="submit" className="btn btn-success" style={{flex: 1}}>
                Publish Property
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/owner/dashboard')}>
                Save as Draft
              </button>
              <Link to="/owner/dashboard" className="btn btn-outline">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* AI Modal */}
      {showAIModal && (
        <div className="modal-overlay" onClick={() => setShowAIModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">✨ AI Description Generator</div>
            <div className="modal-body">
              <p style={{marginBottom: '20px', color: '#666'}}>
                Provide bullet points or key highlights about your property, and AI will generate a professional description.
              </p>

              <div className="form-group">
                <label>Property Highlights</label>
                <textarea
                  placeholder="• Spacious living room with natural light&#10;• Recently renovated kitchen&#10;• Close to metro station&#10;• Quiet neighborhood"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  style={{minHeight: '150px'}}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowAIModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleGenerateAI}>
                Generate Description
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPropertyPage;

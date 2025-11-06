import { Link, useParams } from 'react-router-dom';
import '../../App.css';

function RenterProfileView() {
  const { id } = useParams();

  // Mock renter data
  const renterProfile = {
    id: id,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+44 7890 123456',
    verified: true,
    verifiedDate: 'October 20, 2024',
    currentLocation: 'London, UK',
    preferredLocation: 'Mumbai, Maharashtra',
    occupation: 'Software Engineer',
    company: 'Tech Solutions Ltd.',
    monthlyIncome: '₹1,80,000',
    rentBudget: '₹25,000 - ₹35,000',
    moveInDate: 'December 1, 2024',
    duration: 'Long-term (12+ months)',
    familySize: '2 people',
    pets: 'No pets',
    documents: {
      idProof: {
        type: 'Passport',
        status: 'Verified',
        uploadDate: 'Oct 20, 2024'
      },
      paySlips: {
        count: 3,
        status: 'Verified',
        uploadDate: 'Oct 20, 2024'
      },
      bankStatements: {
        count: 3,
        status: 'Verified',
        uploadDate: 'Oct 20, 2024'
      }
    },
    rentalHistory: [
      {
        property: 'Flat 3B, Green Apartments',
        location: 'Bangalore, Karnataka',
        duration: '2 years (2022-2024)',
        landlord: 'Mr. Raj Kumar',
        reference: 'Available',
        reason: 'Job relocation'
      }
    ],
    aboutMe: `I am a working professional looking for a clean and well-maintained property in Mumbai. I am currently working at Tech Solutions Ltd. as a Software Engineer and have been relocated to Mumbai office.

I am a responsible tenant who takes good care of the property. I don't smoke and don't have any pets. I prefer a quiet environment and maintain good relationships with neighbors.

I am looking for a long-term rental (12+ months) and can provide all necessary documentation and references from previous landlords.`
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
          <Link to="/messages">Messages</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1000px', margin: '40px auto'}}>
          {/* Back Button */}
          <Link to="/owner/dashboard" style={{display: 'inline-flex', alignItems: 'center', marginBottom: '20px', color: '#3498db', textDecoration: 'none'}}>
            ← Back to Dashboard
          </Link>

          {/* Header Section */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#3498db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '36px',
                fontWeight: '700'
              }}>
                SJ
              </div>

              <div style={{flex: 1}}>
                <h1 style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px'}}>
                  {renterProfile.name}
                  {renterProfile.verified && (
                    <span className="badge badge-success" style={{fontSize: '14px'}}>
                      ✓ Verified Profile
                    </span>
                  )}
                </h1>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px'}}>
                  <div>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>📍 Current Location</p>
                    <p style={{fontWeight: '600'}}>{renterProfile.currentLocation}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>🎯 Preferred Location</p>
                    <p style={{fontWeight: '600'}}>{renterProfile.preferredLocation}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>💼 Occupation</p>
                    <p style={{fontWeight: '600'}}>{renterProfile.occupation}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>🏢 Company</p>
                    <p style={{fontWeight: '600'}}>{renterProfile.company}</p>
                  </div>
                </div>
              </div>

              <div style={{textAlign: 'right'}}>
                <Link to="/messages" className="btn btn-primary" style={{marginBottom: '10px', display: 'block'}}>
                  Send Message
                </Link>
                <button className="btn btn-outline">
                  Download Profile
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header">About {renterProfile.name}</div>
            <div className="card-body">
              <p style={{lineHeight: '1.8', color: '#666', whiteSpace: 'pre-line'}}>
                {renterProfile.aboutMe}
              </p>
            </div>
          </div>

          {/* Rental Requirements */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header">Rental Requirements</div>
            <div className="card-body">
              <div className="grid grid-2" style={{gap: '20px'}}>
                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Budget Range</p>
                  <p style={{fontSize: '20px', fontWeight: '700', color: '#27ae60'}}>{renterProfile.rentBudget}</p>
                </div>

                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Move-in Date</p>
                  <p style={{fontSize: '20px', fontWeight: '700', color: '#3498db'}}>{renterProfile.moveInDate}</p>
                </div>

                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Duration</p>
                  <p style={{fontSize: '18px', fontWeight: '600'}}>{renterProfile.duration}</p>
                </div>

                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Family Size</p>
                  <p style={{fontSize: '18px', fontWeight: '600'}}>{renterProfile.familySize}</p>
                </div>

                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Monthly Income</p>
                  <p style={{fontSize: '18px', fontWeight: '600', color: '#27ae60'}}>{renterProfile.monthlyIncome}</p>
                </div>

                <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Pets</p>
                  <p style={{fontSize: '18px', fontWeight: '600'}}>{renterProfile.pets}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="card" style={{marginBottom: '30px', backgroundColor: '#d4edda', borderColor: '#28a745'}}>
            <div className="card-header" style={{backgroundColor: '#d4edda', borderColor: '#c3e6cb'}}>
              ✓ Verification Status
            </div>
            <div className="card-body">
              <p style={{color: '#155724', marginBottom: '20px'}}>
                This profile was verified on {renterProfile.verifiedDate}. All documents have been reviewed and approved by our admin team.
              </p>

              <div className="grid grid-3" style={{gap: '15px'}}>
                <div style={{padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #c3e6cb'}}>
                  <div style={{fontSize: '32px', marginBottom: '10px'}}>🆔</div>
                  <h4 style={{marginBottom: '5px', fontSize: '16px'}}>Identity Proof</h4>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>{renterProfile.documents.idProof.type}</p>
                  <span className="badge badge-success">{renterProfile.documents.idProof.status}</span>
                </div>

                <div style={{padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #c3e6cb'}}>
                  <div style={{fontSize: '32px', marginBottom: '10px'}}>💰</div>
                  <h4 style={{marginBottom: '5px', fontSize: '16px'}}>Income Proof</h4>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>{renterProfile.documents.paySlips.count} Pay Slips</p>
                  <span className="badge badge-success">{renterProfile.documents.paySlips.status}</span>
                </div>

                <div style={{padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #c3e6cb'}}>
                  <div style={{fontSize: '32px', marginBottom: '10px'}}>🏦</div>
                  <h4 style={{marginBottom: '5px', fontSize: '16px'}}>Bank Statements</h4>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>{renterProfile.documents.bankStatements.count} Statements</p>
                  <span className="badge badge-success">{renterProfile.documents.bankStatements.status}</span>
                </div>
              </div>

              <div style={{marginTop: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '6px'}}>
                <h4 style={{marginBottom: '10px', fontSize: '16px'}}>View Verified Documents</h4>
                <div style={{display: 'flex', gap: '10px'}}>
                  <button className="btn btn-outline" style={{fontSize: '14px'}}>
                    View ID Proof
                  </button>
                  <button className="btn btn-outline" style={{fontSize: '14px'}}>
                    View Pay Slips
                  </button>
                  <button className="btn btn-outline" style={{fontSize: '14px'}}>
                    View Bank Statements
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rental History */}
          <div className="card" style={{marginBottom: '30px'}}>
            <div className="card-header">Previous Rental History</div>
            <div className="card-body">
              {renterProfile.rentalHistory.map((history, index) => (
                <div key={index} style={{padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '6px'}}>
                  <h4 style={{marginBottom: '10px'}}>{history.property}</h4>
                  <div className="grid grid-2" style={{gap: '15px'}}>
                    <div>
                      <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Location</p>
                      <p style={{fontWeight: '600'}}>{history.location}</p>
                    </div>
                    <div>
                      <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Duration</p>
                      <p style={{fontWeight: '600'}}>{history.duration}</p>
                    </div>
                    <div>
                      <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Previous Landlord</p>
                      <p style={{fontWeight: '600'}}>{history.landlord}</p>
                    </div>
                    <div>
                      <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Reference</p>
                      <p style={{fontWeight: '600', color: '#27ae60'}}>{history.reference}</p>
                    </div>
                  </div>
                  <div style={{marginTop: '15px'}}>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Reason for Leaving</p>
                    <p>{history.reason}</p>
                  </div>
                  <button className="btn btn-outline" style={{marginTop: '15px', fontSize: '14px'}}>
                    Contact Previous Landlord
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="card">
            <div className="card-header">Contact Information</div>
            <div className="card-body">
              <div className="grid grid-2" style={{gap: '20px'}}>
                <div>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Email</p>
                  <p style={{fontWeight: '600', fontSize: '16px'}}>{renterProfile.email}</p>
                </div>
                <div>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '5px'}}>Phone</p>
                  <p style={{fontWeight: '600', fontSize: '16px'}}>{renterProfile.phone}</p>
                </div>
              </div>

              <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
                <Link to="/messages" className="btn btn-primary" style={{flex: 1}}>
                  Send Message
                </Link>
                <button className="btn btn-success">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenterProfileView;

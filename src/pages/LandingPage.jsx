import { Link } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <h1>🏠 RentEasy</h1>
        <div className="wireframe-nav">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Find Your Perfect Rental Home</h1>
        <p>Connect verified renters with trusted property owners</p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
          <Link to="/renter/search" className="btn btn-outline">Browse Properties</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="wireframe-container">
        <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '32px'}}>Why Choose RentEasy?</h2>

        <div className="grid grid-3">
          <div className="card">
            <div className="card-header">✓ Verified Users</div>
            <div className="card-body">
              All renters and property owners go through our verification process to ensure safety and trust.
            </div>
          </div>

          <div className="card">
            <div className="card-header">🔍 Easy Search</div>
            <div className="card-body">
              Advanced filters to find exactly what you're looking for. Location, price, amenities and more.
            </div>
          </div>

          <div className="card">
            <div className="card-header">💬 Direct Communication</div>
            <div className="card-body">
              Connect directly with property owners. No middlemen, no hidden fees.
            </div>
          </div>
        </div>

        {/* For Property Owners */}
        <div style={{marginTop: '60px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '32px'}}>For Property Owners</h2>

          <div className="grid grid-2">
            <div className="card">
              <div className="card-header">📝 Easy Listing Management</div>
              <div className="card-body">
                Create and manage multiple property listings with our intuitive interface. AI-powered description generator included.
              </div>
            </div>

            <div className="card">
              <div className="card-header">👥 View Verified Renter Profiles</div>
              <div className="card-body">
                Access complete renter profiles including ID verification, pay slips, and rental history before making decisions.
              </div>
            </div>

            <div className="card">
              <div className="card-header">💰 Flexible Subscription Plans</div>
              <div className="card-body">
                Choose from Basic, Standard, or Premium plans based on your needs. Starting from just ₹999/month.
              </div>
            </div>

            <div className="card">
              <div className="card-header">🚀 Instant Publishing</div>
              <div className="card-body">
                Your properties go live immediately after posting. Reach thousands of potential renters instantly.
              </div>
            </div>
          </div>
        </div>

        {/* For Renters */}
        <div style={{marginTop: '60px', marginBottom: '60px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '32px'}}>For Renters</h2>

          <div className="grid grid-2">
            <div className="card">
              <div className="card-header">🆓 Free to Browse</div>
              <div className="card-body">
                Search and view all property listings for free. Contact up to 5 owners without verification.
              </div>
            </div>

            <div className="card">
              <div className="card-header">✅ Get Verified</div>
              <div className="card-body">
                One-time verification fee of £6.99 gives you unlimited owner contacts and a verified badge.
              </div>
            </div>

            <div className="card">
              <div className="card-header">🏆 Stand Out</div>
              <div className="card-body">
                Verified profiles with documents get priority and better responses from property owners.
              </div>
            </div>

            <div className="card">
              <div className="card-header">🔐 Secure & Private</div>
              <div className="card-body">
                Your personal information is encrypted and only shared with owners you choose to contact.
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{textAlign: 'center', padding: '60px 0', backgroundColor: '#f8f9fa', borderRadius: '12px'}}>
          <h2 style={{marginBottom: '20px'}}>Ready to Get Started?</h2>
          <p style={{marginBottom: '30px', fontSize: '18px', color: '#666'}}>
            Join thousands of renters and property owners already using RentEasy
          </p>
          <Link to="/signup" className="btn btn-primary" style={{fontSize: '18px', padding: '15px 40px'}}>
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

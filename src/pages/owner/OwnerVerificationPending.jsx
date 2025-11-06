import { Link } from 'react-router-dom';
import '../../App.css';

function OwnerVerificationPending() {
  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/">Home</Link>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '700px', margin: '80px auto', textAlign: 'center'}}>
          <div style={{fontSize: '120px', marginBottom: '30px'}}>⏳</div>

          <h1 style={{marginBottom: '20px', fontSize: '36px'}}>
            Verification In Progress
          </h1>

          <p style={{fontSize: '18px', color: '#666', marginBottom: '40px'}}>
            Thank you for submitting your registration! Your documents are being reviewed by our admin team.
          </p>

          <div className="card" style={{textAlign: 'left', marginBottom: '30px'}}>
            <div className="card-header">What happens next?</div>
            <div className="card-body">
              <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                <div style={{fontSize: '30px', marginRight: '15px'}}>1️⃣</div>
                <div>
                  <h3 style={{marginBottom: '5px'}}>Document Review</h3>
                  <p>Our team will verify your identity and property documents within 24-48 hours.</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                <div style={{fontSize: '30px', marginRight: '15px'}}>2️⃣</div>
                <div>
                  <h3 style={{marginBottom: '5px'}}>Email Notification</h3>
                  <p>You'll receive an email once your account is approved or if we need additional information.</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start'}}>
                <div style={{fontSize: '30px', marginRight: '15px'}}>3️⃣</div>
                <div>
                  <h3 style={{marginBottom: '5px'}}>Choose Subscription</h3>
                  <p>After approval, you can select a subscription plan and start listing properties immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info" style={{textAlign: 'left'}}>
            <p><strong>💡 Pro Tip:</strong></p>
            <p>
              While you wait, you can explore the platform and see how other properties are listed.
              This will help you create better listings once your account is approved!
            </p>
          </div>

          <div style={{marginTop: '40px'}}>
            <Link to="/renter/search" className="btn btn-outline" style={{marginRight: '15px'}}>
              Browse Properties
            </Link>
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>

          {/* For demo purposes - quick link to next step */}
          <div style={{marginTop: '60px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px'}}>
            <p style={{fontSize: '14px', color: '#856404', marginBottom: '10px'}}>
              <strong>🎨 Wireframe Demo:</strong>
            </p>
            <p style={{fontSize: '14px', color: '#856404', marginBottom: '15px'}}>
              In a real application, you would wait for admin approval. For this demo, click below to simulate approval:
            </p>
            <Link to="/owner/subscription-plans" className="btn btn-success">
              Simulate Approval → Choose Subscription
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerVerificationPending;

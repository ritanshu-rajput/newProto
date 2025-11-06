import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Landing & Auth Pages
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// Owner Pages
import OwnerRegistration from './pages/owner/OwnerRegistration';
import OwnerVerificationPending from './pages/owner/OwnerVerificationPending';
import SubscriptionPlans from './pages/owner/SubscriptionPlans';
import PaymentPage from './pages/owner/PaymentPage';
import AddPropertyPage from './pages/owner/AddPropertyPage';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import OwnerProfile from './pages/owner/OwnerProfile';
import ManageListings from './pages/owner/ManageListings';

// Renter Pages
import RenterRegistration from './pages/renter/RenterRegistration';
import RenterDashboard from './pages/renter/RenterDashboard';
import PropertySearch from './pages/renter/PropertySearch';
import PropertyDetails from './pages/renter/PropertyDetails';
import RenterProfile from './pages/renter/RenterProfile';
import VerificationPrompt from './pages/renter/VerificationPrompt';
import RenterVerification from './pages/renter/RenterVerification';

// Shared Pages
import MessagingPage from './pages/shared/MessagingPage';
import RenterProfileView from './pages/shared/RenterProfileView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing & Auth */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Owner Routes */}
        <Route path="/owner/register" element={<OwnerRegistration />} />
        <Route path="/owner/verification-pending" element={<OwnerVerificationPending />} />
        <Route path="/owner/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/owner/payment" element={<PaymentPage />} />
        <Route path="/owner/add-property" element={<AddPropertyPage />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/profile" element={<OwnerProfile />} />
        <Route path="/owner/manage-listings" element={<ManageListings />} />

        {/* Renter Routes */}
        <Route path="/renter/register" element={<RenterRegistration />} />
        <Route path="/renter/dashboard" element={<RenterDashboard />} />
        <Route path="/renter/search" element={<PropertySearch />} />
        <Route path="/renter/property/:id" element={<PropertyDetails />} />
        <Route path="/renter/profile" element={<RenterProfile />} />
        <Route path="/renter/verification-prompt" element={<VerificationPrompt />} />
        <Route path="/renter/verification" element={<RenterVerification />} />

        {/* Shared Routes */}
        <Route path="/messages" element={<MessagingPage />} />
        <Route path="/renter-profile/:id" element={<RenterProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;

# RentEasy Platform - Wireframe Documentation

This is a comprehensive wireframe/prototype for the RentEasy rental property platform, built using React and React Router.

## Project Overview

RentEasy is a platform connecting property owners/estate agents with renters, featuring verification systems, subscription plans, and direct messaging capabilities.

## Features Implemented

### Authentication & Landing
- **Landing Page** (`/`) - Marketing homepage with features and call-to-actions
- **Sign Up Page** (`/signup`) - User type selection (Owner/Renter)
- **Login Page** (`/login`) - Authentication for both user types
- **Forgot Password** (`/forgot-password`) - Password reset flow

### Owner/Estate Agent Journey

#### Registration & Onboarding
- **Owner Registration** (`/owner/register`) - Complete registration form with document uploads
- **Verification Pending** (`/owner/verification-pending`) - Status page while admin reviews documents

#### Subscription Management
- **Subscription Plans** (`/owner/subscription-plans`) - Three-tier pricing (Basic, Standard, Premium)
- **Payment Page** (`/owner/payment`) - Stripe integration mockup

#### Property Management
- **Add Property** (`/owner/add-property`) - Comprehensive property listing form with:
  - Basic details (type, location, bedrooms, bathrooms)
  - Pricing (rent, maintenance, parking, utilities)
  - Amenities selection
  - Image uploads
  - AI-powered description generator
  - Ideal renter profile creator
- **Owner Dashboard** (`/owner/dashboard`) - Stats, recent interests, active properties
- **Manage Listings** (`/owner/manage-listings`) - View and edit all properties
- **Owner Profile** (`/owner/profile`) - Account settings, subscription, and security

### Renter Journey

#### Registration & Verification
- **Renter Registration** (`/renter/register`) - Simple registration form
- **Verification Prompt** (`/renter/verification-prompt`) - Upgrade prompt when contact limit reached
- **Renter Verification** (`/renter/verification`) - Two-step verification process:
  - Document upload (ID, pay slips, bank statements)
  - Payment (£6.99 one-time fee)

#### Property Search & Contact
- **Property Search** (`/renter/search`) - Advanced search with filters:
  - Location, property type, bedrooms, price range
  - Amenities filtering
  - Property cards with key details
- **Property Details** (`/renter/property/:id`) - Detailed property view with:
  - Image gallery
  - Key features and amenities
  - Additional charges breakdown
  - Property description
  - Ideal renter profile
  - Owner information
  - Contact functionality
- **Renter Dashboard** (`/renter/dashboard`) - Personalized dashboard with:
  - Verification status
  - Quick stats (views, saved properties, contacts)
  - Recent conversations
  - Saved properties
- **Renter Profile** (`/renter/profile`) - Personal settings and verification status

### Shared Features
- **Messaging Page** (`/messages`) - Two-panel messaging interface with:
  - Conversation list
  - Message thread
  - Real-time message display
- **Renter Profile View** (`/renter-profile/:id`) - Owner's view of renter details:
  - Personal information
  - Rental requirements
  - Verification status
  - Document access
  - Rental history
  - Contact information

## User Journeys Covered

### Owner User Journey
1. Registration with document verification
2. Admin approval notification
3. Subscription plan selection and payment
4. Property listing creation (with AI assistance)
5. Managing active listings
6. Viewing renter interest and profiles
7. Direct messaging with renters
8. Profile and subscription management

### Renter User Journey
1. Free registration and account creation
2. Browse all properties (no restrictions)
3. Contact up to 5 owners for free
4. Optional verification for unlimited contacts:
   - Upload verification documents
   - One-time payment of £6.99
   - Admin review and approval
5. Property search with advanced filters
6. Save favorite properties
7. Direct messaging with property owners
8. Profile management

## Technical Stack

- **React 19** - UI library
- **React Router DOM 7** - Routing
- **Vite 6** - Build tool
- **CSS** - Styling (custom wireframe styles in App.css)

## File Structure

```
src/
├── App.jsx                          # Main app with routes
├── App.css                          # Global wireframe styles
├── main.jsx                         # Entry point
├── pages/
│   ├── LandingPage.jsx             # Home/landing page
│   ├── SignUpPage.jsx              # User type selection
│   ├── LoginPage.jsx               # Authentication
│   ├── ForgotPasswordPage.jsx      # Password reset
│   ├── owner/
│   │   ├── OwnerRegistration.jsx
│   │   ├── OwnerVerificationPending.jsx
│   │   ├── SubscriptionPlans.jsx
│   │   ├── PaymentPage.jsx
│   │   ├── AddPropertyPage.jsx
│   │   ├── OwnerDashboard.jsx
│   │   ├── OwnerProfile.jsx
│   │   └── ManageListings.jsx
│   ├── renter/
│   │   ├── RenterRegistration.jsx
│   │   ├── VerificationPrompt.jsx
│   │   ├── RenterVerification.jsx
│   │   ├── PropertySearch.jsx
│   │   ├── PropertyDetails.jsx
│   │   ├── RenterDashboard.jsx
│   │   └── RenterProfile.jsx
│   └── shared/
│       ├── MessagingPage.jsx
│       └── RenterProfileView.jsx
```

## Key Features Demonstrated

### 1. Navigation Flow
- Seamless navigation between all pages
- Breadcrumbs and back buttons
- Consistent header navigation based on user type

### 2. Form Handling
- Multi-step forms (verification, payment)
- File upload interfaces
- Form validation (visual mockup)
- Dynamic form fields

### 3. State Management (Mockup)
- User authentication state
- Verification status
- Contact limits tracking
- Subscription status

### 4. UI Components
- Cards for content organization
- Modal dialogs (contact owner, AI generator)
- Badges (verified status)
- Alerts and notifications
- Stats cards with metrics
- Property cards with hover effects
- Filters and search interfaces
- Messaging interface (two-panel)
- Progress indicators (step forms)
- Tables for data display

### 5. Responsive Design
- Mobile-friendly layouts
- Grid systems (2, 3, 4 column)
- Flexible card layouts
- Responsive navigation

### 6. Interactive Elements
- Buttons with hover states
- Form inputs with validation
- Toggleable tabs
- Collapsible sections
- Pagination
- Sorting and filtering

## Running the Application

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Color Scheme

- Primary: `#3498db` (Blue)
- Success: `#27ae60` (Green)
- Warning: `#f39c12` (Orange)
- Danger: `#e74c3c` (Red)
- Secondary: `#95a5a6` (Gray)
- Background: `#f5f5f5` (Light Gray)
- Cards: `#ffffff` (White)
- Text: `#333333` (Dark Gray)
- Muted: `#666666` (Medium Gray)

## Mock Data

All pages use mock data for demonstration purposes:
- Sample properties with details
- Mock user profiles
- Example conversations
- Dummy subscription plans
- Sample verification documents

## Next Steps for Full Implementation

1. **Backend Integration**
   - API endpoints for all CRUD operations
   - User authentication with JWT
   - File upload to cloud storage
   - Real-time messaging with WebSockets
   - Payment gateway integration (Stripe)

2. **Database Schema**
   - Users (owners and renters)
   - Properties
   - Subscriptions
   - Messages
   - Verification documents
   - Rental history

3. **Enhanced Features**
   - Real search and filtering
   - Image gallery with lightbox
   - Map integration for locations
   - Email notifications
   - SMS verification
   - Credit check integration (future phase)
   - Advanced analytics for owners
   - Property recommendations for renters

4. **Security**
   - User authentication and authorization
   - Document encryption
   - Input sanitization
   - Rate limiting
   - CSRF protection

5. **Performance**
   - Image optimization
   - Lazy loading
   - Code splitting
   - Caching strategies
   - CDN for static assets

## Notes

- This is a wireframe/prototype for demonstrating the user flow and UI/UX
- All functionality is mocked and would need backend integration
- Payment processing shown is for demonstration only
- File uploads are visual mockups only
- Real-time features (messaging) would require WebSocket implementation
- AI description generator is a UI mockup (would need OpenAI/similar integration)

## Page Count Summary

Total pages created: **26 pages**

- Landing & Auth: 4 pages
- Owner Journey: 8 pages
- Renter Journey: 7 pages
- Shared Pages: 2 pages
- Supporting Components: 5 pages

All pages are fully functional with proper navigation and realistic mockup data.

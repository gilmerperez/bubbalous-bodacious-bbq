# Bubbalou's Bodacious BBQ - Website Specification Sheet

## Project Overview

**Application Name:** Bubbalou's Bodacious BBQ Website

**Purpose of Specification Sheet:**
This specification provides a comprehensive roadmap for developing a modern, user-friendly website that accurately represents Bubbalou's Bodacious BBQ's authentic Southern BBQ experience while providing all necessary information for customers to visit and order.

**Target Users:**

- Local Orlando residents and visitors looking for authentic Southern BBQ
- Existing loyal customers who want to check menu, hours, and order online
- New customers discovering the restaurant through search or recommendations
- Event planners and businesses seeking catering services

**Desired User Experience:**

- Clean, modern website that reflects the authentic Southern BBQ atmosphere
- Easy navigation to find menu items, hours, location, and ordering options
- Mobile-friendly design for customers on-the-go
- Clear information about party packs and catering services
- Professional appearance that builds trust and encourages visits

**Core Problem Solved:**

- Replaces outdated, unattractive current website with modern, user-friendly design
- Provides comprehensive restaurant information in an accessible format
- Streamlines the customer journey from discovery to ordering
- Showcases the restaurant's authentic Southern BBQ heritage and quality

## Technical Stack

**Frontend:**

- HTML5 with semantic markup
- CSS3 with Flexbox/Grid layouts
- JavaScript (ES6+) for interactivity
- React 19+ for component-based architecture
- Vite for build tooling and development server

**Styling & UI:**

- CSS Modules for component-scoped styling
- Google Fonts: Inter (body text) and Oswald (headings)
- Responsive design with 3 breakpoints (desktop, tablet, mobile)
- Light/Dark mode support with CSS custom properties
- Portal-based modals for ordering system
- Sticky header with scroll-based visibility
- Mobile-responsive sidebar navigation

**State Management:**

- React component state for UI interactions
- Local state for cart management, modals, and theme switching
- localStorage for theme persistence and user preferences
- No global state management required (Redux/Context not needed)

**Data Management:**

- JSON files for static data (menu, party packs)
- No database required
- No authentication system needed
- Static data loaded from JSON files

**Advanced UI Components:**

- Interactive cart with real-time updates
- Comprehensive ordering modals with customization options
- Form validation and error handling
- Accessibility features (ARIA labels, keyboard navigation)
- Theme toggle with system preference detection

**Development Tools:**

- ESLint for code quality
- Vite for fast development and building
- React Router for client-side routing
- React Portal for modal management

**Performance Optimizations:**

- Lazy loading for images
- Optimized bundle with Vite
- Responsive images with AVIF format
- Efficient React rendering with minimal re-renders

**Deployment:**

- Render for hosting
- Static site deployment

**Security:**

- CAPTCHA on contact form
- Input validation and sanitization
- HTTPS encryption
- XSS prevention through React's built-in protections

## UI/UX Design Guidelines

### Layout and Responsiveness

**Grid/Flexbox Layout:**

- CSS Grid for main page layouts
- Flexbox for component-level layouts
- 12-column responsive grid system

**Responsive Breakpoints:**

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

### Typography

**Font Families:**

- Primary (Body): Inter, Arial, sans-serif
- Headings: Oswald, Arial, sans-serif

**Font Sizes:**

- Heading 1: 32px (Oswald)
- Heading 2: 28px (Oswald)
- Heading 3: 24px (Oswald)
- Body: 16px (Inter)
- Small text: 14px (Inter)

**Font Weights:**

- Light: 300
- Regular: 400 (normal text)
- Medium: 500 (important text)
- Bold: 700 (headings and titles)

### Colors

**Light Mode:**

- Primary: `hsl(3, 76%, 50%)` (BBQ red)
- Primary Dark: `hsl(3, 76%, 40%)`
- Background: `hsl(0, 0%, 95%)`
- Header/Footer Background: `hsl(0, 0%, 100%)`
- Text Primary: `hsl(0, 0%, 0%)`
- Text Secondary: `hsl(0, 0%, 20%)`

**Dark Mode:**

- Primary: `hsl(3, 76%, 50%)` (BBQ red)
- Primary Dark: `hsl(3, 76%, 40%)`
- Background: `hsl(0, 0%, 5%)`
- Header/Footer Background: `hsl(0, 0%, 2.5%)`
- Text Primary: `hsl(0, 0%, 100%)`
- Text Secondary: `hsl(0, 0%, 80%)`

**Button States:**

- Normal: Primary color with hover effects
- Hover: Slightly darker shade
- Active: Darker shade for pressed state
- Disabled: Muted gray with reduced opacity

### Images and Icons

**Image Requirements:**

- Format: AVIF for optimal performance
- Alt tags for all images (accessibility)
- Responsive images with multiple sizes
- Compression: Optimized for web delivery

**Image Categories:**

- Hero banner images (restaurant exterior, BBQ food)
- Menu item photos (popular dishes)
- Gallery images (restaurant atmosphere, food preparation)
- Party pack presentation images

### Text Content

**Tone:** Friendly, authentic, Southern hospitality

- Professional yet approachable
- Emphasizes tradition and quality
- Welcoming to both regulars and newcomers

**Content Sources:**

- Based on current website: https://kirkman.bubbalous.com/
- Enhanced with modern copywriting
- Focus on Southern BBQ authenticity

## User Roles and Permissions

**Visitor (Public Access):**

- Browse all public pages
- View menu and party packs
- Access contact information and hours
- Submit contact form
- View photo gallery

**No Authentication Required:**

- All features available to public visitors
- No user accounts or login system
- No admin panel or content management

## Interactive Features

### Ordering System

**Order Modal:**

- Comprehensive item customization with multiple options
- Support for sauces, meats, sides, drinks, proteins, dressings, wing sauces
- Special instructions text area for custom requests
- Quantity management with increment/decrement controls
- Real-time price calculation and display
- Food allergy warnings and legal disclaimers
- Form validation and error handling

**Shopping Cart:**

- Real-time cart management with item count display
- Visual cart indicator with bubble count
- Dropdown alerts for cart actions
- Item removal and quantity modification
- Cart persistence during user session
- Empty cart state handling

**Checkout Process:**

- Complete order flow with customer information collection
- Tip calculation with percentage options (10%, 15%, 20%)
- Tax calculation (6% Florida sales tax)
- Order summary with detailed item breakdown
- Special requests and order instructions
- Estimated wait time calculation
- Mock checkout completion with console logging

### Theme Management

**Dark/Light Mode Toggle:**

- User preference with localStorage persistence
- System theme detection (respects OS preference)
- Smooth CSS transitions for theme switching
- Proper ARIA labels for accessibility
- Theme toggle available in both desktop and mobile layouts
- Automatic theme switching based on system changes

### Mobile Navigation

**Responsive Sidebar:**

- Hamburger menu with spin animation
- Portal-based mobile navigation overlay
- Touch-friendly navigation items with icons
- Theme toggle in mobile sidebar
- Legal pages access in mobile menu
- Smooth open/close animations

### Advanced UI Components

**Sticky Header:**

- Scroll-based visibility (hides on scroll down, shows on scroll up)
- Smooth transform animations
- Mobile-optimized layout with phone call button
- Logo and navigation preservation

**Portal-Based Modals:**

- Order customization modal with backdrop
- Checkout modal with overlay
- Proper focus management and escape key handling
- Click-outside-to-close functionality
- Body scroll prevention when modals are open

## Core Features and User Flows

### Homepage

**User Flow:**

1. Landing on homepage with hero banner
2. Reading about restaurant history and values
3. Viewing location, hours, and contact info
4. Browsing photo gallery
5. Navigating to other pages via header/footer

**Features:**

- Hero banner with CTA
- About section with restaurant background
- Location and hours information
- Photo gallery with effects
- Quick navigation to key pages

### Menu Page

**User Flow:**

1. Viewing menu banner with popular items
2. Browsing categories (BBQ meats, sides, drinks, etc.)
3. Reading descriptions and prices
4. Making ordering decisions

**Features:**

- Category-based menu organization
- Prices and descriptions for all items
- High-quality food photography
- Easy-to-scan layout

### Order Online Page

**User Flow:**

1. Browsing menu items with detailed descriptions and prices
2. Clicking "Add to Order" opens comprehensive customization modal
3. Selecting customization options (sauces, meats, sides, drinks, proteins, dressings)
4. Adding special instructions and quantity
5. Adding item to cart with real-time count indicator
6. Viewing cart with item count bubble and dropdown alerts
7. Opening checkout modal for order completion
8. Adding customer information (name, phone, special requests)
9. Selecting tip percentage (10%, 15%, 20%)
10. Reviewing complete order summary with tax calculation
11. Completing mock checkout with order details logging
12. Receiving estimated wait time calculation

**Features:**

- Comprehensive mock online ordering system
- Real-time cart management with visual indicators
- Multi-option item customization (sauces, meats, sides, drinks)
- Special instructions and quantity management
- Complete checkout flow with tip and tax calculation
- Customer information collection
- Order summary with detailed breakdown
- Estimated wait time calculation
- Phone number for actual orders
- Catering information and party pack integration

### Party Packs Page

**User Flow:**

1. Browsing available party pack options
2. Reading descriptions and serving sizes
3. Viewing pricing information
4. Contacting for catering orders

**Features:**

- Detailed party pack listings
- Serving size information
- Pricing and variations
- Catering contact information

### Contact Page

**User Flow:**

1. Viewing contact information
2. Filling out contact form
3. Completing CAPTCHA verification
4. Submitting inquiry

**Features:**

- Contact form with CAPTCHA
- Location and hours
- Phone number and address
- Map integration

### Legal Pages

- Privacy Policy
- Terms of Service
- Page Not Found (404)

## Data Flow and Architecture

**Frontend State Management:**

- React component state for UI interactions
- Local state for cart management, modals, and theme switching
- localStorage for theme persistence and user preferences
- No global state management required (Redux/Context not needed)

**Component State Management:**

- **Cart State**: Items, quantities, customizations, and totals
- **Modal State**: Open/close states for ordering and checkout modals
- **Theme State**: Light/dark mode preference with system detection
- **Form State**: Customer information, special instructions, and validation
- **Navigation State**: Mobile menu toggle and active page tracking
- **UI State**: Loading states, error handling, and user feedback

**Data Sources:**

- `src/data/menu.json` - Comprehensive menu items with customization options
- `src/data/partypacks.json` - Party pack offerings and catering information
- Static content in component files
- User preferences stored in localStorage

**State Flow:**

- Parent components manage cart and modal state
- Props drilling for simple data flow between components
- Event handlers for user interactions and state updates
- Local state for UI-only interactions (animations, toggles)
- Persistent state for user preferences (theme, settings)

**No Backend Required:**

- Static site generation
- No server-side processing
- No API calls except for Google Maps
- All state management handled client-side

## API Endpoints

**External APIs:**

- Google Maps API (for location display)
- Environment variable: `VITE_GOOGLE_MAPS_API_KEY`

**No Internal APIs:**

- All data served from static JSON files
- No authentication endpoints
- No database interactions

## Database Schema

**No Database Required**

**JSON Data Structure:**

**Menu Items (`menu.json`):**

```json
{
  "categories": [
    {
      "name": "BBQ Meats",
      "items": [
        {
          "name": "Pulled Pork",
          "price": "$12.99",
          "description": "Slow-smoked pork shoulder, hand-pulled and served with our signature BBQ sauce",
          "image": "pulled-pork-basket.avif"
        }
      ]
    }
  ]
}
```

**Party Packs (`partypacks.json`):**

```json
{
  "packs": [
    {
      "name": "Family Pack",
      "description": "Perfect for family gatherings",
      "servingSize": "Serves 6-8 people",
      "price": "$89.99",
      "includes": ["2 lbs pulled pork", "1 lb brisket", "sides", "dessert"],
      "image": "party-pack-1.avif"
    }
  ]
}
```

## Accessibility Features

**ARIA Implementation:**

- Proper ARIA labels for all interactive elements
- Modal dialogs with proper ARIA attributes (`aria-modal`, `aria-label`)
- Navigation landmarks and roles (`role="banner"`, `role="contentinfo"`)
- Screen reader friendly form labels and descriptions
- Button accessibility with descriptive `aria-label` attributes
- Live regions for dynamic content updates

**Keyboard Navigation:**

- Full keyboard accessibility for all components
- Tab order management for logical navigation flow
- Escape key handling for modal dismissal
- Focus management for dynamic content (modals, dropdowns)
- Keyboard shortcuts for theme toggle and navigation
- Focus indicators for all interactive elements

**Visual Accessibility:**

- High contrast color schemes for both light and dark modes
- Scalable fonts and layouts that work with browser zoom
- Alt text for all images with descriptive content
- Focus indicators with sufficient color contrast
- Responsive design that works across all device sizes
- Clear visual hierarchy with proper heading structure

**Form Accessibility:**

- Proper form labels and field associations
- Error messages with clear, actionable feedback
- Required field indicators and validation
- Input types appropriate for data collection
- Form submission with proper success/error states

**Mobile Accessibility:**

- Touch-friendly interface elements (44px minimum touch targets)
- Mobile-optimized navigation with clear visual feedback
- Responsive design that maintains accessibility on all screen sizes
- Voice-over and screen reader compatibility on mobile devices

## Basic Website Security Checklist

### Rate Limiting & Abuse Protection

- CAPTCHA on contact form to prevent bot submissions
- Form validation on client-side with comprehensive error handling
- Input sanitization for all user inputs
- No server-side processing reduces attack surface

### Environment & Secrets

- Google Maps API key stored in `.env` file
- `.env` file included in `.gitignore`
- No sensitive data exposed in client-side code
- Static site deployment eliminates server vulnerabilities

### Data Handling

- HTTPS encryption for all data in transit
- Input validation and sanitization on all forms
- XSS prevention through React's built-in protections
- No password storage required (no authentication system)
- Client-side only data processing

### Authentication & Authorization

- No authentication system required
- All content publicly accessible
- Contact form protected with CAPTCHA
- No user accounts or login vulnerabilities
- Static site eliminates authentication attack vectors

### Client-Side Security

- React's built-in XSS protection
- Proper input validation and sanitization
- No eval() or dangerous JavaScript functions
- Content Security Policy ready implementation
- Secure handling of user inputs in forms

### Testing & Monitoring

- Manual testing of all user flows
- Cross-browser compatibility testing
- Mobile responsiveness testing
- Accessibility testing with screen readers
- Performance testing with Lighthouse
- No automated testing required for static site

## Deployment & CI/CD

**Hosting Platform:** Render

- Static site deployment
- Automatic builds from main branch
- Custom domain support

**Deployment Pipeline:**

- Build process: `npm run build`
- Output directory: `dist/`
- No preview environments required

## Testing Strategy

**Manual Testing:**

- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness testing
- Contact form functionality
- Navigation and routing

**No Automated Testing:**

- No unit tests required
- No end-to-end testing
- Focus on manual quality assurance

## Project Structure

```
src/
├── components/
│   ├── Header/
│   └── Footer/
├── pages/
│   ├── Home/
│   ├── Menu/
│   ├── OrderOnline/
│   ├── PartyPacks/
│   ├── Contact/
│   ├── PrivacyPolicy/
│   ├── TermsOfService/
│   └── PageNotFound/
├── data/
│   ├── menu.json
│   └── partypacks.json
└── assets/
    └── images/
```

## Key Features Summary

1. **Modern, Responsive Design** - Clean, professional appearance with dark/light mode
2. **Comprehensive Ordering System** - Full-featured ordering with customization options
3. **Interactive Shopping Cart** - Real-time cart management with visual indicators
4. **Advanced UI Components** - Portal-based modals, sticky header, mobile navigation
5. **Comprehensive Menu Display** - Easy-to-browse menu with detailed customization options
6. **Party Pack Showcase** - Detailed catering and party pack information
7. **Contact & Location Info** - Easy access to hours, location, phone with map integration
8. **Photo Gallery** - Visual showcase of restaurant and food
9. **Mobile-First Design** - Optimized for all device sizes with touch-friendly interactions
10. **Fast Loading** - Optimized images (AVIF format) and efficient code
11. **Accessibility** - WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
12. **Theme Management** - User preference with system detection and localStorage persistence

## Performance Considerations

**Loading Performance:**

- Optimized images in AVIF format for faster loading
- Lazy loading for non-critical images
- Minimal JavaScript bundle size with Vite optimization
- Fast initial page load with static site generation
- Efficient CSS with minimal unused styles

**Runtime Performance:**

- Efficient React rendering with minimal re-renders
- Smooth animations and transitions (60fps)
- Real-time cart updates without performance impact
- Instant theme switching with CSS custom properties
- Optimized state management without unnecessary updates

**User Experience Performance:**

- Smooth scrolling and navigation
- Fast modal open/close animations
- Responsive design without layout shifts
- Touch-friendly interactions on mobile devices
- Keyboard navigation with immediate feedback

**Browser Support:**

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- CSS Custom Properties (CSS Variables) support
- ES6+ JavaScript features
- React 19+ with modern hooks
- CSS Grid and Flexbox layouts
- AVIF image format support

## Success Metrics

**User Experience:**

- Intuitive ordering flow completion rate
- Mobile responsiveness across all devices
- Fast loading times (< 3 seconds)
- Accessibility compliance (WCAG 2.1 AA)
- Cross-browser compatibility

**Technical Performance:**

- Lighthouse score > 90
- Core Web Vitals compliance
- Zero JavaScript errors
- Optimized bundle size
- Efficient rendering performance

**Business Goals:**

- Professional appearance that builds customer trust
- Easy navigation and information access
- Clear call-to-actions for ordering and contact
- Accurate representation of restaurant atmosphere and quality
- Mobile-first design for on-the-go customers
- Comprehensive ordering system that demonstrates restaurant capabilities

## References

- https://bubbalous.com/
- https://kirkman.bubbalous.com/

---

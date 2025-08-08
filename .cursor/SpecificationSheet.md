# Bubbalou's Bodacious BBQ - Website Specification Sheet

## Project Overview

**Application Name:** Bubbalou's Bodacious BBQ Website

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
- React for component-based architecture
- Vite for build tooling and development server

**Styling & UI:**

- CSS Modules for component-scoped styling
- Google Fonts: Inter (body text) and Oswald (headings)
- Responsive design with 3 breakpoints (desktop, tablet, mobile)
- Light/Dark mode support with CSS custom properties

**Data Management:**

- JSON files for static data (menu, party packs)
- No database required
- No authentication system needed

**Development Tools:**

- ESLint for code quality
- Vite for fast development and building
- React Router for client-side routing

**Deployment:**

- Render for hosting
- Static site deployment

**Security:**

- CAPTCHA on contact form
- Input validation and sanitization
- HTTPS encryption

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

1. Viewing ordering options
2. Mock checkout process
3. Contact information for orders

**Features:**

- Mock online ordering system
- Phone number for actual orders
- Ordering instructions
- Catering information

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
- No global state management required
- Static data loaded from JSON files

**Data Sources:**

- `src/data/menu.json` - Menu items and categories
- `src/data/partypacks.json` - Party pack offerings
- Static content in component files

**No Backend Required:**

- Static site generation
- No server-side processing
- No API calls except for Google Maps

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

## Basic Website Security Checklist

### Rate Limiting & Abuse Protection

- CAPTCHA on contact form to prevent bot submissions
- Form validation on client-side

### Environment & Secrets

- Google Maps API key stored in `.env` file
- `.env` file included in `.gitignore`
- No sensitive data exposed in client-side code

### Data Handling

- HTTPS encryption for all data in transit
- Input validation and sanitization on contact form
- No password storage required

### Authentication & Authorization

- No authentication system required
- All content publicly accessible
- Contact form protected with CAPTCHA

### Testing & Monitoring

- Manual testing of all user flows
- No automated testing required
- Basic error handling for form submissions

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

1. **Modern, Responsive Design** - Clean, professional appearance
2. **Comprehensive Menu Display** - Easy-to-browse menu with categories
3. **Party Pack Showcase** - Detailed catering and party pack information
4. **Contact & Location Info** - Easy access to hours, location, phone
5. **Photo Gallery** - Visual showcase of restaurant and food
6. **Mobile-First Design** - Optimized for all device sizes
7. **Fast Loading** - Optimized images and efficient code
8. **Accessibility** - Alt tags, semantic HTML, keyboard navigation

## Success Metrics

- Professional appearance that builds customer trust
- Easy navigation and information access
- Mobile-friendly experience
- Fast loading times
- Clear call-to-actions for ordering and contact
- Accurate representation of restaurant atmosphere and quality

---

This specification provides a comprehensive roadmap for developing a modern, user-friendly website that accurately represents Bubbalou's Bodacious BBQ's authentic Southern BBQ experience while providing all necessary information for customers to visit and order.

# TravelBloom - Travel Recommendation Website

A modern, responsive travel recommendation platform built with HTML, CSS, and JavaScript. This project showcases destinations including beaches, temples, and countries with real-time local time information.

## 🌟 Features

- **Responsive Navigation Bar** with Home, About Us, and Contact Us links
- **Smart Search Functionality** supporting multiple keyword variations
- **Dynamic Content Display** with beautiful card-based layouts
- **Real-Time Time Zones** showing current local time for each destination
- **Social Media Integration** with icon links
- **Contact Form** for user inquiries
- **Team Showcase** on the About Us page

## 📋 Project Structure

```
.
├── travel_recommendation.html  # Main home page
├── about.html                  # About Us page with team info
├── contact.html               # Contact Us page with form
├── styles.css                 # Complete styling for all pages
├── script.js                  # JavaScript functionality
├── travel_recommendation_api.json  # Travel data (beaches, temples, countries)
└── README.md                  # Project documentation
```

## 🚀 Getting Started

1. Clone or download this repository
2. Open `travel_recommendation.html` in your web browser
3. No server setup required - runs directly in the browser!

## 🔍 How to Use

### Search Functionality

The search bar accepts various keywords:

- **Beaches**: Search for "beach", "beaches", "coast", or "coastal"
- **Temples**: Search for "temple", "temples", "shrine", or "shrines"
- **Countries**: Search for "country", "countries", or specific country names (Australia, Japan, Brazil)

### Navigation

- Click on navigation links to move between pages
- Use the Search button to find recommendations
- Click Clear to reset results and return to the home page

## 📦 Destinations Included

### 🏖️ Beaches (3)

- Bondi Beach, Australia
- Copacabana Beach, Brazil
- Bora Bora, French Polynesia

### 🏛️ Temples (3)

- Angkor Wat, Cambodia
- Golden Temple, India
- Borobudur Temple, Indonesia

### 🌍 Countries with Cities (3 countries, 6 cities)

- **Australia**: Sydney, Melbourne
- **Japan**: Tokyo, Kyoto
- **Brazil**: Rio de Janeiro, São Paulo

## 💻 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Fetch API, async/await, DOM manipulation
- **JSON** - Data storage and retrieval

## ✨ Key JavaScript Features

- Fetch API for asynchronous data loading
- Case-insensitive keyword matching
- Dynamic DOM manipulation
- Timezone-aware time display using `toLocaleString()`
- Event handling for search and clear functionality
- Error handling and user feedback

## 📱 Responsive Design

The website is fully responsive and adapts to:

- Desktop screens (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (< 768px)

## 🎨 Design Highlights

- Modern color scheme with teal (#159895) and dark slate (#2c3e50)
- Smooth transitions and hover effects
- Card-based layout for recommendations
- Hero section with background images
- Social media icon integration

## 📝 Pages Overview

### Home Page (`travel_recommendation.html`)

- Hero section with call-to-action
- Search functionality
- Dynamic results display
- Social media links

### About Us Page (`about.html`)

- Company mission and values
- Team member profiles:
  - John Doe (CEO)
  - Celina Thomas (Team Lead)
  - Mike Tysen (Delivery Head)

### Contact Us Page (`contact.html`)

- Contact form with:
  - Name field
  - Email field
  - Message textarea
  - Submit button

## 🔧 Customization

### Adding New Destinations

Edit `travel_recommendation_api.json` to add new beaches, temples, or countries:

```json
{
  "beaches": [...],
  "temples": [...],
  "countries": [...]
}
```

### Styling

Modify `styles.css` to change:

- Color scheme
- Typography
- Layout and spacing
- Responsive breakpoints

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

This project is part of the IBM Full Stack Developer course - JavaScript Programming Essentials.

## 👨‍💻 Author

Created as part of the IBM Full Stack Developer certification program.

## 🙏 Acknowledgments

- Images courtesy of Unsplash
- Icons created with SVG
- Course materials from IBM Skills Network

---

**Note**: This is an educational project demonstrating JavaScript fundamentals including DOM manipulation, Fetch API, and responsive web design.

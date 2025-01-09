# Animated Course Cards

A modern, interactive course explorer built with Next.js featuring stunning card animations and transitions using GSAP and Framer Motion.

## Features

- 🎨 Beautiful animated course cards with smooth transitions
- 🔄 Interactive card expansion with circular reveal animation
- 📱 Responsive design with mobile-friendly layout
- 🎭 Advanced animations using GSAP and Framer Motion
- 🖼️ Dynamic tech icons with hover effects
- 🎯 Smooth text rotations and transformations

## Tech Stack

- **Next.js** - React framework for production
- **Tailwind CSS** - For styling and responsive design
- **GSAP** - For advanced animations
- **Framer Motion** - For layout animations and transitions
- **TypeScript** - For type safety
- **Custom Fonts** - Nohemi Bold for numbers

## Implementation Details

The project showcases advanced animation techniques:

1. **Card Expansion**
   - Circular reveal animation using clip-path
   - Smooth transitions for card width and height
   - Dynamic content repositioning

2. **Text Animations**
   - Vertical to horizontal text transformation
   - Number scaling and positioning
   - Smooth opacity transitions

3. **Icon Animations**
   - Dynamic icon loading with fallback
   - Hover and tap effects
   - Smooth entry/exit animations

## Project Structure

```
animated-cards/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   └── course-card.tsx  # Core card component
└── images/
    ├── react.png
    ├── tools.png
    ├── vue.png
    └── design.png
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/manish0444/animated-cards.git
   cd animated-cards
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Required Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "gsap": "^3.12.0",
    "framer-motion": "^10.0.0",
    "@types/react": "latest",
    "@types/node": "latest",
    "tailwindcss": "^3.0.0",
    "typescript": "latest"
  }
}
```

## Key Features Explained

### Card Animation System
The card animation system uses a combination of GSAP and Framer Motion:
- GSAP handles complex animations like circular reveals and text rotations
- Framer Motion manages layout transitions and hover effects
- Custom animation timing functions for smooth transitions

### Responsive Design
- Cards adapt to different screen sizes
- Maintains animation quality across devices
- Optimized performance for mobile devices

### Tech Icons
- Dynamic loading of technology icons
- Fallback text display if images fail to load
- Smooth hover animations

## Contributing

Feel free to submit issues and enhancement requests!

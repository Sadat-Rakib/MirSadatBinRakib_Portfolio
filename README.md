# 3D Portfolio | Mir Sadat Bin Rakib

A stunning, interactive 3D portfolio website showcasing AI-driven full stack development projects, startup experience, and creative AI innovation. Built with React, Three.js, Tailwind CSS, and Vite for maximum performance.

**Live Site:** [Mir Sadat Bin Rakib | Portfolio](https://mir-sadat-bin-rakib-portfolio.web.app)

## Overview

This portfolio combines cutting-edge 3D graphics with modern web development to create an immersive, engaging experience. It demonstrates expertise in AI engineering, full stack development, and creative AI product building through interactive projects, detailed case studies, and dynamic 3D models.

**Key Metrics:**
- 70% increase in customer engagement
- 9% conversion rate boost
- 35% API response time reduction
- 99.8% uptime infrastructure
- $40K+ incremental revenue impact

## Tech Stack

- **Framework:** React (Vite)
- **3D Graphics:** Three.js for interactive 3D models
- **Styling:** Tailwind CSS with PostCSS
- **Build Tool:** Vite for fast development and production builds
- **Linting:** ESLint for code quality
- **Package Manager:** npm

## Project Structure

```
3D-PORTFOLIO/
├── src/
│   ├── constants/
│   │   └── index.js              # Constants and configuration
│   ├── hooks/
│   │   └── useAlert.js           # Custom alert hook
│   ├── models/                   # Three.js 3D models
│   │   ├── Bird.jsx              # 3D bird animation
│   │   ├── Fox.jsx               # 3D fox model
│   │   ├── index.js              # Models index
│   │   ├── Island.jsx            # 3D island environment
│   │   ├── Plane.jsx             # 3D plane model
│   │   └── Sky.jsx               # 3D sky background
│   ├── pages/                    # Route pages
│   │   ├── About.jsx             # About page with experience
│   │   ├── Contact.jsx           # Contact form page
│   │   ├── Home.jsx              # Hero landing page
│   │   ├── Projects.jsx          # Projects showcase
│   │   └── index.js              # Pages index
│   ├── App.jsx                   # Root app component
│   ├── index.css                 # Global styles
│   ├── main.jsx                  # Entry point
├── public/                       # Static assets and media
├── index.html                    # Main HTML template
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── vite.config.js                # Vite build configuration
├── .eslintrc.cjs                 # ESLint rules
├── .gitignore                    # Git ignore patterns
└── README.md                     # This file
```

## Key Features

- **Interactive 3D Models:** Animated 3D graphics with Three.js including bird, fox, island, plane, and sky elements
- **Responsive Design:** Fully responsive layout optimized for desktop, tablet, and mobile devices
- **High Performance:** Built with Vite for ultra-fast development and production builds
- **Modern UI:** Clean, professional design with Tailwind CSS utility classes
- **Dynamic Pages:**
  - **Home:** Engaging 3D hero section with introduction and navigation
  - **About:** Professional background, skills, and experience timeline with verified metrics
  - **Projects:** Detailed showcase of AI-driven projects with performance metrics and case studies
  - **Contact:** Interactive contact form with form validation and feedback
- **Custom Hooks:** Reusable alert notifications with useAlert hook
- **SEO Optimized:** Proper meta tags and semantic HTML structure
- **Accessibility:** WCAG compliant design with keyboard navigation support

## Pages Overview

### Home
Interactive landing page featuring 3D models, hero greeting, and call-to-action buttons to explore projects and get in touch.

### About
Comprehensive about section displaying:
- AI Full Stack Developer, AI Prompt Engineer, Creative AI Founder profile
- Collaboration with leading tech firms and institutions since 2023
- Key achievements: 15% research throughput improvement, 70% customer engagement increase, 9% conversion boost
- Infrastructure supporting 1,500+ users with 99.8% uptime
- $10M+ investor commitments

### Projects
Showcases impactful work across:
- **Enterprise AI Systems** (AfterQuery): 15% research throughput improvement
- **E-commerce Platforms** (Daylily AI): 70% repeat visitor increase, $40K+ revenue impact
- **Edtech Infrastructure** (Velric): 1,500+ users, 99.8% uptime, 3-week launch
- **AI Research** (Algoverse, Harvard): Cutting-edge LLM and MLOps contributions

### Contact
Interactive contact page with form, social media links, and email integration for inquiries.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sadat-Rakib/3D-Portfolio.git
cd 3D-Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Fix ESLint issues automatically
npm run lint --fix
```

## Development Workflow

### Adding New 3D Models

1. Create a new component in `src/models/` (e.g., `NewModel.jsx`)
2. Use Three.js to define the geometry, materials, and animations
3. Export the component
4. Import and use in your page components

### Creating New Pages

1. Create a new component in `src/pages/` (e.g., `NewPage.jsx`)
2. Add routing logic in `App.jsx`
3. Import and implement navigation links
4. Style using Tailwind CSS utility classes

### Customizing Styles

- Global styles: Edit `src/index.css`
- Tailwind configuration: Modify `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in JSX

### Using Custom Hooks

The `useAlert` hook provides reusable alert functionality:
```jsx
import { useAlert } from './hooks/useAlert';

const MyComponent = () => {
  const { alert, showAlert } = useAlert();
  
  return (
    <>
      {alert.show && <div>{alert.message}</div>}
      <button onClick={() => showAlert('Success!')}>
        Show Alert
      </button>
    </>
  );
};
```

## Performance Optimization

- **Vite:** Lightning-fast build times and hot module replacement
- **Code Splitting:** Automatic code splitting for faster initial loads
- **Tree Shaking:** Unused code removal for smaller bundle sizes
- **Image Optimization:** Efficient asset handling in the public folder
- **PostCSS:** Optimized CSS processing and autoprefixing
- **Three.js Optimization:** Efficient 3D rendering with proper geometry management

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Firebase Hosting (Recommended)

1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

2. Build the project
```bash
npm run build
```

3. Initialize and deploy
```bash
firebase init hosting
firebase deploy
```

### Deploy to Vercel

1. Connect GitHub repository to Vercel
2. Vercel automatically detects Vite configuration
3. Deploy happens automatically on each push

### Deploy to Netlify

1. Connect GitHub repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy automatically on push

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License. See LICENSE file for details.

## Contact & Social

- **Portfolio:** [Mir Sadat Bin Rakib Portfolio](https://mir-sadat-bin-rakib-portfolio.web.app)
- **GitHub:** [@Sadat-Rakib](https://github.com/Sadat-Rakib)
- **LinkedIn:** [Mir Sadat Bin Rakib](https://linkedin.com/in/mir-sadat-bin-rakib)
- **Email:** mirsadatbinrakib01@gmail.com
- **Twitter:** [@msbr_dev](https://twitter.com/msbr_dev)

## Project Highlights

- **AI Powered Solutions:** Built and shipped AI-driven full stack solutions
- **Research Collaboration:** Worked with Stanford, UC Berkeley, Cornell, and Meta AI
- **Enterprise Impact:** 15% research throughput improvement, 70% customer engagement increase
- **Scalable Infrastructure:** Supporting 1,500+ users with 99.8% uptime
- **Revenue Generation:** $40K+ incremental revenue from platform deployments
- **Investor Confidence:** Helped secure $10M+ through rapid prototyping and validation

## Acknowledgments

- **Three.js Community:** For the incredible 3D graphics library
- **React Team:** For the powerful component framework
- **Tailwind Labs:** For the utility-first CSS framework
- **Vite Team:** For the blazingly fast build tool
- **All Contributors:** Who have helped shape this portfolio

## Roadmap

- Add more 3D interactive elements
- Implement dark mode toggle
- Add blog section for technical articles
- Integrate analytics dashboard
- Mobile app version
- Internationalization (i18n) support

---

**Last Updated:** October 2025
**Version:** 1.0.0
**Status:** Active Development

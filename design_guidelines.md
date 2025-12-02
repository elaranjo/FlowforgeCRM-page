# Flowforge Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS leaders like Linear, Stripe, and Vercel for their minimalist, sophisticated aesthetic. Focus on clean typography, generous whitespace, and purposeful interactions.

## Core Design Elements

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Hierarchy**:
  - Hero headline: text-5xl/text-6xl, font-semibold
  - Section headings: text-3xl/text-4xl, font-semibold
  - Subheadings: text-xl/text-2xl, font-medium
  - Body text: text-base/text-lg, font-normal
  - Feature labels: text-sm, font-medium, uppercase tracking-wide

### Layout System
**Spacing Units**: Use Tailwind units of 4, 8, 12, 16, and 24 consistently
- Section padding: py-16 md:py-24
- Component spacing: gap-8 to gap-12
- Container: max-w-7xl mx-auto px-6

### Component Library

**Navigation**
- Minimal fixed header with logo left, "Try on Telegram" CTA right
- Clean, simple design with subtle backdrop blur on scroll
- Height: h-16 to h-20

**Hero Section** (100vh)
- Full-width hero with large background image showing bot/automation workflow visualization
- Center-aligned content with max-w-4xl
- Large headline emphasizing "Bot Secretary" value proposition
- Subheadline explaining capabilities (60-80 characters)
- Primary CTA: "Chat with Flowforge Bot" button with blurred background (links to Telegram)
- Secondary text: "Available on Telegram" with subtle icon

**Features Grid**
- Three-column layout (grid-cols-1 md:grid-cols-3)
- Each feature card includes:
  - Icon placeholder (bot, CRM, workflow automation themes)
  - Bold title
  - 2-3 line description
- Cards with subtle border, p-8 spacing

**Pricing Section**
- Three-column pricing cards (Essential, Pro, Enterprise)
- Card structure:
  - Plan name (text-2xl font-semibold)
  - Brief tagline
  - Feature list with checkmarks (6-8 features each, progressive enhancement)
  - "Start on Telegram" CTA button
- Middle card (Pro) elevated with subtle shadow and border emphasis

**Benefits Section**
- Two-column alternating layout (image + text)
- Benefits: "Instant Customer Support," "Integrated CRM," "Custom Workflows"
- Image placeholders showing bot interactions, CRM dashboard, workflow builder

**CTA Section**
- Full-width section with centered content
- Headline: "Ready to transform your customer support?"
- Large Telegram CTA button
- Supporting text: Bot username display

**Footer**
- Simple, minimal footer with company info, social links
- Single row layout with key links

### Images
**Required Images**:
1. **Hero Background** (1920x1080+): Modern bot/AI interface, chat bubbles, or abstract workflow visualization - professional, tech-forward aesthetic
2. **Feature Illustrations** (3): Bot chat interface, CRM dashboard screenshot, workflow automation diagram
3. **Benefits Section** (3): Product screenshots or stylized representations

### Interactions
- Subtle fade-in animations on scroll for sections (use sparingly)
- Smooth scroll behavior
- Hover states: slight scale (scale-105) on pricing cards
- No complex animations - maintain minimalist approach

### Accessibility
- High contrast text throughout
- Focus states on all interactive elements with ring-2 ring-offset-2
- Semantic HTML structure
- ARIA labels for icon-only elements

### Design Principles
1. **Generous Whitespace**: Never crowd elements - breathing room is essential
2. **Typography-First**: Let content hierarchy speak through scale and weight
3. **Subtle Depth**: Use shadows sparingly, prefer borders and spacing
4. **Purposeful Color**: Minimal accent color usage (Telegram blue for CTAs)
5. **Progressive Disclosure**: Information reveals naturally as user scrolls
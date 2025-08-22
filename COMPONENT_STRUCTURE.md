# Component Structure Documentation

This document describes the refactored component structure of the portfolio application.

## 📁 Folder Structure

```
src/components/
├── ui/                     # Reusable UI components
│   ├── icons/             # SVG icon components
│   │   ├── GitHubIcon.tsx
│   │   ├── LinkedInIcon.tsx
│   │   ├── EmailIcon.tsx
│   │   ├── PhoneIcon.tsx
│   │   └── index.ts
│   ├── AnimatedTitle.tsx   # Animated title with entrance effects
│   ├── AnimatedSubtitle.tsx # Animated subtitle component
│   ├── TypewriterText.tsx  # Typewriter effect component
│   ├── ContactIcon.tsx     # Styled contact icon wrapper
│   ├── ContactItem.tsx     # Contact information item
│   ├── SectionHeader.tsx   # Reusable section header
│   └── index.ts
├── layout/                 # Page layout and section components
│   ├── Intro.tsx          # Hero/intro section
│   ├── Contact.tsx        # Contact section
│   └── index.ts
├── effects/               # Visual effects and animations
│   ├── CodingCursorEffect.tsx      # Cursor particle effect
│   ├── StaticParticlesBackground.tsx # Static background particles
│   ├── InteractiveParticles.tsx    # Interactive 3D particles
│   └── index.ts
├── common/                # Shared utility components
│   ├── FloatingContactBar.tsx # Floating contact buttons
│   ├── ErrorBoundary.tsx      # Error boundary component
│   └── index.ts
└── index.ts               # Main barrel export
```

## 🏗️ Component Categories

### UI Components (`/ui`)

Small, reusable components that focus on presentation and user interface elements:

- **AnimatedTitle**: Main title with complex entrance animations
- **AnimatedSubtitle**: Subtitle with entrance effects
- **TypewriterText**: Typewriter effect for dynamic text
- **ContactIcon**: Styled wrapper for contact icons
- **ContactItem**: Complete contact information display
- **SectionHeader**: Reusable header for sections
- **Icons**: SVG icon components (GitHub, LinkedIn, Email, Phone)

### Layout Components (`/layout`)

Larger components that define page structure and sections:

- **Intro**: Complete hero/introduction section
- **Contact**: Complete contact section with all contact information

### Effects Components (`/effects`)

Components focused on visual effects and animations:

- **CodingCursorEffect**: Interactive cursor particle system
- **StaticParticlesBackground**: Static floating background elements
- **InteractiveParticles**: 3D interactive particle system

### Common Components (`/common`)

Shared utility components used across different sections:

- **FloatingContactBar**: Fixed positioned contact links
- **ErrorBoundary**: Error handling for components

## 🔄 Import Usage

### Recommended Import Patterns

```tsx
// Import specific components from categories
import { Intro, Contact } from './components/layout';
import { StaticParticlesBackground } from './components/effects';
import { AnimatedTitle, SectionHeader } from './components/ui';

// Or import from main barrel export
import { Intro, Contact, AnimatedTitle } from './components';
```

### Icon Usage

```tsx
import { GitHubIcon, EmailIcon } from './components/ui/icons';

// Use with size and className props
<GitHubIcon size={24} className='custom-icon' />;
```

## 🎯 Benefits of This Structure

1. **Separation of Concerns**: Each folder has a specific purpose
2. **Reusability**: UI components can be easily reused
3. **Maintainability**: Easy to locate and modify specific functionality
4. **Scalability**: Clear structure for adding new components
5. **Developer Experience**: Logical organization with barrel exports
6. **Performance**: Easier to implement code splitting by category

## 🔧 Development Guidelines

### When to Create a New Component

- **UI Folder**: When you need a reusable visual element
- **Layout Folder**: When creating a new page section
- **Effects Folder**: When adding visual effects or animations
- **Common Folder**: When creating utilities used across sections

### Component Naming Conventions

- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Icons should end with "Icon" suffix
- Animated components should start with "Animated" prefix

### File Organization

- Each component should have its own file
- Related components can be grouped in subfolders
- Always provide index.ts files for clean imports
- Keep components focused on single responsibility

## 🚀 Future Enhancements

This structure allows for easy addition of:

- New UI components in `/ui`
- Additional page sections in `/layout`
- More visual effects in `/effects`
- Utility components in `/common`
- Feature-specific folders as the app grows

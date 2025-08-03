// Modern, elegant color palette for the portfolio
export const colors = {
  // Background colors
  background: {
    primary: '#0B1426', // Deep Navy
    secondary: '#1A2332', // Rich Midnight
    tertiary: '#2A3441', // Warm Gray
  },

  // Accent colors
  accent: {
    primary: '#97c0ee', // Electric Blue
    secondary: '#7DD3FC', // Soft Cyan
    tertiary: '#A78BFA', // Lavender
  },

  // Text colors
  text: {
    primary: '#FFFFFF', // Pure White
    secondary: '#E2E8F0', // Light Gray
    tertiary: '#94A3B8', // Muted Gray
  },

  // Utility colors with opacity variants
  utils: {
    // Primary accent with opacity
    primaryAccent10: 'rgba(74, 158, 255, 0.1)',
    primaryAccent20: 'rgba(74, 158, 255, 0.2)',
    primaryAccent30: 'rgba(74, 158, 255, 0.3)',
    primaryAccent60: 'rgba(74, 158, 255, 0.6)',

    // Secondary accent with opacity
    secondaryAccent20: 'rgba(125, 211, 252, 0.2)',
    secondaryAccent40: 'rgba(125, 211, 252, 0.4)',

    // Tertiary accent with opacity
    tertiaryAccent25: 'rgba(167, 139, 250, 0.25)',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #0B1426 0%, #1A2332 100%)',
    accent: 'linear-gradient(135deg, #4A9EFF 0%, #7DD3FC 100%)',
  },
} as const;

// HSL color ranges for dynamic color generation
export const hslRanges = {
  // Electric blue to soft cyan range (210-250 hue)
  primaryParticles: {
    hueMin: 210,
    hueMax: 250,
  },
  // Extended blue range for variety
  secondaryParticles: {
    hueMin: 200,
    hueMax: 260,
  },
} as const;

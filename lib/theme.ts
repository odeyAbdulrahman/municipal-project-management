// Sharjah Digital Theme Configuration for Next.js
export const sharjahTheme = {
  colors: {
    primary: {
      50: '#f6faf7',
      100: '#e8f5ea',
      200: '#d4ebd8',
      300: '#b2d9bb',
      400: '#94d1a4',
      500: '#005834', // Main brand green
      600: '#004a2d',
      700: '#003d25',
      800: '#00321e',
      900: '#002818',
    },
    secondary: {
      50: '#fafaf8',
      100: '#f6f6f3',
      200: '#f4f4ef',
      300: '#f1f1ea',
      400: '#eaeae2',
      500: '#e5e5de',
      600: '#d5d6d5',
      700: '#abacae',
      800: '#a7a79e',
      900: '#565e59',
    },
    dark: {
      50: '#f8f9f8',
      100: '#e8eae9',
      200: '#d0d4d1',
      300: '#414a45',
      400: '#2c332f',
      500: '#212529',
      600: '#1a1e21',
      700: '#14171a',
      800: '#0f1113',
      900: '#0a0c0d',
    },
    accent: {
      blue: '#0d6efd',
      orange: '#ff9200',
    },
    semantic: {
      background: '#fafaf8',
      foreground: '#212529',
      muted: '#f1f1ea',
      border: '#e5e5de',
    },
  },
  fonts: {
    cairo: ['Cairo', 'sans-serif'],
    neueFrutigerArabic: ['Neue Frutiger Arabic', 'sans-serif'],
    archivo: ['Archivo', 'sans-serif'],
    sans: ['Cairo', 'Neue Frutiger Arabic', 'Archivo', 'system-ui', 'sans-serif'],
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    heavy: 800,
  },
  spacing: {
    // Common spacing values that work well with the design
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
  },
};

// CSS-in-JS styles for styled-components or emotion
export const sharjahStyles = {
  // Button styles
  primaryButton: {
    backgroundColor: sharjahTheme.colors.primary[500],
    color: sharjahTheme.colors.secondary[50],
    fontFamily: sharjahTheme.fonts.cairo.join(', '),
    fontWeight: sharjahTheme.fontWeights.bold,
    padding: `${sharjahTheme.spacing.md} ${sharjahTheme.spacing.xl}`,
    borderRadius: sharjahTheme.borderRadius.md,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: sharjahTheme.colors.primary[600],
    },
  },
  
  // Card styles
  card: {
    backgroundColor: sharjahTheme.colors.secondary[50],
    border: `1px solid ${sharjahTheme.colors.semantic.border}`,
    borderRadius: sharjahTheme.borderRadius.lg,
    padding: sharjahTheme.spacing.xl,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // Typography styles
  heading: {
    fontFamily: sharjahTheme.fonts.cairo.join(', '),
    fontWeight: sharjahTheme.fontWeights.bold,
    color: sharjahTheme.colors.dark[500],
    lineHeight: 1.2,
  },
  
  body: {
    fontFamily: sharjahTheme.fonts.neueFrutigerArabic.join(', '),
    fontWeight: sharjahTheme.fontWeights.regular,
    color: sharjahTheme.colors.dark[400],
    lineHeight: 1.6,
  },
};

// Utility functions for theme usage
export const getSharjahColor = (colorName: string, shade: string = '500') => {
  const colorMap: Record<string, any> = {
    primary: sharjahTheme.colors.primary,
    secondary: sharjahTheme.colors.secondary,
    dark: sharjahTheme.colors.dark,
    accent: sharjahTheme.colors.accent,
  };
  
  return colorMap[colorName]?.[shade] || sharjahTheme.colors.primary[500];
};

export const getSharjahFont = (fontName: string = 'cairo') => {
  const fontMap: Record<string, string[]> = {
    cairo: sharjahTheme.fonts.cairo,
    neueFrutigerArabic: sharjahTheme.fonts.neueFrutigerArabic,
    archivo: sharjahTheme.fonts.archivo,
    sans: sharjahTheme.fonts.sans,
  };
  
  return fontMap[fontName]?.join(', ') || sharjahTheme.fonts.cairo.join(', ');
};

export default sharjahTheme; 
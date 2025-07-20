# Sharjah Digital Theme Integration

This document describes the integration of the Sharjah Digital theme into the municipal project management application.

## 🎨 Theme Overview

The Sharjah Digital theme has been successfully integrated with the following components:

### **Color Palette**
- **Primary Green**: `#005834` - Main brand color
- **Primary Light**: `#94d1a4` - Light green accent
- **Secondary**: `#fafaf8` to `#565e59` - Neutral grays
- **Dark**: `#212529` to `#414a45` - Text colors
- **Accent Blue**: `#0d6efd` - Link color
- **Accent Orange**: `#ff9200` - Highlight color

### **Typography**
- **Cairo**: Primary Arabic font (Google Fonts)
- **Neue Frutiger Arabic**: Secondary Arabic font
- **Archivo**: Latin font for mixed content

## 📁 Files Updated

### 1. **Tailwind Configuration** (`tailwind.config.ts`)
- Updated with Sharjah Digital color palette
- Added custom font families
- Configured font weights
- Added legacy color support for backward compatibility

### 2. **Global CSS** (`app/globals.css`)
- Added CSS variables for all theme colors
- Updated scrollbar styles with theme colors
- Added glass morphism effects
- Enhanced focus styles
- Added dark mode support

### 3. **Layout** (`app/layout.tsx`)
- Updated to use Cairo font from Google Fonts
- Added font variable support
- Maintained RTL support
- Added `suppressHydrationWarning` for browser extension compatibility

### 4. **Theme Configuration** (`lib/theme.ts`)
- Created comprehensive theme object
- Added utility functions for color and font access
- Included CSS-in-JS styles for styled-components
- Added spacing and border radius configurations

### 5. **Dashboard Updates** (`app/page.tsx`)
- Updated all color references to use new theme
- Replaced legacy Sharjah colors with new palette
- Updated sidebar gradients and backgrounds
- Enhanced visual consistency

### 6. **Theme Demo Component** (`components/sharjah-theme-demo.tsx`)
- Created comprehensive theme showcase
- Demonstrates all colors, fonts, and components
- Shows proper usage patterns
- Includes interactive examples

## 🚀 Usage Examples

### **Colors**
```jsx
// Primary colors
<div className="bg-primary-500 text-white">Main brand color</div>
<div className="bg-primary-400 text-dark-500">Light accent</div>

// Secondary colors
<div className="bg-secondary-50 text-dark-500">Light background</div>
<div className="bg-secondary-900 text-white">Dark secondary</div>

// Accent colors
<div className="bg-accent-blue text-white">Link color</div>
<div className="bg-accent-orange text-white">Highlight color</div>
```

### **Typography**
```jsx
// Font families
<h1 className="font-cairo font-bold text-primary-500">Cairo Font</h1>
<p className="font-neue-frutiger-arabic text-dark-400">Neue Frutiger Arabic</p>
<p className="font-archivo text-dark-300">Archivo Font</p>

// Font weights
<p className="font-regular">Regular 400</p>
<p className="font-medium">Medium 500</p>
<p className="font-bold">Bold 700</p>
<p className="font-heavy">Heavy 800</p>
```

### **Components**
```jsx
// Buttons
<Button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</Button>

// Cards
<Card className="bg-secondary-50 border-secondary-200">
  <CardContent>Card content</CardContent>
</Card>

// Badges
<Badge className="bg-primary-500 text-white">Primary Badge</Badge>
<Badge className="bg-accent-orange text-white">Warning Badge</Badge>
```

## 🎯 Key Features

### **1. RTL Support**
- All components support right-to-left layout
- Proper spacing with `space-x-reverse`
- Arabic text alignment

### **2. Accessibility**
- High contrast ratios
- Proper focus indicators
- Screen reader friendly

### **3. Responsive Design**
- Mobile-first approach
- Flexible grid systems
- Adaptive typography

### **4. Performance**
- Optimized font loading
- CSS variables for efficient theming
- Minimal bundle size impact

## 🔧 Customization

### **Adding New Colors**
```typescript
// In tailwind.config.ts
colors: {
  primary: {
    // ... existing colors
    950: '#001a0f', // New darker shade
  },
}
```

### **Adding New Fonts**
```typescript
// In tailwind.config.ts
fontFamily: {
  'custom-arabic': ['Custom Arabic Font', 'sans-serif'],
}
```

### **Creating Custom Components**
```jsx
// Using theme utilities
import { getSharjahColor, getSharjahFont } from '@/lib/theme'

const CustomComponent = () => (
  <div style={{ 
    backgroundColor: getSharjahColor('primary', '500'),
    fontFamily: getSharjahFont('cairo')
  }}>
    Custom styled component
  </div>
)
```

## 🎨 Design System Principles

### **1. Consistency**
- All colors follow the official Sharjah Digital palette
- Typography hierarchy is maintained
- Spacing and sizing are standardized

### **2. Accessibility**
- WCAG 2.1 AA compliance
- High contrast ratios
- Keyboard navigation support

### **3. Performance**
- Optimized font loading
- Efficient CSS variables
- Minimal JavaScript dependencies

### **4. Maintainability**
- Centralized theme configuration
- Clear naming conventions
- Comprehensive documentation

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **View Theme Demo**
   - Navigate to the theme demo component
   - Explore all available colors and components
   - Test responsive behavior

## 📚 Additional Resources

- [Sharjah Digital Website](https://ds.sharjah.ae/home)
- [Cairo Font (Google Fonts)](https://fonts.google.com/specimen/Cairo)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

When contributing to the theme:

1. Follow the established color palette
2. Maintain RTL support
3. Test accessibility
4. Update documentation
5. Ensure responsive design

## 📄 License

This theme integration follows the same license as the main project.

---

**Note**: This theme is based on the official Sharjah Digital design system and should be used in accordance with their brand guidelines. 
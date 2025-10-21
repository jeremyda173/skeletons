# 💀 Skeleton Loader UI

Beautiful and customizable skeleton loading components for React applications with smooth animations and adaptive design.

![React](https://img.shields.io/badge/React-19.1-blue)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.x-pink)
![Vite](https://img.shields.io/badge/Vite-7.x-purple)

## ✨ Features

- 🎨 **Multiple Skeleton Types** - Text, Avatar, Image, Card, List, Table, Profile, and Form skeletons
- 🌈 **Smooth Animations** - Shimmer and Pulse animation options
- 🎯 **Highly Customizable** - Adjust size, shape, colors, and animation speed
- 📱 **Responsive Design** - Works perfectly on all screen sizes
- 🌓 **Dark Mode Support** - Built-in theme support for light and dark modes
- 🧩 **Modular Architecture** - Clean code organized in logical folders
- 🚀 **Easy to Use** - Simple API with sensible defaults
- ⚡ **Performance Optimized** - Lightweight and efficient

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd skeleton-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Quick Start

```jsx
import { SkeletonCard, SkeletonText, SkeletonAvatar } from './components/skeletons';

function MyComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SkeletonCard variant="with-image" animation="shimmer" />
      ) : (
        <ActualContent />
      )}
    </>
  );
}
```

## 📚 Available Components

### SkeletonText
Display text loading placeholders with customizable lines.

```jsx
<SkeletonText 
  lines={3} 
  width="100%" 
  lastLineWidth="70%"
  lineHeight="16px"
  gap="10px"
  animation="shimmer"
  radius="4px"
/>
```

### SkeletonAvatar
Profile picture placeholders with optional text labels.

```jsx
<SkeletonAvatar 
  size="50px" 
  withText={true}
  textLines={2}
  animation="shimmer"
  shape="circle" // or "square"
/>
```

### SkeletonImage
Image loading placeholders with responsive dimensions.

```jsx
<SkeletonImage 
  width="100%" 
  height="200px"
  radius="8px"
  animation="shimmer"
  aspectRatio="16/9"
/>
```

### SkeletonCard
Complete card layouts for various use cases.

```jsx
<SkeletonCard 
  variant="with-image" // default, with-image, with-avatar, with-footer
  animation="shimmer"
/>
```

### SkeletonList
List item placeholders perfect for feeds and directories.

```jsx
<SkeletonList 
  items={5} 
  variant="with-avatar" // default, with-avatar, simple
  animation="shimmer"
/>
```

### SkeletonTable
Data table loading placeholder with customizable rows and columns.

```jsx
<SkeletonTable 
  rows={5} 
  columns={4}
  columnWidths="1fr 2fr 1fr 1fr"
  animation="shimmer"
/>
```

### SkeletonProfile
User profile loading states with different detail levels.

```jsx
<SkeletonProfile 
  variant="detailed" // default, detailed
  animation="shimmer"
/>
```

### SkeletonForm
Form loading states with input fields and buttons.

```jsx
<SkeletonForm 
  fields={4}
  animation="shimmer"
/>
```

## 🎨 Theming

Customize skeleton colors using the theme provider:

```jsx
import { ThemeProvider } from 'styled-components';

const customTheme = {
  skeletonBg: '#e0e0e0',
  skeletonShimmer: '#f0f0f0',
  background: '#ffffff',
  text: '#333333',
  border: '#e0e0e0',
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 🗂️ Project Structure

```
skeleton-ui/
├── src/
│   ├── components/
│   │   ├── skeletons/          # Skeleton components
│   │   │   ├── SkeletonBase.jsx
│   │   │   ├── SkeletonText.jsx
│   │   │   ├── SkeletonAvatar.jsx
│   │   │   ├── SkeletonImage.jsx
│   │   │   ├── SkeletonCard.jsx
│   │   │   ├── SkeletonList.jsx
│   │   │   ├── SkeletonTable.jsx
│   │   │   ├── SkeletonProfile.jsx
│   │   │   ├── SkeletonForm.jsx
│   │   │   └── index.jsx
│   │   ├── examples/           # Example implementations
│   │   │   ├── CardExample.jsx
│   │   │   ├── ProfileExample.jsx
│   │   │   ├── ListExample.jsx
│   │   │   ├── TableExample.jsx
│   │   │   └── index.jsx
│   │   └── ui/                 # UI utilities
│   │       ├── Section.jsx
│   │       └── Controls.jsx
│   ├── hooks/                  # Custom hooks
│   │   └── useLoading.jsx
│   ├── styles/                 # Styles and themes
│   │   ├── theme.js
│   │   └── GlobalStyles.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## 🎭 Animation Types

### Shimmer (Default)
A smooth wave-like animation that moves across the skeleton.

### Pulse
A breathing effect that fades the skeleton in and out.

```jsx
<SkeletonCard animation="pulse" />
```

## 🔧 Custom Hook

Use the `useLoading` hook to simulate loading states:

```jsx
import useLoading from './hooks/useLoading';

function MyComponent() {
  const { loading, reload } = useLoading(2000); // 2 seconds

  return (
    <>
      {loading ? <SkeletonCard /> : <ActualCard />}
      <button onClick={reload}>Reload</button>
    </>
  );
}
```

## 🌟 Best Practices

1. **Match the skeleton to your content** - Use skeleton shapes that closely match your actual content layout
2. **Keep animations subtle** - Don't distract users with overly flashy animations
3. **Show skeletons for 0.5-2 seconds** - Too short is jarring, too long is frustrating
4. **Use consistent timing** - Keep animation speeds consistent across your app
5. **Consider accessibility** - Some users may prefer reduced motion

## 📝 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)

---

Made with ❤️ for better loading experiences

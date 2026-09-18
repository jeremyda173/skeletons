# Mikens Skeletons

[![NPM Version](https://img.shields.io/npm/v/mikens-skeletons.svg)](https://www.npmjs.com/package/mikens-skeletons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Una biblioteca premium y completa de componentes skeleton para React. Animaciones ultra-suaves, diseño adaptativo y una interfaz espectacular para mejorar la experiencia del usuario durante la carga de contenido.

## ¿Por qué Mikens Skeletons?

En lugar de mostrar pantallas en blanco o spinners aburridos, **Mikens Skeletons** replica la forma y el diseño de tu contenido final.

- **Diseño Premium**: Efectos glassmorphism, gradientes suaves y animaciones de alta calidad.
- **Accesibilidad (a11y)**: Atributos `aria-busy` y `role="status"` integrados por defecto.
- **Animaciones Escalonadas (Staggered)**: Soporte para delays en animaciones de listas para un efecto cascada premium.
- **3 Animaciones Integradas**: `shimmer` (onda suave), `pulse` (respiración) y la nueva `wave` (ola).
- **Soporte Dark Mode Automático**: Colores de alta fidelidad que se adaptan al sistema automáticamente.
- **Optimizado & Limpio**: Código limpio, ligero y fácil de integrar.

## Instalación

```bash
npm install mikens-skeletons
# o
yarn add mikens-skeletons
```

## Uso Básico

Una vez que tengas la librería instalada, puedes importar los componentes de la siguiente manera:

```jsx
import { SkeletonWrapper, SkeletonCard, useLoading } from 'mikens-skeletons';

function MiComponente() {
  const { loading } = useLoading(2000); // Hook útil para simular cargas

  return (
    <SkeletonWrapper loading={loading} fallback={<SkeletonCard variant="with-image" animation="wave" />}>
      <ContenidoReal />
    </SkeletonWrapper>
  );
}
```

## Componentes Principales

- **SkeletonText**: Líneas de texto personalizables.
- **SkeletonAvatar**: Avatares circulares o cuadrados (opcional con texto).
- **SkeletonImage**: Placeholders de imágenes responsivos.
- **SkeletonButton**: Estados de carga para botones.
- **SkeletonCard**: Tarjetas completas (con imagen, con avatar, etc.).
- **SkeletonList**: Listas (feeds, directorios).
- **SkeletonTable**: Tablas de datos.
- **SkeletonProfile**: Perfiles de usuario simples o detallados.
- **SkeletonForm**: Formularios con inputs simulados.
- **SkeletonGrid**: Galerías de productos o imágenes.
- **SkeletonChart**: Gráficos de barras (`variant="bar"`) y circulares (`variant="pie"`).
- **SkeletonMedia**: Reproductores de video y audio con controles simulados.
- **SkeletonCode**: Bloques de código tipo macOS para terminales o blogs.
- **SkeletonWrapper**: Componente de utilidad para envolver tu contenido real sin condicionales extraños.

## Animaciones

Puedes elegir entre 3 tipos de animaciones pasando el prop `animation`:

```jsx
<SkeletonText animation="shimmer" /> // Por defecto
<SkeletonText animation="pulse" />
<SkeletonText animation="wave" />
```

## Personalización (Themes)

La librería incluye un sistema de temas (Theme Provider) para que encaje perfectamente con los colores de tu marca:

```jsx
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'mikens-skeletons'; // Puedes usar nuestros temas base

const customTheme = {
  ...lightTheme,
  skeletonBg: '#e2e8f0', // Tu color de fondo base
  skeletonShimmer: '#f1f5f9', // Tu color de brillo
  accentPrimary: '#3b82f6', // Tu color primario
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <TuApp />
    </ThemeProvider>
  );
}
```

## Licencia

MIT © Mikens
# Skeleton Loader UI

Una biblioteca completa de componentes skeleton para React con animaciones suaves y diseño adaptativo. Proporciona estados de carga elegantes para mejorar la experiencia del usuario durante la carga de contenido.

## ¿Qué es este proyecto?

**Skeleton Loader UI** es una colección de componentes de carga que muestran la estructura de tu contenido mientras se carga la información real. En lugar de mostrar pantallas en blanco o spinners genéricos, los skeletons replican la forma y el diseño de tu contenido final, creando una experiencia de carga más fluida y profesional.

### ¿Por qué usar Skeleton Loaders?

- **Mejor UX**: Los usuarios ven inmediatamente la estructura del contenido
- **Percepción de velocidad**: El contenido parece cargar más rápido
- **Reducción de ansiedad**: Los usuarios saben qué esperar
- **Profesionalismo**: Interfaz más pulida y moderna

## Características Principales

- **13 Tipos de Skeletons** - Texto, Avatar, Imagen, Card, Lista, Tabla, Perfil, Formulario, Botón, Blog, Comentarios, Grid
- **Animaciones Suaves** - Shimmer y Pulse con efectos CSS optimizados
- **Altamente Personalizable** - Ajusta tamaños, colores, formas y velocidad
- **Diseño Responsivo** - Funciona perfectamente en todos los dispositivos
- **Soporte Dark Mode** - Temas claro y oscuro integrados
- **Arquitectura Modular** - Código limpio organizado en carpetas lógicas
- **Fácil de Usar** - API simple con valores por defecto sensatos
- **Optimizado** - Ligero y eficiente

## Componentes Disponibles

### Componentes Básicos
- **SkeletonText** - Líneas de texto con ancho personalizable
- **SkeletonAvatar** - Avatares circulares y cuadrados
- **SkeletonImage** - Placeholders de imágenes responsivos
- **SkeletonButton** - Estados de carga para botones

### Componentes Compuestos
- **SkeletonCard** - 4 variantes (default, with-image, with-avatar, with-footer)
- **SkeletonList** - 3 variantes (default, with-avatar, simple)
- **SkeletonTable** - 5 variantes (default, with-actions, with-avatars, compact, with-pagination)
- **SkeletonProfile** - 2 variantes (default, detailed)
- **SkeletonForm** - Formularios con campos personalizables
- **SkeletonBlog** - 3 variantes de posts de blog
- **SkeletonComment** - Hilos de comentarios con respuestas anidadas
- **SkeletonGrid** - Layouts de cuadrícula pre-construidos

## Instalación y Build

Si has clonado este repositorio y quieres generar los archivos para usar en otros proyectos:

```bash
# 1. Instalar dependencias
npm install

# 2. Construir la librería (genera la carpeta /dist)
npm run build

# 3. (Opcional) Vincular localmente para probar en otro proyecto
npm link
```

## Uso como Librería

Una vez que tengas la librería instalada o vinculada en tu proyecto principal, puedes importar los componentes de la siguiente manera:

```jsx
import { 
  SkeletonCard, 
  SkeletonText, 
  SkeletonAvatar,
  useLoading 
} from 'skeleton-ui';

function MiComponente() {
  const { loading } = useLoading(2000);

  return loading ? (
    <SkeletonCard variant="with-image" animation="shimmer" />
  ) : (
    <ContenidoReal />
  );
}
```

## Temas y Personalización

### Modo Oscuro/Claro
```jsx
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <TuApp />
    </ThemeProvider>
  );
}
```

### Tema Personalizado
```jsx
const customTheme = {
  skeletonBg: '#tu-color',
  skeletonShimmer: '#tu-color',
  background: '#tu-color',
  text: '#tu-color',
  border: '#tu-color',
  accentPrimary: '#tu-color',
  accentSecondary: '#tu-color',
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## Tipos de Animación

### Shimmer (Por defecto)
Efecto de onda suave que se desplaza por el skeleton.

### Pulse
Efecto de respiración que desvanece el skeleton.

```jsx
<SkeletonCard animation="pulse" />
```

## Estructura del Proyecto

```
skeleton-ui/
├── src/
│   ├── components/
│   │   ├── skeletons/          # Componentes skeleton
│   │   │   ├── SkeletonBase.jsx # Componente base con animaciones
│   │   │   ├── SkeletonText.jsx
│   │   │   ├── SkeletonAvatar.jsx
│   │   │   ├── SkeletonImage.jsx
│   │   │   ├── SkeletonCard.jsx
│   │   │   ├── SkeletonList.jsx
│   │   │   ├── SkeletonTable.jsx
│   │   │   ├── SkeletonProfile.jsx
│   │   │   ├── SkeletonForm.jsx
│   │   │   ├── SkeletonButton.jsx
│   │   │   ├── SkeletonBlog.jsx
│   │   │   ├── SkeletonComment.jsx
│   │   │   ├── SkeletonGrid.jsx
│   │   │   └── index.jsx
│   │   ├── examples/           # Ejemplos de implementación
│   │   │   ├── CardExample.jsx
│   │   │   ├── ProfileExample.jsx
│   │   │   ├── ListExample.jsx
│   │   │   ├── TableExample.jsx
│   │   │   └── index.jsx
│   │   └── ui/                 # Utilidades de UI
│   │       ├── Section.jsx
│   │       ├── Controls.jsx
│   │       └── index.jsx
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useLoading.jsx
│   │   └── index.jsx
│   ├── styles/                # Estilos y temas
│   │   ├── theme.js
│   │   └── GlobalStyles.js
│   ├── utils/                 # Utilidades
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## Hook Personalizado

Usa el hook `useLoading` para simular estados de carga:

```jsx
import { useLoading, SkeletonCard } from 'skeleton-ui';

function MiComponente() {
  const { loading, reload } = useLoading(2000);

  return (
    <>
      {loading ? <SkeletonCard /> : <TarjetaReal />}
      <button onClick={reload}>Recargar</button>
    </>
  );
}
```

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linter
npm run lint
```

## Casos de Uso Populares

### Cargando una Lista
```jsx
<SkeletonList items={10} variant="with-avatar" />
```

### Cargando Productos
```jsx
<SkeletonGrid items={6} cardVariant="with-image" />
```

### Cargando Perfil
```jsx
<SkeletonProfile variant="detailed" />
```

### Cargando Blog
```jsx
<SkeletonBlog variant="full" />
```

### Cargando Tabla de Datos
```jsx
<SkeletonTable rows={8} columns={5} variant="with-actions" />
```

## Mejores Prácticas

1. **Coincide con tu Layout**: Haz que los skeletons coincidan con tu contenido real
2. **Tiempo de Carga**: Mantén los estados de carga entre 0.5-2 segundos
3. **Animaciones Consistentes**: Usa el mismo tipo de animación en toda tu app
4. **Responsive**: Prueba los skeletons en diferentes tamaños de pantalla
5. **Accesibilidad**: Considera usuarios que prefieren movimiento reducido

## Stack Técnico

- **React** 19.1.1 - Biblioteca de UI
- **Styled Components** 6.x - CSS-in-JS
- **Vite** 7.x - Herramienta de construcción
- **ESLint** - Calidad de código

## Estadísticas del Proyecto

- **Componentes**: 13 skeletons + 4 ejemplos = 17 total
- **Variantes**: 15+ configuraciones únicas
- **Tipos de Animación**: 2 (Shimmer, Pulse)
- **Temas**: 2 (Claro, Oscuro)
- **Ejemplos de Código**: 50+ patrones
- **Casos de Uso**: 20+ escenarios cubiertos

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Agradecimientos

Construido con:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)

---

**Hecho por Mikens**

Para mejores experiencias de carga
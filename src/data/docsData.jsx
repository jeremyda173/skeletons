// Core Library Components
import {
  SkeletonText,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
  SkeletonProfile,
  SkeletonForm,
  SkeletonButton,
  SkeletonBlog,
  SkeletonCommentList,
  SkeletonGrid,
  SkeletonDashboard,
  SkeletonTimeline,
  SkeletonKanban,
  SkeletonEcommerce,
  SkeletonChat,
  SkeletonPricing,
  SkeletonStats,
} from '@/components/skeletons';

export const getDocsData = (language, animation) => {
  return {
    text: {
      title: language === 'es' ? 'Skeletons de Texto' : 'Text Skeletons',
      description: language === 'es' 
        ? 'Placeholders de texto versátiles con líneas y anchos personalizables.' 
        : 'Versatile text loading placeholders with customizable lines and widths.',
      variants: [
        {
          label: language === 'es' ? 'Una Sola Línea' : 'Single Line',
          code: `import { SkeletonText } from 'mikens-skeletons';\n\n<SkeletonText lines={1} />`,
          render: <SkeletonText lines={1} animation={animation} />
        },
        {
          label: language === 'es' ? 'Varias Líneas' : 'Multiple Lines',
          code: `import { SkeletonText } from 'mikens-skeletons';\n\n<SkeletonText lines={3} />`,
          render: <SkeletonText lines={3} animation={animation} />
        },
        {
          label: language === 'es' ? 'Ancho Personalizado' : 'Custom Width',
          code: `import { SkeletonText } from 'mikens-skeletons';\n\n<SkeletonText lines={3} lastLineWidth="50%" />`,
          render: <SkeletonText lines={3} lastLineWidth="50%" animation={animation} />
        }
      ]
    },
    avatar: {
      title: language === 'es' ? 'Skeletons de Avatar' : 'Avatar Skeletons',
      description: language === 'es' 
        ? 'Placeholders para fotos de perfil con o sin etiquetas de texto.' 
        : 'Profile picture placeholders with or without text labels.',
      variants: [
        {
          label: language === 'es' ? 'Avatar Circular' : 'Circle Avatar',
          code: `import { SkeletonAvatar } from 'mikens-skeletons';\n\n<SkeletonAvatar size="60px" />`,
          render: <SkeletonAvatar size="60px" animation={animation} />
        },
        {
          label: language === 'es' ? 'Avatar Cuadrado' : 'Square Avatar',
          code: `import { SkeletonAvatar } from 'mikens-skeletons';\n\n<SkeletonAvatar size="60px" shape="square" />`,
          render: <SkeletonAvatar size="60px" shape="square" animation={animation} />
        },
        {
          label: language === 'es' ? 'Avatar con Texto' : 'Avatar with Text',
          code: `import { SkeletonAvatar } from 'mikens-skeletons';\n\n<SkeletonAvatar size="60px" withText textLines={2} />`,
          render: <SkeletonAvatar size="60px" withText textLines={2} animation={animation} />
        }
      ]
    },
    image: {
      title: language === 'es' ? 'Skeletons de Imagen' : 'Image Skeletons',
      description: language === 'es' 
        ? 'Placeholders para imágenes con dimensiones responsivas.' 
        : 'Placeholders for images with responsive dimensions.',
      variants: [
        {
          label: language === 'es' ? 'Imagen Estándar' : 'Standard Image',
          code: `import { SkeletonImage } from 'mikens-skeletons';\n\n<SkeletonImage height="180px" />`,
          render: <SkeletonImage height="180px" animation={animation} />
        },
        {
          label: language === 'es' ? 'Imagen Ancha' : 'Wide Image',
          code: `import { SkeletonImage } from 'mikens-skeletons';\n\n<SkeletonImage height="120px" />`,
          render: <SkeletonImage height="120px" animation={animation} />
        },
        {
          label: language === 'es' ? 'Imagen Cuadrada' : 'Square Image',
          code: `import { SkeletonImage } from 'mikens-skeletons';\n\n<SkeletonImage aspectRatio="1" />`,
          render: <SkeletonImage aspectRatio="1" animation={animation} />
        }
      ]
    },
    button: {
      title: language === 'es' ? 'Skeletons de Botón' : 'Button Skeleton',
      description: language === 'es' 
        ? 'Estados de carga para botones y elementos de acción.' 
        : 'Loading states for buttons and action elements.',
      variants: [
        {
          label: language === 'es' ? 'Botón Principal' : 'Primary Button',
          code: `import { SkeletonButton } from 'mikens-skeletons';\n\n<SkeletonButton width="140px" height="44px" />`,
          render: <SkeletonButton width="140px" height="44px" animation={animation} />
        },
        {
          label: language === 'es' ? 'Botón Pequeño' : 'Small Button',
          code: `import { SkeletonButton } from 'mikens-skeletons';\n\n<SkeletonButton width="100px" height="32px" />`,
          render: <SkeletonButton width="100px" height="32px" animation={animation} />
        },
        {
          label: language === 'es' ? 'Botón Ancho Completo' : 'Full Width Button',
          code: `import { SkeletonButton } from 'mikens-skeletons';\n\n<SkeletonButton height="48px" fullWidth />`,
          render: <SkeletonButton height="48px" fullWidth animation={animation} />
        }
      ]
    },
    card: {
      title: language === 'es' ? 'Skeletons de Cards' : 'Card Skeletons',
      description: language === 'es' 
        ? 'Diseños completos de tarjetas para diferentes casos de uso.' 
        : 'Complete card layouts for different use cases.',
      variants: [
        {
          label: language === 'es' ? 'Tarjeta Predeterminada' : 'Default Card',
          code: `import { SkeletonCard } from 'mikens-skeletons';\n\n<SkeletonCard variant="default" />`,
          render: <SkeletonCard variant="default" animation={animation} />
        },
        {
          label: language === 'es' ? 'Tarjeta con Imagen' : 'Card with Image',
          code: `import { SkeletonCard } from 'mikens-skeletons';\n\n<SkeletonCard variant="with-image" />`,
          render: <SkeletonCard variant="with-image" animation={animation} />
        },
        {
          label: language === 'es' ? 'Tarjeta con Avatar' : 'Card with Avatar',
          code: `import { SkeletonCard } from 'mikens-skeletons';\n\n<SkeletonCard variant="with-avatar" />`,
          render: <SkeletonCard variant="with-avatar" animation={animation} />
        }
      ]
    },
    list: {
      title: language === 'es' ? 'Skeletons de Listas' : 'List Skeletons',
      description: language === 'es' 
        ? 'Placeholders de listas perfectos para feeds y directorios.' 
        : 'List placeholders perfect for feeds and directories.',
      variants: [
        {
          label: language === 'es' ? 'Lista Predeterminada' : 'Default List',
          code: `import { SkeletonList } from 'mikens-skeletons';\n\n<SkeletonList items={5} variant="default" />`,
          render: <SkeletonList items={5} variant="default" animation={animation} />
        },
        {
          label: language === 'es' ? 'Lista con Avatares' : 'List with Avatars',
          code: `import { SkeletonList } from 'mikens-skeletons';\n\n<SkeletonList items={5} variant="with-avatar" />`,
          render: <SkeletonList items={5} variant="with-avatar" animation={animation} />
        }
      ]
    },
    table: {
      title: language === 'es' ? 'Skeletons de Tabla' : 'Table Skeleton',
      description: language === 'es' 
        ? 'Tablas de datos con múltiples variantes y configuraciones.' 
        : 'Data tables with multiple variants and configurations.',
      variants: [
        {
          label: language === 'es' ? 'Tabla Predeterminada' : 'Default Table',
          code: `import { SkeletonTable } from 'mikens-skeletons';\n\n<SkeletonTable rows={5} columns={4} />`,
          render: <SkeletonTable rows={5} columns={4} animation={animation} />
        },
        {
          label: language === 'es' ? 'Tabla con Acciones' : 'Table with Actions',
          code: `import { SkeletonTable } from 'mikens-skeletons';\n\n<SkeletonTable rows={4} columns={3} variant="with-actions" />`,
          render: <SkeletonTable rows={4} columns={3} variant="with-actions" animation={animation} />
        },
        {
          label: language === 'es' ? 'Tabla con Avatares' : 'Table with Avatars',
          code: `import { SkeletonTable } from 'mikens-skeletons';\n\n<SkeletonTable rows={4} columns={3} variant="with-avatars" />`,
          render: <SkeletonTable rows={4} columns={3} variant="with-avatars" animation={animation} />
        }
      ]
    },
    profile: {
      title: language === 'es' ? 'Skeletons de Perfil' : 'Profile Skeletons',
      description: language === 'es' 
        ? 'Perfiles de usuario con diferentes niveles de detalle.' 
        : 'User profiles with varying levels of detail.',
      variants: [
        {
          label: language === 'es' ? 'Perfil Simple' : 'Simple Profile',
          code: `import { SkeletonProfile } from 'mikens-skeletons';\n\n<SkeletonProfile variant="default" />`,
          render: <SkeletonProfile variant="default" animation={animation} />
        },
        {
          label: language === 'es' ? 'Perfil Detallado' : 'Detailed Profile',
          code: `import { SkeletonProfile } from 'mikens-skeletons';\n\n<SkeletonProfile variant="detailed" />`,
          render: <SkeletonProfile variant="detailed" animation={animation} />
        }
      ]
    },
    form: {
      title: language === 'es' ? 'Skeletons de Formulario' : 'Form Skeleton',
      description: language === 'es' 
        ? 'Formularios pre-construidos con campos de entrada y botones de acción.' 
        : 'Pre-built forms with input fields and action buttons.',
      variants: [
        {
          label: language === 'es' ? 'Formulario de Contacto' : 'Contact Form',
          code: `import { SkeletonForm } from 'mikens-skeletons';\n\n<SkeletonForm fields={3} />`,
          render: <SkeletonForm fields={3} animation={animation} />
        },
        {
          label: language === 'es' ? 'Formulario de Registro' : 'Registration Form',
          code: `import { SkeletonForm } from 'mikens-skeletons';\n\n<SkeletonForm fields={5} />`,
          render: <SkeletonForm fields={5} animation={animation} />
        }
      ]
    },
    blog: {
      title: language === 'es' ? 'Skeleton de Blog Post' : 'Blog Post Skeleton',
      description: language === 'es' 
        ? 'Layouts completos pre-construidos para entradas de blog y artículos.' 
        : 'Complete pre-built layouts for blog posts and articles.',
      variants: [
        {
          label: language === 'es' ? 'Publicación Simple' : 'Simple Blog Post',
          code: `import { SkeletonBlog } from 'mikens-skeletons';\n\n<SkeletonBlog variant="default" />`,
          render: <SkeletonBlog variant="default" animation={animation} />
        },
        {
          label: language === 'es' ? 'Publicación con Imagen' : 'Blog with Image',
          code: `import { SkeletonBlog } from 'mikens-skeletons';\n\n<SkeletonBlog variant="with-image" />`,
          render: <SkeletonBlog variant="with-image" animation={animation} />
        }
      ]
    },
    comment: {
      title: language === 'es' ? 'Skeletons de Comentarios' : 'Comment Skeleton',
      description: language === 'es' 
        ? 'Hilos de comentarios con soporte para respuestas jerárquicas.' 
        : 'Comment threads with support for nested replies.',
      variants: [
        {
          label: language === 'es' ? 'Comentarios Simples' : 'Flat Comments',
          code: `import { SkeletonCommentList } from 'mikens-skeletons';\n\n<SkeletonCommentList items={4} />`,
          render: <SkeletonCommentList items={4} animation={animation} />
        },
        {
          label: language === 'es' ? 'Comentarios con Respuestas' : 'Comments with Replies',
          code: `import { SkeletonCommentList } from 'mikens-skeletons';\n\n<SkeletonCommentList items={4} withReplies />`,
          render: <SkeletonCommentList items={4} withReplies animation={animation} />
        }
      ]
    },
    grid: {
      title: language === 'es' ? 'Skeletons de Cuadrícula (Grid)' : 'Grid Skeleton',
      description: language === 'es' 
        ? 'Galerías de imágenes o productos en formato de cuadrícula responsiva.' 
        : 'Responsive image galleries or product grids.',
      variants: [
        {
          label: language === 'es' ? 'Cuadrícula de Productos' : 'Product Grid',
          code: `import { SkeletonGrid } from 'mikens-skeletons';\n\n<SkeletonGrid items={6} minWidth="250px" cardVariant="with-image" />`,
          render: <SkeletonGrid items={6} minWidth="250px" cardVariant="with-image" animation={animation} />
        }
      ]
    },
    dashboard: {
      title: language === 'es' ? 'Skeleton Dashboard' : 'Dashboard Skeleton',
      description: language === 'es' 
        ? 'Un diseño completo para un panel de administración con gráficos y estadísticas.' 
        : 'A complete layout for an admin panel with charts and statistics.',
      variants: [
        {
          label: language === 'es' ? 'Panel de Control' : 'Admin Dashboard',
          code: `import { SkeletonDashboard } from 'mikens-skeletons';\n\n<SkeletonDashboard />`,
          render: <SkeletonDashboard animation={animation} />
        }
      ]
    },
    timeline: {
      title: language === 'es' ? 'Skeleton Timeline' : 'Timeline Skeleton',
      description: language === 'es' 
        ? 'Un skeleton para un feed de actividad o línea de tiempo de eventos.' 
        : 'A skeleton for an activity feed or events timeline.',
      variants: [
        {
          label: language === 'es' ? 'Línea de Tiempo de Actividad' : 'Activity Timeline',
          code: `import { SkeletonTimeline } from 'mikens-skeletons';\n\n<SkeletonTimeline items={4} />`,
          render: <SkeletonTimeline items={4} animation={animation} />
        }
      ]
    },
    kanban: {
      title: language === 'es' ? 'Skeleton Kanban' : 'Kanban Skeleton',
      description: language === 'es' 
        ? 'Un diseño de tablero tipo Kanban con columnas y tarjetas.' 
        : 'A Kanban board layout with columns and cards.',
      variants: [
        {
          label: language === 'es' ? 'Tablero Kanban' : 'Kanban Board',
          code: `import { SkeletonKanban } from 'mikens-skeletons';\n\n<SkeletonKanban columns={3} cardsPerColumn={3} />`,
          render: <SkeletonKanban columns={3} cardsPerColumn={3} animation={animation} />
        }
      ]
    },
    ecommerce: {
      title: language === 'es' ? 'Skeleton Ecommerce' : 'Ecommerce Skeleton',
      description: language === 'es' 
        ? 'Página de detalle de producto con galería de imágenes y detalles de compra.' 
        : 'Product detail page with image gallery and purchase details.',
      variants: [
        {
          label: language === 'es' ? 'Detalles del Producto' : 'Product Details',
          code: `import { SkeletonEcommerce } from 'mikens-skeletons';\n\n<SkeletonEcommerce />`,
          render: <SkeletonEcommerce animation={animation} />
        }
      ]
    },
    chat: {
      title: language === 'es' ? 'Skeleton Chat' : 'Chat Skeleton',
      description: language === 'es' 
        ? 'Interfaz de mensajería con lista de contactos y burbujas de chat.' 
        : 'Messaging interface with contact list and chat bubbles.',
      variants: [
        {
          label: language === 'es' ? 'Interfaz de Chat' : 'Chat Interface',
          code: `import { SkeletonChat } from 'mikens-skeletons';\n\n<SkeletonChat />`,
          render: <SkeletonChat animation={animation} />
        }
      ]
    },
    pricing: {
      title: language === 'es' ? 'Skeleton Pricing' : 'Pricing Skeleton',
      description: language === 'es' 
        ? 'Tarjetas de planes de precios, destacando el plan central.' 
        : 'Pricing plan cards, highlighting the central plan.',
      variants: [
        {
          label: language === 'es' ? 'Planes de Precios' : 'Pricing Plans',
          code: `import { SkeletonPricing } from 'mikens-skeletons';\n\n<SkeletonPricing plans={3} />`,
          render: <SkeletonPricing plans={3} animation={animation} />
        }
      ]
    },
    stats: {
      title: language === 'es' ? 'Skeleton Stats' : 'Stats Skeleton',
      description: language === 'es' 
        ? 'Widgets/tarjetas de métricas o KPIs.' 
        : 'Metrics or KPIs widgets/cards.',
      variants: [
        {
          label: language === 'es' ? 'Tarjetas de Estadísticas' : 'Stats Cards',
          code: `import { SkeletonStats } from 'mikens-skeletons';\n\n<SkeletonStats count={4} />`,
          render: <SkeletonStats count={4} animation={animation} />
        }
      ]
    }
  };
};

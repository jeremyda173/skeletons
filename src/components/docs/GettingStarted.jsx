import styled from 'styled-components';
import { CodeBlock } from '@/components/ui/Section';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, ${props => props.theme.accentPrimary} 0%, ${props => props.theme.accentSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin: 0 0 24px 0;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: ${props => props.theme.text};
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0 16px 0;
  color: ${props => props.theme.text};
`;

const GettingStarted = ({ language }) => {
  return (
    <div>
      <Title>Mikens Skeletons</Title>
      <Text>
        {language === 'es' 
          ? 'Una biblioteca premium y completa de componentes skeleton para React. Animaciones ultra-suaves, diseño adaptativo y una interfaz espectacular para mejorar la experiencia del usuario durante la carga de contenido.'
          : 'A premium and comprehensive skeleton component library for React. Ultra-smooth animations, adaptive design, and a spectacular interface to improve user experience during content loading.'}
      </Text>

      <Subtitle>{language === 'es' ? 'Instalación' : 'Installation'}</Subtitle>
      <Text>
        {language === 'es' ? 'Instala la librería usando npm o yarn:' : 'Install the library using npm or yarn:'}
      </Text>
      <CodeBlock>
{`npm install mikens-skeletons
# ${language === 'es' ? 'o' : 'or'}
yarn add mikens-skeletons`}
      </CodeBlock>

      <Subtitle>{language === 'es' ? 'Uso Básico' : 'Basic Usage'}</Subtitle>
      <Text>
        {language === 'es' 
          ? 'Para empezar a utilizar los skeletons, simplemente importa el componente que necesites y ponlo a renderizar mientras tu contenido real está cargando.'
          : 'To start using the skeletons, simply import the component you need and render it while your real content is loading.'}
      </Text>
      <CodeBlock>
{`import { useState, useEffect } from 'react';
import { SkeletonCard } from 'mikens-skeletons';

function ${language === 'es' ? 'MiComponente' : 'MyComponent'}() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ${language === 'es' ? 'Simulamos una llamada a API' : 'Simulate API call'}
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonCard variant="with-image" animation="wave" />
      ) : (
        <${language === 'es' ? 'TuContenidoReal' : 'YourRealContent'} />
      )}
    </div>
  );
}`}
      </CodeBlock>

      <Subtitle>{language === 'es' ? 'Temas y Personalización' : 'Themes & Customization'}</Subtitle>
      <Text>
        {language === 'es'
          ? 'Mikens Skeletons incluye soporte para modo claro y oscuro de manera nativa. Debes envolver tu aplicación con el `ThemeProvider` para que los componentes hereden los colores correctamente.'
          : 'Mikens Skeletons includes native support for light and dark mode. You must wrap your application with the `ThemeProvider` so components inherit colors correctly.'}
      </Text>
      <CodeBlock>
{`import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'mikens-skeletons';

function App() {
  const isDark = false; // ${language === 'es' ? 'Tu lógica de tema' : 'Your theme logic'}

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <${language === 'es' ? 'TuAplicacion' : 'YourApplication'} />
    </ThemeProvider>
  );
}`}
      </CodeBlock>
    </div>
  );
};

export default GettingStarted;

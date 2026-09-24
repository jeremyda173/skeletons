// React & Libs
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Styles & Themes
import GlobalStyles from '@/docs/styles/GlobalStyles';
import { lightTheme, darkTheme } from '@/docs/styles/theme';

// Layout & UI Components
import { Sidebar } from '@/docs/components/ui/Sidebar';
import { TopBar } from '@/docs/components/ui/TopBar';
import { LayoutWrapper, MainContent, ContentContainer, MobileMenuButton, Overlay } from '@/docs/components/ui/DocsLayout';

// Documentation Content
import DocsContent from '@/docs/components/docs/DocsContent';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('mikens_skeletons_theme');
    return saved !== null ? saved === 'dark' : true; 
  });
  
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('mikens_skeletons_lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('mikens_skeletons_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('mikens_skeletons_lang', language);
  }, [language]);

  const animation = 'wave';
  const [activeTab, setActiveTab] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);

  useEffect(() => {
    setSelectedVariant(0);
  }, [activeTab]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper>
        <Overlay isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          language={language}
        />
        
        <MainContent>
          <TopBar 
            isDark={isDark} 
            setIsDark={setIsDark}
            language={language}
            setLanguage={setLanguage}
          />
          <ContentContainer>
            <DocsContent 
              activeTab={activeTab}
              language={language}
              animation={animation}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
            />
          </ContentContainer>
        </MainContent>

        <MobileMenuButton onClick={() => setIsSidebarOpen(true)}>
          ☰
        </MobileMenuButton>
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { lightTheme, darkTheme } from '@/styles/theme';

import { Sidebar } from '@/components/ui/Sidebar';
import { TopBar } from '@/components/ui/TopBar';
import { LayoutWrapper, MainContent, ContentContainer, MobileMenuButton, Overlay } from '@/components/ui/DocsLayout';
import DocsContent from '@/components/docs/DocsContent';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('mikens_skeletons_theme');
    // Default to true (dark) since the user explicitly said "solo deja el darkmode" earlier, 
    // but here we just restore what they had or default to dark
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

// React & Libs
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// UI Components
import { ControlGroup, Toggle } from '@/components/ui/Controls';

const TopBarContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 20px;
  background: ${props => props.theme.cardBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  -webkit-backdrop-filter: ${props => props.theme.glassBackdrop};
  border-bottom: 1px solid ${props => props.theme.cardBorder};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin: -32px -20px 32px -20px;

  @media (min-width: 768px) {
    margin: -60px -40px 40px -40px;
    padding: 20px 40px;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${props => props.theme.controlBg};
  border: 2px solid ${props => props.theme.controlBorder};
  border-radius: 12px;
  color: ${props => props.theme.controlText};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: ${props => props.theme.accentPrimary};
  }
`;

const FlagIcon = styled.img`
  width: 20px;
  height: auto;
  border-radius: 2px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: ${props => props.theme.controlBg};
  border: 1px solid ${props => props.theme.controlBorder};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 140px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  font-size: 13px;
  color: ${props => props.theme.controlText};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.accentPrimary}1a;
  }
`;

export function TopBar({ 
  isDark, 
  setIsDark, 
  language,
  setLanguage
}) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = {
    es: { label: 'Español', flag: 'https://flagcdn.com/es.svg' },
    en: { label: 'English (US)', flag: 'https://flagcdn.com/us.svg' }
  };

  return (
    <TopBarContainer>
      <ControlGroup style={{ flexDirection: 'row', gap: '24px', alignItems: 'center' }}>
        
        <DropdownContainer ref={dropdownRef}>
          <DropdownButton onClick={() => setIsLangOpen(!isLangOpen)}>
            <FlagIcon src={languages[language].flag} alt={language} />
            {languages[language].label}
          </DropdownButton>
          <DropdownMenu isOpen={isLangOpen}>
            {Object.entries(languages).map(([code, { label, flag }]) => (
              <DropdownItem 
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setIsLangOpen(false);
                }}
              >
                <FlagIcon src={flag} alt={label} />
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>

        <Toggle>
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          {language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}
        </Toggle>
      </ControlGroup>
    </TopBarContainer>
  );
}

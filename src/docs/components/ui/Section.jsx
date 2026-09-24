import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 48px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0 0 8px 0;
  
  @media (min-width: 768px) {
    font-size: 26px;
  }
  
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin: 0 0 20px 0;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 15px;
    margin: 0 0 22px 0;
  }
  
  @media (min-width: 1024px) {
    font-size: 16px;
    margin: 0 0 24px 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '280px'}, 1fr));
    gap: 20px;
  }
  
  @media (min-width: 768px) {
    gap: ${props => props.gap || '24px'};
  }
`;



export const DemoBox = styled.div`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.isActive ? props.theme.accentPrimary : props.theme.cardBorder};
  border-radius: 8px;
  padding: 16px;
  box-shadow: ${props => props.theme.glassShadow};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  -webkit-backdrop-filter: ${props => props.theme.glassBackdrop};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
    border-color: ${props => props.isActive ? props.theme.accentPrimary : props.theme.text + '33'};
  }
  
  @media (min-width: 768px) {
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.accentPrimary};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

import { useState } from 'react';

const CodeBlockContainer = styled.div`
  position: relative;
  margin: 12px 0;
  
  @media (min-width: 768px) {
    margin: 16px 0;
  }
`;

const StyledPre = styled.pre`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.text};
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.6;
  margin: 0;

  code {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  }
  
  @media (min-width: 768px) {
    padding: 20px;
    border-radius: 12px;
    font-size: 14px;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${props => props.theme.controlBg};
  border: 1px solid ${props => props.theme.controlBorder};
  color: ${props => props.theme.text};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${props => props.theme.accentPrimary}22;
    border-color: ${props => props.theme.accentPrimary};
    color: ${props => props.theme.accentPrimary};
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export function CodeBlock({ children, style }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CodeBlockContainer style={style}>
      <StyledPre>
        <code>{children}</code>
      </StyledPre>
      <CopyButton onClick={handleCopy}>
        {copied ? (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy
          </>
        )}
      </CopyButton>
    </CodeBlockContainer>
  );
}


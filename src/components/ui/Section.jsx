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

export const CodeBlock = styled.pre`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.text};
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.6;
  margin: 12px 0;

  code {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  }
  
  @media (min-width: 768px) {
    padding: 20px;
    border-radius: 12px;
    font-size: 14px;
    margin: 16px 0;
  }
`;

export const DemoBox = styled.div`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
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


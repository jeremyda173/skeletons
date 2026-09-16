import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${props => props.theme.background};
  background-image: 
    radial-gradient(at 0% 0%, ${props => props.theme.accentPrimary}22 0px, transparent 50%),
    radial-gradient(at 100% 100%, ${props => props.theme.accentSecondary}22 0px, transparent 50%);
  background-attachment: fixed;
  color: ${props => props.theme.text};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 32px 20px;
  margin-left: 0;
  width: 100%;
  
  @media (min-width: 768px) {
    margin-left: 260px;
    padding: 60px 40px;
    max-width: calc(100vw - 260px);
  }
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.accentPrimary}, ${props => props.theme.accentSecondary});
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 99;
  cursor: pointer;
  font-size: 24px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 98;
  }
`;

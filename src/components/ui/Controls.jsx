import styled from 'styled-components';

export const ControlPanel = styled.div`
  background: ${props => props.theme.controlBg};
  border: 2px solid ${props => props.theme.controlBorder};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.accentPrimary}, ${props => props.theme.accentSecondary});
  }
  
  @media (min-width: 768px) {
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 32px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: ${props => props.primary ? props.theme.accentPrimary : '#6c757d'};
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? props.theme.accentSecondary : '#545b62'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Select = styled.select`
  padding: 12px 20px;
  border: 2px solid ${props => props.theme.controlBorder};
  border-radius: 12px;
  background: ${props => props.theme.controlBg};
  color: ${props => props.theme.controlText};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: ${props => props.theme.accentPrimary};
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accentPrimary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    background: ${props => props.theme.controlBg};
    color: ${props => props.theme.controlText};
  }
`;

export const Toggle = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.controlText};
  user-select: none;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.accentPrimary};
  }

  input[type="checkbox"] {
    appearance: none;
    width: 50px;
    height: 26px;
    background: ${props => props.theme.controlBorder};
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      background: white;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:checked {
      background: linear-gradient(135deg, ${props => props.theme.accentPrimary}, ${props => props.theme.accentSecondary});
      box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
    }

    &:checked::before {
      transform: translateX(24px);
    }

    &:hover {
      box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
    }
  }
`;


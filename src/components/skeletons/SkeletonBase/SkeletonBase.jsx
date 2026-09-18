import styled, { keyframes, css } from 'styled-components';

// Animación de shimmer premium
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Animación de pulse suave
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.995);
  }
`;

// Animación de wave (nueva)
const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50%, 100% {
    transform: translateX(100%);
  }
`;

export const SkeletonBase = styled.div.attrs(props => ({
  role: props.role || 'status',
  'aria-busy': props['aria-busy'] !== undefined ? props['aria-busy'] : 'true',
  'aria-label': props.ariaLabel || 'Cargando...',
}))`
  position: relative;
  overflow: hidden;
  background: ${props => props.theme?.skeletonBg || '#e2e8f0'};
  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.skeletonBg || '#334155'};
  }
  border-radius: ${props => props.radius || '6px'};
  display: ${props => props.inline ? 'inline-block' : 'block'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  margin: ${props => props.margin || '0'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  ${props => props.animation === 'shimmer' && css`
    background-image: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} ${props.duration || '2s'} infinite linear;
    animation-delay: ${props.animationDelay || '0s'};
  `}

  ${props => props.animation === 'wave' && css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: ${wave} ${props.duration || '2s'} infinite ease-in-out;
      animation-delay: ${props.animationDelay || '0s'};
    }
  `}

  ${props => props.animation === 'pulse' && css`
    animation: ${pulse} ${props.duration || '2s'} infinite ease-in-out;
    animation-delay: ${props.animationDelay || '0s'};
  `}
`;

export default SkeletonBase;


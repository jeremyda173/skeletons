import styled, { keyframes } from 'styled-components';

// Animación de shimmer
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Animación de pulse
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const SkeletonBase = styled.div`
  background: ${props => props.theme?.skeletonBg || '#e0e0e0'};
  background-image: linear-gradient(
    90deg,
    ${props => props.theme?.skeletonBg || '#e0e0e0'} 0px,
    ${props => props.theme?.skeletonShimmer || '#f0f0f0'} 40px,
    ${props => props.theme?.skeletonBg || '#e0e0e0'} 80px
  );
  background-size: 1000px 100%;
  animation: ${props => props.animation === 'pulse' ? pulse : shimmer} 
    ${props => props.duration || '1.5s'} infinite ease-in-out;
  border-radius: ${props => props.radius || '4px'};
  display: ${props => props.inline ? 'inline-block' : 'block'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  margin: ${props => props.margin || '0'};
`;

export default SkeletonBase;


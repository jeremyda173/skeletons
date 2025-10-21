import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const TextWrapper = styled.div`
  width: 100%;
`;

const SkeletonText = ({ 
  lines = 3, 
  width = '100%', 
  lastLineWidth = '70%',
  lineHeight = '16px',
  gap = '10px',
  animation = 'shimmer',
  radius = '4px'
}) => {
  return (
    <TextWrapper>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBase
          key={index}
          width={index === lines - 1 ? lastLineWidth : width}
          height={lineHeight}
          margin={index < lines - 1 ? `0 0 ${gap} 0` : '0'}
          animation={animation}
          radius={radius}
        />
      ))}
    </TextWrapper>
  );
};

export default SkeletonText;


import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const ImageWrapper = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '200px'};
  position: relative;
  overflow: hidden;
`;

const SkeletonImage = ({ 
  width = '100%', 
  height = '200px',
  radius = '8px',
  animation = 'shimmer',
  aspectRatio
}) => {
  const style = aspectRatio ? { aspectRatio } : {};
  
  return (
    <ImageWrapper width={width} height={aspectRatio ? 'auto' : height} style={style}>
      <SkeletonBase
        width="100%"
        height="100%"
        radius={radius}
        animation={animation}
      />
    </ImageWrapper>
  );
};

export default SkeletonImage;


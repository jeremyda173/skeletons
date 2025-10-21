import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const SkeletonButton = ({ 
  width = '120px', 
  height = '40px',
  radius = '8px',
  animation = 'shimmer',
  fullWidth = false
}) => {
  return (
    <ButtonWrapper style={{ width: fullWidth ? '100%' : 'auto' }}>
      <SkeletonBase
        width={fullWidth ? '100%' : width}
        height={height}
        radius={radius}
        animation={animation}
      />
    </ButtonWrapper>
  );
};

export default SkeletonButton;


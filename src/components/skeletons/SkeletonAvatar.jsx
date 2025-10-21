import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || '12px'};
`;

const TextGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonAvatar = ({ 
  size = '50px', 
  withText = false,
  textLines = 2,
  animation = 'shimmer',
  shape = 'circle' // circle or square
}) => {
  const radius = shape === 'circle' ? '50%' : '8px';
  
  return (
    <AvatarWrapper gap={withText ? '12px' : '0'}>
      <SkeletonBase
        width={size}
        height={size}
        radius={radius}
        animation={animation}
      />
      {withText && (
        <TextGroup>
          <SkeletonBase width="120px" height="14px" animation={animation} />
          {textLines > 1 && (
            <SkeletonBase width="80px" height="12px" animation={animation} />
          )}
        </TextGroup>
      )}
    </AvatarWrapper>
  );
};

export default SkeletonAvatar;


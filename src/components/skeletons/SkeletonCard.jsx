import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonImage from './SkeletonImage';
import SkeletonText from './SkeletonText';
import SkeletonAvatar from './SkeletonAvatar';

const CardWrapper = styled.div`
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  padding: 16px;
  
  @media (min-width: 768px) {
    padding: ${props => props.padding || '20px'};
  }
`;

const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  
  @media (min-width: 768px) {
    padding: ${props => props.padding || '20px'};
  }
`;

const CardFooter = styled.div`
  padding: 16px;
  border-top: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  display: flex;
  gap: 10px;
  
  @media (min-width: 768px) {
    padding: ${props => props.padding || '20px'};
  }
`;

const SkeletonCard = ({ 
  variant = 'default', // default, with-image, with-avatar, with-footer
  animation = 'shimmer'
}) => {
  if (variant === 'with-image') {
    return (
      <CardWrapper>
        <SkeletonImage height="200px" radius="0" animation={animation} />
        <CardContent>
          <SkeletonBase width="60%" height="24px" margin="0 0 12px 0" animation={animation} />
          <SkeletonText lines={3} animation={animation} />
        </CardContent>
      </CardWrapper>
    );
  }

  if (variant === 'with-avatar') {
    return (
      <CardWrapper>
        <CardHeader>
          <SkeletonAvatar size="40px" withText textLines={2} animation={animation} />
        </CardHeader>
        <CardContent>
          <SkeletonText lines={4} animation={animation} />
        </CardContent>
      </CardWrapper>
    );
  }

  if (variant === 'with-footer') {
    return (
      <CardWrapper>
        <CardContent>
          <SkeletonBase width="50%" height="24px" margin="0 0 12px 0" animation={animation} />
          <SkeletonText lines={3} animation={animation} />
        </CardContent>
        <CardFooter>
          <SkeletonBase width="80px" height="36px" radius="8px" animation={animation} />
          <SkeletonBase width="80px" height="36px" radius="8px" animation={animation} />
        </CardFooter>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      <CardContent>
        <SkeletonBase width="60%" height="24px" margin="0 0 12px 0" animation={animation} />
        <SkeletonText lines={4} animation={animation} />
      </CardContent>
    </CardWrapper>
  );
};

export default SkeletonCard;


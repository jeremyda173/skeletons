import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonAvatar from './SkeletonAvatar';

const ListWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ListItem = styled.div`
  padding: 12px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const TextGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonList = ({ 
  items = 5, 
  variant = 'default', // default, with-avatar, simple
  animation = 'shimmer'
}) => {
  if (variant === 'with-avatar') {
    return (
      <ListWrapper>
        {Array.from({ length: items }).map((_, index) => (
          <ListItem key={index}>
            <SkeletonAvatar size="40px" animation={animation} />
            <TextGroup>
              <SkeletonBase width="70%" height="16px" animation={animation} />
              <SkeletonBase width="50%" height="14px" animation={animation} />
            </TextGroup>
          </ListItem>
        ))}
      </ListWrapper>
    );
  }

  if (variant === 'simple') {
    return (
      <ListWrapper>
        {Array.from({ length: items }).map((_, index) => (
          <ListItem key={index}>
            <SkeletonBase width="100%" height="16px" animation={animation} />
          </ListItem>
        ))}
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      {Array.from({ length: items }).map((_, index) => (
        <ListItem key={index}>
          <TextGroup>
            <SkeletonBase width="80%" height="16px" animation={animation} />
            <SkeletonBase width="60%" height="14px" animation={animation} />
          </TextGroup>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default SkeletonList;


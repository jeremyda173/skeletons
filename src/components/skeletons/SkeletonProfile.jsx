import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonAvatar from './SkeletonAvatar';
import SkeletonText from './SkeletonText';

const ProfileWrapper = styled.div`
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    gap: 20px;
    margin-bottom: 24px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
  
  @media (min-width: 768px) {
    gap: 24px;
    margin: 20px 0;
  }
`;

const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  
  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
  
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 12px;
  }
  
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const SkeletonProfile = ({ 
  variant = 'default', // default, detailed
  animation = 'shimmer'
}) => {
  if (variant === 'detailed') {
    return (
      <ProfileWrapper>
        <ProfileHeader>
          <SkeletonAvatar size="80px" animation={animation} />
          <ProfileInfo>
            <SkeletonBase width="200px" height="24px" animation={animation} />
            <SkeletonBase width="150px" height="16px" animation={animation} />
            <SkeletonBase width="180px" height="14px" animation={animation} />
          </ProfileInfo>
        </ProfileHeader>
        
        <StatsRow>
          {Array.from({ length: 3 }).map((_, index) => (
            <StatItem key={index}>
              <SkeletonBase width="60px" height="28px" animation={animation} />
              <SkeletonBase width="80px" height="14px" animation={animation} />
            </StatItem>
          ))}
        </StatsRow>
        
        <SkeletonText lines={3} animation={animation} />
        
        <ButtonGroup>
          <SkeletonBase width="120px" height="40px" radius="8px" animation={animation} />
          <SkeletonBase width="120px" height="40px" radius="8px" animation={animation} />
        </ButtonGroup>
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <SkeletonAvatar size="60px" animation={animation} />
        <ProfileInfo>
          <SkeletonBase width="180px" height="20px" animation={animation} />
          <SkeletonBase width="140px" height="14px" animation={animation} />
        </ProfileInfo>
      </ProfileHeader>
      <SkeletonText lines={2} animation={animation} />
    </ProfileWrapper>
  );
};

export default SkeletonProfile;


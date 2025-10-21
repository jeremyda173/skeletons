import styled from 'styled-components';
import { SkeletonProfile } from '../skeletons';
import useLoading from '../../hooks/useLoading';

const ProfileWrapper = styled.div`
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  margin: 0 0 8px 0;
  font-size: 24px;
  color: ${props => props.theme?.text || '#333'};
`;

const Username = styled.p`
  margin: 0 0 4px 0;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.8;
  font-size: 16px;
`;

const Email = styled.p`
  margin: 0;
  color: ${props => props.theme?.text || '#999'};
  opacity: 0.7;
  font-size: 14px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin: 20px 0;
`;

const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme?.text || '#333'};
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.7;
`;

const Bio = styled.p`
  margin: 0;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.8;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme?.accentPrimary || '#007bff'};
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme?.accentSecondary || '#0056b3'};
  }

  &:last-child {
    background: #6c757d;
    
    &:hover {
      background: #545b62;
    }
  }
`;

const ActualProfile = ({ variant }) => {
  if (variant === 'detailed') {
    return (
      <ProfileWrapper>
        <ProfileHeader>
          <Avatar src="https://i.pravatar.cc/150?img=12" alt="Profile" />
          <ProfileInfo>
            <Name>John Doe</Name>
            <Username>@johndoe</Username>
            <Email>john.doe@example.com</Email>
          </ProfileInfo>
        </ProfileHeader>
        
        <StatsRow>
          <StatItem>
            <StatValue>1.2K</StatValue>
            <StatLabel>Followers</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>342</StatValue>
            <StatLabel>Following</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>89</StatValue>
            <StatLabel>Posts</StatLabel>
          </StatItem>
        </StatsRow>
        
        <Bio>
          Passionate developer and designer. Love creating beautiful and functional web experiences.
          Always learning something new! 🚀
        </Bio>
        
        <ButtonGroup>
          <Button>Follow</Button>
          <Button>Message</Button>
        </ButtonGroup>
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar src="https://i.pravatar.cc/150?img=8" alt="Profile" />
        <ProfileInfo>
          <Name>Jane Smith</Name>
          <Username>@janesmith</Username>
        </ProfileInfo>
      </ProfileHeader>
      <Bio>Software engineer and tech enthusiast.</Bio>
    </ProfileWrapper>
  );
};

const ProfileExample = ({ variant = 'default', loadingTime = 2000 }) => {
  const { loading } = useLoading(loadingTime);

  return loading ? (
    <SkeletonProfile variant={variant} />
  ) : (
    <ActualProfile variant={variant} />
  );
};

export default ProfileExample;


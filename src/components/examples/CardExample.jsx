import styled from 'styled-components';
import { SkeletonCard } from '../skeletons';
import useLoading from '../../hooks/useLoading';

const CardWrapper = styled.div`
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 12px;
  overflow: hidden;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  color: ${props => props.theme?.text || '#333'};
`;

const CardDescription = styled.p`
  margin: 0;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.8;
  line-height: 1.6;
`;

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const AvatarInfo = styled.div`
  flex: 1;
`;

const AvatarName = styled.div`
  font-weight: 600;
  color: ${props => props.theme?.text || '#333'};
  margin-bottom: 4px;
`;

const AvatarRole = styled.div`
  font-size: 12px;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.7;
`;

const ActualCard = ({ variant }) => {
  if (variant === 'with-image') {
    return (
      <CardWrapper>
        <CardImage src="https://picsum.photos/400/200" alt="Card" />
        <CardContent>
          <CardTitle>Beautiful Landscape</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardDescription>
        </CardContent>
      </CardWrapper>
    );
  }

  if (variant === 'with-avatar') {
    return (
      <CardWrapper>
        <CardHeader>
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="User" />
          <AvatarInfo>
            <AvatarName>Sarah Johnson</AvatarName>
            <AvatarRole>Product Designer</AvatarRole>
          </AvatarInfo>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </CardDescription>
        </CardContent>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      <CardContent>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation.
        </CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

const CardExample = ({ variant = 'default', loadingTime = 2000 }) => {
  const { loading } = useLoading(loadingTime);

  return loading ? (
    <SkeletonCard variant={variant} />
  ) : (
    <ActualCard variant={variant} />
  );
};

export default CardExample;


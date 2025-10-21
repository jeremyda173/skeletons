import styled from 'styled-components';
import { SkeletonList } from '../skeletons';
import useLoading from '../../hooks/useLoading';

const ListWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.div`
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.theme?.cardBorder || '#f8f9fa'};
    opacity: 0.8;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const TextGroup = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 500;
  color: ${props => props.theme?.text || '#333'};
  margin-bottom: 4px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.7;
`;

const users = [
  { name: 'Alice Johnson', role: 'Frontend Developer', img: 3 },
  { name: 'Bob Smith', role: 'Backend Developer', img: 5 },
  { name: 'Carol White', role: 'UX Designer', img: 9 },
  { name: 'David Brown', role: 'Product Manager', img: 11 },
  { name: 'Eve Davis', role: 'DevOps Engineer', img: 15 },
];

const ActualList = ({ variant }) => {
  if (variant === 'with-avatar') {
    return (
      <ListWrapper>
        {users.map((user, index) => (
          <ListItem key={index}>
            <Avatar src={`https://i.pravatar.cc/150?img=${user.img}`} alt={user.name} />
            <TextGroup>
              <Title>{user.name}</Title>
              <Subtitle>{user.role}</Subtitle>
            </TextGroup>
          </ListItem>
        ))}
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      {users.map((user, index) => (
        <ListItem key={index}>
          <TextGroup>
            <Title>{user.name}</Title>
            <Subtitle>{user.role}</Subtitle>
          </TextGroup>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

const ListExample = ({ variant = 'default', loadingTime = 2000 }) => {
  const { loading } = useLoading(loadingTime);

  return loading ? (
    <SkeletonList items={5} variant={variant} />
  ) : (
    <ActualList variant={variant} />
  );
};

export default ListExample;


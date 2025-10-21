import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonText from './SkeletonText';
import SkeletonImage from './SkeletonImage';
import SkeletonAvatar from './SkeletonAvatar';

const BlogWrapper = styled.article`
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

const BlogContent = styled.div`
  padding: 16px;
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
`;

const MetaGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const SkeletonBlog = ({ 
  variant = 'default', // default, with-image, full
  animation = 'shimmer'
}) => {
  if (variant === 'with-image') {
    return (
      <BlogWrapper>
        <SkeletonImage height="250px" radius="0" animation={animation} />
        <BlogContent>
          <SkeletonBase width="70%" height="28px" margin="0 0 16px 0" animation={animation} />
          <SkeletonText lines={4} animation={animation} />
          <BlogMeta>
            <SkeletonAvatar size="32px" withText animation={animation} />
            <SkeletonBase width="80px" height="14px" animation={animation} />
          </BlogMeta>
        </BlogContent>
      </BlogWrapper>
    );
  }

  if (variant === 'full') {
    return (
      <BlogWrapper>
        <SkeletonImage height="300px" radius="0" animation={animation} />
        <BlogContent>
          <SkeletonBase width="60%" height="32px" margin="0 0 12px 0" animation={animation} />
          <SkeletonBase width="90%" height="18px" margin="0 0 24px 0" animation={animation} />
          <SkeletonText lines={6} animation={animation} />
          <BlogMeta>
            <SkeletonAvatar size="40px" withText textLines={2} animation={animation} />
            <MetaGroup>
              <SkeletonBase width="60px" height="14px" animation={animation} />
              <SkeletonBase width="60px" height="14px" animation={animation} />
            </MetaGroup>
          </BlogMeta>
        </BlogContent>
      </BlogWrapper>
    );
  }

  return (
    <BlogWrapper>
      <BlogContent>
        <SkeletonBase width="70%" height="24px" margin="0 0 12px 0" animation={animation} />
        <SkeletonText lines={3} animation={animation} />
        <BlogMeta>
          <SkeletonAvatar size="32px" animation={animation} />
          <SkeletonBase width="80px" height="14px" animation={animation} />
        </BlogMeta>
      </BlogContent>
    </BlogWrapper>
  );
};

export default SkeletonBlog;


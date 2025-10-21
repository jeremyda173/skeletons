import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonAvatar from './SkeletonAvatar';
import SkeletonText from './SkeletonText';

const CommentWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  
  ${props => props.isReply && `
    &::before {
      content: '';
      position: absolute;
      left: -60px;
      top: 20px;
      width: 40px;
      height: 2px;
      background: ${props.theme?.cardBorder || '#e0e0e0'};
      opacity: 0.5;
    }
  `}
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const CommentActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const SkeletonComment = ({ 
  isReply = false,
  animation = 'shimmer'
}) => {
  return (
    <CommentWrapper isReply={isReply}>
      <SkeletonAvatar size="40px" animation={animation} />
      <CommentContent>
        <CommentHeader>
          <SkeletonBase width="120px" height="16px" animation={animation} />
          <SkeletonBase width="70px" height="14px" animation={animation} />
        </CommentHeader>
        <SkeletonText lines={2} lastLineWidth="85%" animation={animation} />
        <CommentActions>
          <SkeletonBase width="60px" height="14px" animation={animation} />
          <SkeletonBase width="60px" height="14px" animation={animation} />
        </CommentActions>
      </CommentContent>
    </CommentWrapper>
  );
};

const SkeletonCommentList = ({ 
  items = 3,
  withReplies = false,
  animation = 'shimmer'
}) => {
  return (
    <div>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index}>
          <SkeletonComment animation={animation} />
          {withReplies && index === 0 && (
            <SkeletonComment isReply animation={animation} />
          )}
        </div>
      ))}
    </div>
  );
};

export { SkeletonComment, SkeletonCommentList };
export default SkeletonComment;


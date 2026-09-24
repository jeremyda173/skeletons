import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 12px;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  padding-bottom: 24px;
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineConnector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineLine = styled.div`
  width: 2px;
  height: calc(100% - 16px);
  background: ${props => props.theme?.cardBorder || '#e2e8f0'};
  margin-top: 8px;
  position: absolute;
  top: 16px;
  bottom: 0;
  
  ${TimelineItem}:last-child & {
    display: none;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 2px;
`;

const SkeletonTimeline = ({ items = 4, animation = 'shimmer' }) => {
  return (
    <TimelineWrapper>
      {[...Array(items)].map((_, i) => (
        <TimelineItem key={i}>
          <TimelineConnector>
            <SkeletonBase width="16px" height="16px" radius="50%" animation={animation} />
            <TimelineLine />
          </TimelineConnector>
          <TimelineContent>
            <SkeletonBase width="30%" height="16px" animation={animation} />
            <SkeletonBase width="80%" height="12px" animation={animation} />
            <SkeletonBase width="60%" height="12px" animation={animation} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  );
};

export default SkeletonTimeline;

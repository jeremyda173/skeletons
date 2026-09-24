import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.cardBg || '#1e293b'};
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ValueArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonStats = ({ count = 4, animation = 'shimmer' }) => {
  return (
    <StatsWrapper>
      {[...Array(count)].map((_, i) => (
        <StatCard key={i}>
          <HeaderArea>
            <SkeletonBase width="40%" height="16px" animation={animation} />
            <SkeletonBase width="32px" height="32px" radius="8px" animation={animation} />
          </HeaderArea>
          
          <ValueArea>
            <SkeletonBase width="60%" height="32px" animation={animation} />
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <SkeletonBase width="20%" height="14px" animation={animation} />
              <SkeletonBase width="30%" height="12px" animation={animation} />
            </div>
          </ValueArea>
        </StatCard>
      ))}
    </StatsWrapper>
  );
};

export default SkeletonStats;

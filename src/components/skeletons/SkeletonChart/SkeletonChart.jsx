import styled from 'styled-components';
import SkeletonBase from '@/components/skeletons/SkeletonBase';

const ChartWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const BarChartContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: ${props => props.height || '200px'};
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
`;

const PieChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || '200px'};
`;

const SkeletonChart = ({
  variant = 'bar', // 'bar' | 'pie'
  height = '200px',
  animation = 'shimmer',
  bars = 5
}) => {
  if (variant === 'pie') {
    return (
      <ChartWrapper>
        <PieChartContainer height={height}>
          <SkeletonBase
            width={height}
            height={height}
            radius="50%"
            animation={animation}
          />
        </PieChartContainer>
      </ChartWrapper>
    );
  }

  // Bar chart variant
  return (
    <ChartWrapper>
      <BarChartContainer height={height}>
        {Array.from({ length: bars }).map((_, i) => {
          // Generate pseudo-random heights for a realistic look
          const heights = ['40%', '70%', '50%', '90%', '60%', '30%', '80%'];
          const barHeight = heights[i % heights.length];
          return (
            <SkeletonBase
              key={i}
              width="100%"
              height={barHeight}
              animation={animation}
              animationDelay={`${i * 0.1}s`}
              radius="4px 4px 0 0"
            />
          );
        })}
      </BarChartContainer>
      <SkeletonBase width="100%" height="20px" animation={animation} />
    </ChartWrapper>
  );
};

export default SkeletonChart;

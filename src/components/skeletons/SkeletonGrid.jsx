import styled from 'styled-components';
import SkeletonCard from './SkeletonCard';

const GridWrapper = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '250px'}, 1fr));
    gap: 20px;
  }
  
  @media (min-width: 768px) {
    gap: ${props => props.gap || '24px'};
  }
`;

const SkeletonGrid = ({ 
  items = 6, 
  minWidth = '300px',
  gap = '24px',
  cardVariant = 'default',
  animation = 'shimmer'
}) => {
  return (
    <GridWrapper minWidth={minWidth} gap={gap}>
      {Array.from({ length: items }).map((_, index) => (
        <SkeletonCard key={index} variant={cardVariant} animation={animation} />
      ))}
    </GridWrapper>
  );
};

export default SkeletonGrid;


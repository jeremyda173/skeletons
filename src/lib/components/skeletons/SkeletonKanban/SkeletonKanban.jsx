import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const KanbanWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 8px;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme?.cardBorder || '#e2e8f0'};
    border-radius: 10px;
  }
`;

const KanbanColumn = styled.div`
  min-width: 280px;
  max-width: 320px;
  flex: 1;
  background: ${props => props.theme?.controlBg || '#f8fafc'};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.controlBg || '#1e293b'};
  }
`;

const KanbanCard = styled.div`
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.cardBg || '#0f172a'};
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const SkeletonKanban = ({ columns = 3, cardsPerColumn = 3, animation = 'shimmer' }) => {
  return (
    <KanbanWrapper>
      {[...Array(columns)].map((_, colIdx) => (
        <KanbanColumn key={colIdx}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <SkeletonBase width="40%" height="20px" animation={animation} />
            <SkeletonBase width="24px" height="24px" radius="4px" animation={animation} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[...Array(cardsPerColumn)].map((_, cardIdx) => (
              <KanbanCard key={cardIdx}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <SkeletonBase width="48px" height="16px" radius="16px" animation={animation} />
                  <SkeletonBase width="64px" height="16px" radius="16px" animation={animation} />
                </div>
                <SkeletonBase width="90%" height="16px" animation={animation} />
                <SkeletonBase width="60%" height="16px" animation={animation} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <SkeletonBase width="24px" height="24px" radius="50%" animation={animation} />
                  <SkeletonBase width="20%" height="12px" animation={animation} />
                </div>
              </KanbanCard>
            ))}
          </div>
        </KanbanColumn>
      ))}
    </KanbanWrapper>
  );
};

export default SkeletonKanban;

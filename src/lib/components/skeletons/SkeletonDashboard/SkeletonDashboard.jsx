import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const DashboardWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  gap: 16px;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  padding-right: 16px;
  display: none;
  
  @media (min-width: 640px) {
    display: flex;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ChartArea = styled.div`
  flex: 2;
  border-radius: 8px;
  overflow: hidden;
  height: 150px;
  
  @media (min-width: 768px) {
    height: auto;
  }
`;

const ListArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: ${props => props.theme?.controlBg || '#f8fafc'};
  border-radius: 8px;
`;

const SkeletonDashboard = ({ animation = 'shimmer' }) => {
  return (
    <DashboardWrapper>
      <Sidebar>
        <SkeletonBase width="120px" height="24px" animation={animation} style={{ marginBottom: '16px' }} />
        {[...Array(6)].map((_, i) => (
          <SkeletonBase key={i} width="100%" height="32px" radius="6px" animation={animation} />
        ))}
      </Sidebar>
      
      <MainContent>
        <Header>
          <SkeletonBase width="120px" height="24px" animation={animation} />
          <div style={{ display: 'flex', gap: '12px' }}>
            <SkeletonBase width="32px" height="32px" radius="50%" animation={animation} />
            <SkeletonBase width="32px" height="32px" radius="50%" animation={animation} />
          </div>
        </Header>
        
        <StatsGrid>
          {[...Array(3)].map((_, i) => (
            <StatCard key={i}>
              <SkeletonBase width="60%" height="12px" animation={animation} />
              <SkeletonBase width="80%" height="24px" animation={animation} />
            </StatCard>
          ))}
        </StatsGrid>
        
        <ContentArea>
          <ChartArea>
            <SkeletonBase width="100%" height="100%" animation={animation} />
          </ChartArea>
          <ListArea>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <SkeletonBase width="40px" height="40px" radius="50%" animation={animation} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <SkeletonBase width="80%" height="12px" animation={animation} />
                  <SkeletonBase width="50%" height="10px" animation={animation} />
                </div>
              </div>
            ))}
          </ListArea>
        </ContentArea>
      </MainContent>
    </DashboardWrapper>
  );
};

export default SkeletonDashboard;

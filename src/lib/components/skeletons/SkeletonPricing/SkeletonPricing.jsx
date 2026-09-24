import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }
`;

const PricingCard = styled.div`
  flex: 1;
  max-width: 320px;
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: ${props => props.highlighted ? 'scale(1.05)' : 'scale(1)'};
  z-index: ${props => props.highlighted ? '10' : '1'};
  box-shadow: ${props => props.highlighted ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'};
  border-color: ${props => props.highlighted ? (props.theme?.accentPrimary || '#3b82f6') : (props.theme?.cardBorder || '#e2e8f0')};

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.cardBg || '#1e293b'};
    border-color: ${props => props.highlighted ? (props.theme?.accentPrimary || '#3b82f6') : (props.theme?.cardBorder || '#334155')};
  }
`;

const SkeletonPricing = ({ plans = 3, animation = 'shimmer' }) => {
  return (
    <PricingWrapper>
      {[...Array(plans)].map((_, i) => {
        const isHighlighted = i === Math.floor(plans / 2);
        return (
          <PricingCard key={i} highlighted={isHighlighted}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <SkeletonBase width="40%" height="20px" animation={animation} />
              <SkeletonBase width="60%" height="14px" animation={animation} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
              <SkeletonBase width="40px" height="24px" animation={animation} />
              <SkeletonBase width="80px" height="48px" animation={animation} />
              <SkeletonBase width="40px" height="16px" animation={animation} />
            </div>
            
            <SkeletonBase width="100%" height="48px" radius="8px" animation={animation} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              {[...Array(5)].map((_, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <SkeletonBase width="20px" height="20px" radius="50%" animation={animation} />
                  <SkeletonBase width="70%" height="14px" animation={animation} />
                </div>
              ))}
            </div>
          </PricingCard>
        );
      })}
    </PricingWrapper>
  );
};

export default SkeletonPricing;

import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const EcommerceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const GallerySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

const DetailsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PriceArea = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const ControlsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonEcommerce = ({ animation = 'shimmer' }) => {
  return (
    <EcommerceWrapper>
      <GallerySection>
        <MainImage>
          <SkeletonBase width="100%" height="100%" animation={animation} />
        </MainImage>
        <ThumbnailContainer>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ width: '80px', flexShrink: 0, aspectRatio: '1 / 1', borderRadius: '8px', overflow: 'hidden' }}>
              <SkeletonBase width="100%" height="100%" animation={animation} />
            </div>
          ))}
        </ThumbnailContainer>
      </GallerySection>
      
      <DetailsSection>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonBase width="40%" height="14px" animation={animation} />
          <SkeletonBase width="80%" height="32px" animation={animation} />
          <SkeletonBase width="60%" height="32px" animation={animation} />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[...Array(5)].map((_, i) => (
              <SkeletonBase key={i} width="16px" height="16px" radius="50%" animation={animation} />
            ))}
          </div>
          <SkeletonBase width="60px" height="14px" animation={animation} />
        </div>
        
        <PriceArea>
          <SkeletonBase width="120px" height="36px" animation={animation} />
          <SkeletonBase width="60px" height="20px" animation={animation} />
        </PriceArea>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonBase width="100%" height="16px" animation={animation} />
          <SkeletonBase width="100%" height="16px" animation={animation} />
          <SkeletonBase width="80%" height="16px" animation={animation} />
        </div>
        
        <ControlsArea>
          <div style={{ display: 'flex', gap: '16px' }}>
            <SkeletonBase width="120px" height="48px" radius="8px" animation={animation} />
            <SkeletonBase width="100%" height="48px" radius="8px" animation={animation} />
          </div>
        </ControlsArea>
      </DetailsSection>
    </EcommerceWrapper>
  );
};

export default SkeletonEcommerce;

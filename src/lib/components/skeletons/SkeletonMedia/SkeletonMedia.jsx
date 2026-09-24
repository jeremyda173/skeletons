import styled from 'styled-components';
import SkeletonBase from '@/lib/components/skeletons/SkeletonBase';

const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${props => props.theme?.skeletonBg || '#e2e8f0'};
  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.skeletonBg || '#334155'};
  }
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ControlsWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
`;

const BottomControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const SkeletonMedia = ({ animation = 'shimmer' }) => {
  return (
    <MediaWrapper>
      <SkeletonBase 
        width="100%" 
        height="100%" 
        animation={animation} 
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      
      <PlayButtonWrapper>
        <SkeletonBase 
          width="64px" 
          height="64px" 
          radius="50%" 
          animation={animation} 
          style={{ background: 'rgba(255, 255, 255, 0.3)' }}
        />
      </PlayButtonWrapper>
      
      <ControlsWrapper>
        {/* Progress bar */}
        <SkeletonBase 
          width="100%" 
          height="6px" 
          radius="4px" 
          animation={animation} 
          style={{ background: 'rgba(255, 255, 255, 0.3)' }}
        />
        <BottomControls>
          {/* Play/pause icon */}
          <SkeletonBase 
            width="24px" 
            height="24px" 
            radius="4px" 
            animation={animation} 
            style={{ background: 'rgba(255, 255, 255, 0.3)' }}
          />
          {/* Volume/settings icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <SkeletonBase 
              width="24px" 
              height="24px" 
              radius="4px" 
              animation={animation} 
              style={{ background: 'rgba(255, 255, 255, 0.3)' }}
            />
            <SkeletonBase 
              width="24px" 
              height="24px" 
              radius="4px" 
              animation={animation} 
              style={{ background: 'rgba(255, 255, 255, 0.3)' }}
            />
          </div>
        </BottomControls>
      </ControlsWrapper>
    </MediaWrapper>
  );
};

export default SkeletonMedia;

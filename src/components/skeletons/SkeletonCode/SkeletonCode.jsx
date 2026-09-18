import styled from 'styled-components';
import SkeletonBase from '@/components/skeletons/SkeletonBase';

const CodeWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme?.codeBg || '#1e293b'}; // Default dark for code
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.2);
  gap: 8px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const CodeBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkeletonCode = ({ 
  lines = 4, 
  animation = 'pulse' // pulse or shimmer works well on dark bg
}) => {
  return (
    <CodeWrapper>
      <Header>
        <Dot color="#ff5f56" />
        <Dot color="#ffbd2e" />
        <Dot color="#27c93f" />
      </Header>
      <CodeBody>
        {Array.from({ length: lines }).map((_, i) => {
          // Generate realistic code indentations and lengths
          const widths = ['60%', '80%', '40%', '70%', '50%', '90%'];
          const indentations = ['0px', '24px', '24px', '48px', '24px', '0px'];
          
          return (
            <SkeletonBase
              key={i}
              width={widths[i % widths.length]}
              height="16px"
              animation={animation}
              style={{
                marginLeft: indentations[i % indentations.length],
                background: 'rgba(255, 255, 255, 0.1)' // Lighter overlay for dark background
              }}
              animationDelay={`${i * 0.1}s`}
            />
          );
        })}
      </CodeBody>
    </CodeWrapper>
  );
};

export default SkeletonCode;

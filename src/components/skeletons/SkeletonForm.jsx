import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';

const FormWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FormLabel = styled.div`
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const SkeletonForm = ({ 
  fields = 4,
  animation = 'shimmer'
}) => {
  return (
    <FormWrapper>
      {Array.from({ length: fields }).map((_, index) => (
        <FormGroup key={index}>
          <FormLabel>
            <SkeletonBase width="120px" height="14px" animation={animation} />
          </FormLabel>
          <SkeletonBase width="100%" height="40px" radius="8px" animation={animation} />
        </FormGroup>
      ))}
      
      <ButtonGroup>
        <SkeletonBase width="100px" height="44px" radius="8px" animation={animation} />
        <SkeletonBase width="100px" height="44px" radius="8px" animation={animation} />
      </ButtonGroup>
    </FormWrapper>
  );
};

export default SkeletonForm;


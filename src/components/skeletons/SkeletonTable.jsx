import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import SkeletonAvatar from './SkeletonAvatar';

const TableWrapper = styled.div`
  width: 100%;
  border: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  border-radius: 12px;
  overflow: hidden;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 16px;
  padding: 16px;
  background: ${props => props.theme?.cardBorder || '#f8f9fa'};
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  opacity: 0.5;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 16px;
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  background: ${props => props.theme?.cardBorder || '#f8f9fa'};
  opacity: 0.5;
`;

const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

const CompactTableRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SkeletonTable = ({ 
  rows = 5, 
  columns = 4,
  columnWidths,
  animation = 'shimmer',
  variant = 'default' // default, with-actions, with-avatars, compact, with-pagination
}) => {
  const gridColumns = columnWidths || `repeat(${columns}, 1fr)`;
  
  if (variant === 'with-actions') {
    const actionColumns = `${gridColumns} 120px`;
    return (
      <TableWrapper>
        <TableHeader columns={actionColumns}>
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBase key={index} width="80%" height="16px" animation={animation} />
          ))}
          <SkeletonBase width="100%" height="16px" animation={animation} />
        </TableHeader>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow key={rowIndex} columns={actionColumns}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <SkeletonBase key={colIndex} width="90%" height="14px" animation={animation} />
            ))}
            <TableActions>
              <SkeletonBase width="24px" height="24px" radius="4px" animation={animation} />
              <SkeletonBase width="24px" height="24px" radius="4px" animation={animation} />
            </TableActions>
          </TableRow>
        ))}
      </TableWrapper>
    );
  }

  if (variant === 'with-avatars') {
    const avatarColumns = `60px ${gridColumns}`;
    return (
      <TableWrapper>
        <TableHeader columns={avatarColumns}>
          <SkeletonBase width="100%" height="16px" animation={animation} />
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBase key={index} width="80%" height="16px" animation={animation} />
          ))}
        </TableHeader>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow key={rowIndex} columns={avatarColumns}>
            <SkeletonAvatar size="32px" animation={animation} />
            {Array.from({ length: columns }).map((_, colIndex) => (
              <SkeletonBase key={colIndex} width="90%" height="14px" animation={animation} />
            ))}
          </TableRow>
        ))}
      </TableWrapper>
    );
  }

  if (variant === 'compact') {
    return (
      <TableWrapper>
        <TableHeader columns={gridColumns}>
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBase key={index} width="80%" height="14px" animation={animation} />
          ))}
        </TableHeader>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <CompactTableRow key={rowIndex} columns={gridColumns}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <SkeletonBase key={colIndex} width="90%" height="12px" animation={animation} />
            ))}
          </CompactTableRow>
        ))}
      </TableWrapper>
    );
  }

  if (variant === 'with-pagination') {
    return (
      <TableWrapper>
        <TableHeader columns={gridColumns}>
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBase key={index} width="80%" height="16px" animation={animation} />
          ))}
        </TableHeader>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow key={rowIndex} columns={gridColumns}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <SkeletonBase key={colIndex} width="90%" height="14px" animation={animation} />
            ))}
          </TableRow>
        ))}
        <PaginationWrapper>
          <PaginationInfo>
            <SkeletonBase width="120px" height="14px" animation={animation} />
          </PaginationInfo>
          <PaginationControls>
            <SkeletonBase width="32px" height="32px" radius="4px" animation={animation} />
            <SkeletonBase width="32px" height="32px" radius="4px" animation={animation} />
            <SkeletonBase width="32px" height="32px" radius="4px" animation={animation} />
            <SkeletonBase width="32px" height="32px" radius="4px" animation={animation} />
          </PaginationControls>
        </PaginationWrapper>
      </TableWrapper>
    );
  }

  // Default variant
  return (
    <TableWrapper>
      <TableHeader columns={gridColumns}>
        {Array.from({ length: columns }).map((_, index) => (
          <SkeletonBase key={index} width="80%" height="16px" animation={animation} />
        ))}
      </TableHeader>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex} columns={gridColumns}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <SkeletonBase key={colIndex} width="90%" height="14px" animation={animation} />
          ))}
        </TableRow>
      ))}
    </TableWrapper>
  );
};

export default SkeletonTable;


import styled from 'styled-components';
import { SkeletonTable } from '../skeletons';
import useLoading from '../../hooks/useLoading';

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
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  background: ${props => props.theme?.cardBorder || '#f8f9fa'};
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#e0e0e0'};
  font-weight: 600;
  color: ${props => props.theme?.text || '#333'};
  opacity: 0.8;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme?.cardBorder || '#f0f0f0'};
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.theme?.cardBorder || '#f8f9fa'};
    opacity: 0.8;
  }
`;

const Cell = styled.div`
  color: ${props => props.theme?.text || '#666'};
  opacity: 0.8;
  font-size: 14px;
`;

const tableData = [
  { id: '001', name: 'Product A', category: 'Electronics', price: '$299' },
  { id: '002', name: 'Product B', category: 'Clothing', price: '$49' },
  { id: '003', name: 'Product C', category: 'Books', price: '$19' },
  { id: '004', name: 'Product D', category: 'Home', price: '$89' },
  { id: '005', name: 'Product E', category: 'Sports', price: '$129' },
];

const ActualTable = () => {
  return (
    <TableWrapper>
      <TableHeader>
        <div>ID</div>
        <div>Name</div>
        <div>Category</div>
        <div>Price</div>
      </TableHeader>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <Cell>{row.id}</Cell>
          <Cell>{row.name}</Cell>
          <Cell>{row.category}</Cell>
          <Cell>{row.price}</Cell>
        </TableRow>
      ))}
    </TableWrapper>
  );
};

const TableExample = ({ loadingTime = 2000 }) => {
  const { loading } = useLoading(loadingTime);

  return loading ? (
    <SkeletonTable rows={5} columns={4} />
  ) : (
    <ActualTable />
  );
};

export default TableExample;


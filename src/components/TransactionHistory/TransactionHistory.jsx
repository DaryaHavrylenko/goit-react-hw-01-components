import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  font-family: ${p => p.theme.fonts.heading};
  width: 800px;
  margin: 0 auto;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.md};
  &:hover {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
const TableHead = styled.tr`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  background-color: ${p => p.theme.colors.table};
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;


`;
const TableItem = styled.td`
text-align: center;
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.normal};
text-transform: capitalize;

`
const Captions = styled.th`
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
`
const TrTable = styled.tr`
:nth-child(2n) {
  background-color: ${p => p.theme.colors.border} ;
}
`


export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <TableHead>
          <Captions>Type</Captions>
          <Captions>Amount</Captions>
          <Captions>Currency</Captions>
        </TableHead>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrTable key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </TrTable>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

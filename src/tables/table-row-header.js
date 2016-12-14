import React from 'react';
import { TableHeaderColumn, TableRow } from 'material-ui/Table';

const TableRowHeader = (props) => {
  const { headers } = props;
  let index = 0;
  return (
    <TableRow>
      {
      headers.map((header) => (
        <TableHeaderColumn {...props} key={index++}>{header.val}</TableHeaderColumn>)
      )
      }
    </TableRow>
  );
};

TableRowHeader.propTypes = {
  headers: React.PropTypes.any,
  colSpan: React.PropTypes.any,
  style: React.PropTypes.object,
};

export default TableRowHeader;

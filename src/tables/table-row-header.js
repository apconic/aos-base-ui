import React from 'react';
import { TableHeaderColumn, TableRow } from 'material-ui/Table';

const TableRowHeader = (props) => {
  const { headers, rowNumber, ...other } = props;
  let index = 0;
  return (
    <TableRow>
      {
      headers.map((header) => (
        <TableHeaderColumn {...other} key={index++}>{header.val}</TableHeaderColumn>)
      )
      }
    </TableRow>
  );
};

TableRowHeader.propTypes = {
  headers: React.PropTypes.any,
  colSpan: React.PropTypes.any,
  style: React.PropTypes.object,
  rowNumber: React.PropTypes.any,
};

export default TableRowHeader;

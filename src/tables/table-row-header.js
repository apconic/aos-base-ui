import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const TableRowHeader = (props) => {
  const { headers, rowNumber, ...other } = props;
  let index = 0;
  return (
    <TableRow>
      {
      headers.map((header) => (
        <TableCell {...other} key={index++}>{header.val}</TableCell>)
      )
      }
    </TableRow>
  );
};

TableRowHeader.propTypes = {
  headers: PropTypes.any,
  colSpan: PropTypes.any,
  style: PropTypes.object,
  rowNumber: PropTypes.any,
};

export default TableRowHeader;

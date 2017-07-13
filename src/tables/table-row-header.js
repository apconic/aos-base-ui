import React from 'react';
import PropTypes from 'prop-types';
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
  headers: PropTypes.any,
  colSpan: PropTypes.any,
  style: PropTypes.object,
  rowNumber: PropTypes.any,
};

export default TableRowHeader;

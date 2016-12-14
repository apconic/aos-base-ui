import React from 'react';
import { Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableBody } from 'material-ui/Table';
import ActionButton from '../action-button';
import * as Colors from 'material-ui/styles/colors';

import { isArray } from 'lodash';

export default class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderRowColumns = this.renderRowColumns.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeaders = this.renderHeaders.bind(this);
    this.onRowSelection = this.onRowSelection.bind(this);
    this.onActionClick = this.onActionClick.bind(this);
    this.state = { selectedRows: [], selectedRowNumbers: [] };
  }

  onActionClick(action) {
    if (action.onTouchTap) {
      action.onTouchTap(this.selectedRows);
    }
  }

  onRowSelection(selection) {
    const { rows } = this.props.data;
    if (selection === 'all') {
      this.selectedRows = rows;
    } else if (isArray(selection)) {
      const selectedRows = selection.map((selectedIndex) => rows[selectedIndex]);
      this.selectedRows = selectedRows;
    } else {
      this.selectedRows = [];
    }
  }

  renderRowColumns(row, fields) {
    let index = 0;
    return fields.map((field) => (
      <TableRowColumn key={index++}>{row[field]}</TableRowColumn>
    ));
  }

  renderRow() {
    const { rows, fields } = this.props.data;
    return rows.map((row, index) => (
      <TableRow key={index} >
        {this.renderRowColumns(row, fields)}
      </TableRow>
    ));
  }

  renderTitleWithButton() {
    let index = 0;
    const { title, actions } = this.props.data;
    return (
      <div>
        <div style={{ display: 'inline-block', float: 'left', color: Colors.darkBlack }}>
          {title}
        </div>
        <div style={{ display: 'inline-block', float: 'right' }}>
          {actions.map((action) => {
            let disabled = false;
            if (action.type !== 'ADD') {
              disabled = this.state.selectedRows.length === 0;
            }
            return (
              <ActionButton
                key={index++}
                { ...action }
                onTouchTap={this.onActionClick.bind(this, action)} // eslint-disable-line
                style={{ margin: '0.5em' }}
                disabled={disabled}
              />
            );
          })}
        </div>
      </div>
    );
  }

  renderTitle() {
    const { headers } = this.props.data;
    return (
      <TableRow>
        <TableHeaderColumn style={{ fontSize: 20 }} colSpan={headers.length}>
          {this.renderTitleWithButton()}
        </TableHeaderColumn>
      </TableRow>
    );
  }

  renderHeaders() {
    const { headers } = this.props.data;
    let index = 0;
    return (
      <TableRow>
        {
          headers.map((header) =>
            (<TableHeaderColumn key={index++}>{header.val}</TableHeaderColumn>)
          )
        }
      </TableRow>
    );
  }

  render() {
    const tableOptions = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      displayRowCheckbox: true,
      height: '310px',
      style: { overflowX: 'auto' },
    };
    return (
      <Table {...tableOptions} onRowSelection={this.onRowSelection}>
        <TableHeader {...tableOptions}>
         {this.renderTitle()}
         {this.renderHeaders()}
        </TableHeader>
        <TableBody {...tableOptions}>
          {
            this.renderRow()
          }
        </TableBody>
      </Table>
    );
  }
}

SimpleTable.propTypes = {
  data: React.PropTypes.any,
  title: React.PropTypes.string,
};

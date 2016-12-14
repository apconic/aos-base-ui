import React from 'react';
import { Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableBody } from 'material-ui/Table';
import ActionButton from '../action-button';
import TableRowHeader from './table-row-header';
import * as Colors from 'material-ui/styles/colors';
import { split } from 'lodash';

export default class SimpleRowActionTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderRowColumns = this.renderRowColumns.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeaders = this.renderHeaders.bind(this);
  }

  renderRowColumns(row, fields) {
    let index = 0;
    return fields.map((field) => {
      const tokens = split(field, '.', 3);
      let value = row[tokens[0]];
      for (let i = 1; i < tokens.length; i++) {
        value = value ? value[tokens[i]] : '';
      }
      return <TableRowColumn key={index++}>{value}</TableRowColumn>;
    });
  }

  renderActions(row, actions) {
    if (!actions || actions.length === 0) return '';
    let index = 0;
    return (
      <TableRowColumn>
        <div className="row">
          {actions.map((action) =>
            (
            <ActionButton
              key={index++}
              type={action.type}
              onTouchTap={action.onTouchTap(row)}
              style={{ margin: '0.5em' }}
            />
            )
          )}
        </div>
      </TableRowColumn>
    );
  }

  renderRow() {
    const { rows, fields, actions } = this.props.data;
    let index = 0;
    return rows.map((row) => (
      <TableRow key={index++}>
        {
          this.renderRowColumns(row, fields)
        }
        {
          this.renderActions(row, actions)
        }
      </TableRow>
    ));
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

  renderTitle() {
    const { title, headers } = this.props.data;
    if (title) {
      const header = [{ val: title }];
      const style = {
        fontSize: 15,
        fontWeight: 600,
        color: Colors.darkBlack,
        backgroundColor: Colors.grey200,
      };
      return (
        <TableRowHeader headers={header} colSpan={headers.length} style={style} />
      );
    }
    return '';
  }

  render() {
    const { headers, height } = this.props.data;
    const tableOptions = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      displayRowCheckbox: false,
      height: height || '200px',
    };
    return (
      <Table {...tableOptions}>
        <TableHeader {...tableOptions}>
          {this.renderTitle()}
          <TableRowHeader headers={headers} />
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

SimpleRowActionTable.propTypes = {
  data: React.PropTypes.object,
  height: React.PropTypes.any,
};

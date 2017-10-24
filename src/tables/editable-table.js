import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableBody } from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import ActionButton from '../action-button';
import TableRowHeader from './table-row-header';
import * as Colors from 'material-ui/styles/colors';
import { split, filter } from 'lodash';

export default class EditTable extends Component {
  constructor (props) {
    super(props);
    this.renderRowColumns = this.renderRowColumns.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeaders = this.renderHeaders.bind(this);
  }

  renderRowColumns (row, fields) {
    let index = 0;
    return fields.map((field) => {
      const tokens = split(field.val, '.', 3);
      let value = row[tokens[0]];
      index += 1;
      for (let i = 1; i < tokens.length; i++) {
        value = value ? value[tokens[i]] : '';
      }
      if (field.edit && (typeof value) === 'boolean') {
        return <TableRowColumn key={index}>
          <Toggle
            onToggle={field.onChange(row)}
            toggled={value}
          />
        </TableRowColumn>;
      }
      return <TableRowColumn key={index}>{value}</TableRowColumn>;
    });
  }

  renderActions (row, actions) {
    if (!actions || actions.length === 0) return '';
    const actionsToShow = filter(actions, (action) => {
      if (action.show) {
        return action.show(row);
      }
      return true;
    });
    let index = 0;
    return (
      <TableRowColumn>
        <div className='row' style={{ marginLeft: '16px' }}>
          {actionsToShow.map((action) =>
            (
              <ActionButton
                key={index++}
                type={action.type}
                onTouchTap={action.onTouchTap(row)}
                style={{ margin: '0.5em' }}
                icon={action.icon}
              />
            )
          )}
        </div>
      </TableRowColumn>
    );
  }

  renderRow () {
    const { rows, fields, actions } = this.props.data;
    let index = 0;
    return rows.map((row) => (
      <TableRow key={index++}>
        {
          this.renderActions(row, actions)
        }
        {
          this.renderRowColumns(row, fields)
        }
      </TableRow>
    ));
  }

  renderHeaders () {
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

  renderTitle () {
    const { title, headers } = this.props.data;
    console.log(this.props.data);
    if (title) {
      const header = [{ val: title }];
      const style = {
        fontSize: 15,
        fontWeight: 600,
        color: Colors.darkBlack,
        backgroundColor: Colors.grey200
      };
      return (
        <TableRowHeader headers={header} colSpan={headers.length} style={style} />
      );
    }
    return '';
  }

  render () {
    const { headers } = this.props.data;
    /* const tableOptions = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      displayRowCheckbox: false,
      height: height || '200px'
    }; */

    const tableHeaderProps = {
      displaySelectAll: false,
      adjustForCheckbox: false,
      enableSelectAll: false
    };

    const tableProps = {
      height: '60vh',
      selectable: false,
      multiSelectable: false
    };

    const tableBodyProps = {
      displayRowCheckbox: false,
      stripedRows: true,
      showRowHover: true
    };

    return (
      <Table {...tableProps}>
        <TableHeader {...tableHeaderProps}>
          {this.renderTitle()}
          <TableRowHeader headers={headers} />
        </TableHeader>
        <TableBody {...tableBodyProps}>
          {
            this.renderRow()
          }
        </TableBody>
      </Table>
    );
  }
}

EditTable.propTypes = {
  data: PropTypes.object,
  height: PropTypes.any
};

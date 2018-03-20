import React, { Component } from "react";
import { Column, Table, AutoSizer, SortDirection } from "react-virtualized";
import { Panel } from "aos-base-ui";
import { cloneDeep, set, orderBy, isNumber } from "lodash";
import "react-virtualized/styles.css";
import { indigo900 } from 'material-ui/styles/colors';
import "./table.css";
import moment from 'moment';

class SimpleVirtualizedTable extends Component {
  constructor(props) {
    super(props);
    const sortBy = this.getSortBy();
    const sortDirection = this.getSortDirection();
    const sortedList = this.props.sort ? this.sortList({
      sortBy,
      sortDirection,
      list: this.props.list
    }) : this.props.list;
    this.state = {
      sortBy,
      sortDirection,
      sortedList
    };
  }

  componentWillReceiveProps(newProps) {
    const { sortBy, sortDirection } = this.state;
    const sortedList = newProps.sort ? this.sortList({ sortBy, sortDirection, list: newProps.list }) : newProps.list;
    this.setState({ sortedList });
  }

  getSortDirection = () => {
    return this.props.sortDirection ? ((this.props.sortDirection === 'ASC') ? SortDirection.ASC : SortDirection.DESC) : SortDirection.ASC;
  }

  getSortBy = () => {
    return this.props.sort ? (this.props.sortBy ? this.props.sortBy : this.props.columns[0].key) : null;
  };

  getData = (list, index) => {
    const { columns } = this.props;
    const row = cloneDeep(list[index]);
    columns.forEach(element => {
      if (element.type === 'date') {
        if(row[element.key]) {
          set(row, element.key, moment(row[element.key]).format('DD/MM/YYYY HH:mm:ss'));
        }
      }
    });
    return row;
  };

  getColumnWidth = (width, totalWidth) => {
    return width ? ((totalWidth * width)/100) : 150;
  }

  sort = ({ sortBy, sortDirection }) => {
    const { list } = this.props;
    const sortedList = this.sortList({ sortBy, sortDirection, list });
    this.setState({ sortedList, sortDirection, sortBy });
  };

  sortList = ({ sortBy, sortDirection, list }) => {
    let sortedList = [];
    sortedList =
      sortDirection === SortDirection.ASC
        ? orderBy(list, [sortBy], ["asc"])
        : orderBy(list, [sortBy], ["desc"]);
    return sortedList;
  };

  rowClassName = ({ index }) => {
    if (index < 0) {
      return "headerRow";
    }
    return index % 2 === 0 ? "evenRow" : "oddRow";
  };

  noRowsRenderer = () => <div className="noRows">No rows</div>;

  render() {
    const { sortBy, sortDirection, sortedList } = this.state;
    const { columns, actions, sort } = this.props;
    const rowGetter = ({ index }) => this.getData(sortedList, index);
    const actionCellRender = ({
      columnData,
      rowData,
    }) => {
      if (cellData !== null) {
        return(
          <a style={{ color: indigo900, textDecorationLine: 'underline'}}
          onClick={columnData.onClick(rowData)}>
          {columnData.text}
          </a>
       )
      }
      return <div />;
    }

    const cellRender = ({
      cellData,
      columnData,
      rowData,
    }) => {
      if (cellData !== null) {
        if (columnData.onClick) {
          return(
            <div>
              <a style={{ color: indigo900, textDecorationLine: 'underline'}}
              onClick={columnData.onClick(rowData)}>
                {cellData}
              </a>
            </div>
          )
        }
        return(
          <div> {cellData} </div>
        )
      }
      return <div />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Panel style={{ marginTop: "16px", height: 400 }}>
              <AutoSizer>
                {({ width }) => (
                  <Table
                    width={width}
                    height={350}
                    headerHeight={30}
                    rowHeight={30}
                    sort={sort ? this.sort : null}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    rowCount={this.props.list.length}
                    rowGetter={rowGetter}
                    noRowsRenderer={this.noRowsRenderer}
                    headerClassName="headerColumn"
                    rowClassName={this.rowClassName}
                  >
                    {columns ? columns.map(element => (
                      <Column
                        label={element.label}
                        dataKey={element.key}
                        width={this.getColumnWidth(element.width, width)}
                        flexGrow={1}
                        className="exampleColumn"
                        columnData={element}
                        cellRenderer={cellRender}
                      />
                    )) : null}
                    {actions ? actions.map(element =>
                      <Column 
                      width={100}
                      cellRenderer={actionCellRender}
                      action={element}
                      columnData={element}
                      className="exampleColumn"
                      />
                    ) : null}
                  </Table>
                )}
              </AutoSizer>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleVirtualizedTable;
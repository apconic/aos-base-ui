import React, { Component } from 'react';
import { Column, Table, AutoSizer, SortDirection } from 'react-virtualized';
import { Panel } from 'aos-base-ui';
import _ from 'lodash';
import 'react-virtualized/styles.css';
import '../table.css';

class ReactVirtualisedTable extends Component {
  constructor(props) {
    super(props);
    const sortBy = this.getSortBy();
    const sortDirection = SortDirection.ASC;
    const sortedList = this.sortList({ sortBy, sortDirection: SortDirection.ASC });
    this.state = {
      sortBy,
      sortDirection,
      sortedList,
    };
  }

  getSortBy = () => this.props.sortBy ? this.props.sortBy : this.props.columns[0].key;

  getData = (list, index) => list[index]

  sort = ({ sortBy, sortDirection }) => {
    const sortedList = this.sortList({ sortBy, sortDirection });
    this.setState({ sortedList, sortDirection, sortBy });
  }

  sortList = ({ sortBy, sortDirection }) => {
    let sortedList = [];
    const { list } = this.props;
    sortedList = sortDirection === SortDirection.ASC ? _.orderBy(list, [sortBy], ['asc']) : _.orderBy(list, [sortBy], ['desc']);
    return sortedList;
  }

  rowClassName = ({ index }) => {
    if (index < 0) {
      return 'headerRow';
    }
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
  }

  noRowsRenderer = () => <div className="noRows">No rows</div>

  render() {
    const { sortBy, sortDirection, sortedList } = this.state;
    const { columns } = this.props;
    const rowGetter = ({ index }) => this.getData(sortedList, index);
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Panel style={{ marginTop: '16px', height: 400 }} >
              <AutoSizer>
                {({ width }) => (
                  <Table
                    width={width}
                    height={400}
                    headerHeight={30}
                    rowHeight={30}
                    sort={this.sort}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    rowCount={this.props.list.length}
                    rowGetter={rowGetter}
                    noRowsRenderer={this.noRowsRenderer}
                    headerClassName="headerColumn"
                    rowClassName={this.rowClassName}
                  >
                    {columns.map(element => <Column label={element.label} dataKey={element.key} width={250} flexGrow={1} className="exampleColumn" />)}
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

export default ReactVirtualisedTable;

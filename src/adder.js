import React from 'react';
import { findIndex } from 'lodash';
import DataField from './data-fields/data-field';
import MutableGridList from './mutable-grid-list';
import ActionButton from './action-button';
import BaseSubheader from './base-subheader';

function isNullOrUndefined(x) { return !(x != null); }

export default class Adder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: null };
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onAddTouchTap = this.onAddTouchTap.bind(this);
  }

  onItemSelect(docField, value) {
    this.setState({ selectedItem: value });
  }

  onAddTouchTap() {
    const { addAction, valueKey, initialItems, storeFunction } = this.props;
    if (addAction && !isNullOrUndefined(this.state.selectedItem)) {
      const index = findIndex(initialItems, (item) => item[valueKey] === this.state.selectedItem);
      addAction(storeFunction(initialItems[index]));
      this.setState({ selectedItem: null });
    }
  }

  render() {
    const {
      initialItems,
      value,
      tileAction,
      displayName,
      storageType,
      gridDisplayKey,
      selectDisplayConverter,
      selectFilterFunction,
    } = this.props;
    const items = initialItems.map(selectDisplayConverter);

    return (
      <div>
        <div className="row middle-xs">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <DataField
              type="FILTER_SELECT"
              docField="selectedItem"
              displayName={displayName}
              value={this.state.selectedItem}
              onChange={this.onItemSelect}
              initialArray={items}
              filterArray={value}
              filterFunction={selectFilterFunction}
            />
          </div>
          <div>
            <ActionButton type="ADD" onTouchTap={this.onAddTouchTap} />
          </div>
        </div>
        <div style={{ marginTop: '0.3em'}}>
          <BaseSubheader>Selected</BaseSubheader>
          <MutableGridList
            cellHeight={60}
            values={value || []}
            action={tileAction}
            type={storageType}
            gridDisplayKey={gridDisplayKey}
          />
        </div>
      </div>
    );
  }
}

Adder.propTypes = {
  initialItems: React.PropTypes.array,
  value: React.PropTypes.array,
  addAction: React.PropTypes.func,
  tileAction: React.PropTypes.func,
  displayName: React.PropTypes.string,
  selectFilterFunction: React.PropTypes.func,
  storageType: React.PropTypes.string,
  gridDisplayKey: React.PropTypes.string,
  valueKey: React.PropTypes.string,
  selectDisplayConverter: React.PropTypes.func,
  storeFunction: React.PropTypes.func,
};

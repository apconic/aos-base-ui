import React from 'react';
import { findIndex } from 'lodash';
import SimpleGridList from './simple-grid-list';
import SimpleGridTile from './simple-grid-tile';
import ActionButton from './action-button';

export default class MutableGridList extends React.Component {
  constructor(props) {
    super(props);
    this.onGridTileAction = this.onGridTileAction.bind(this);
  }

  onGridTileAction(val) {
    const { action, values, type, gridDisplayKey } = this.props;
    if (type === 'TEXT') {
      return () => action(findIndex(values, (v) => v === val));
    }
    return () => action(findIndex(values, (v) => v[gridDisplayKey] === val));
  }

  renderGridTiles(type, gridDisplayKey, values) {
    let index = 0;
    return (
      values.map((val) => {
        if (type === 'TEXT') {
          return (
            <SimpleGridTile
              key={index++}
              title={val}
              titlePosition="top"
              titleBackground="rgba(96, 96, 96, 0.7)"
              actionIcon={<ActionButton
                type="ICON"
                icon="indeterminate_check_box"
                onTouchTap={this.onGridTileAction(val)}
              />}
            />
          );
        }
        return (<SimpleGridTile
          key={index++}
          title={val[gridDisplayKey]}
          titlePosition="top"
          titleBackground="rgba(96, 96, 96, 0.7)"
          actionIcon={<ActionButton
            type="ICON"
            icon="indeterminate_check_box"
            onTouchTap={this.onGridTileAction(val[gridDisplayKey])}
          />}
        />);
      })
    );
  }

  render() {
    const { values, action, type, gridDisplayKey, ...other } = this.props;
    return (
      <SimpleGridList {...other}>
        {this.renderGridTiles(type, gridDisplayKey, values, action)}
      </SimpleGridList>
    );
  }
}

MutableGridList.propTypes = {
  values: React.PropTypes.array,
  action: React.PropTypes.func,
  gridDisplayKey: React.PropTypes.string,
  type: React.PropTypes.string,
};

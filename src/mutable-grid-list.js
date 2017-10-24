import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import SimpleGridList from './simple-grid-list';
import SimpleGridTile from './simple-grid-tile';
import ActionButton from './action-button';
import { blue } from 'material-ui/colors';
import { GridListTileBar } from 'material-ui/GridList';

export default class MutableGridList extends Component {
  constructor (props) {
    super(props);
    this.onGridTileAction = this.onGridTileAction.bind(this);
  }

  onGridTileAction (val) {
    const { action, values, type, gridDisplayKey } = this.props;
    if (type === 'TEXT') {
      return () => action(findIndex(values, (v) => v === val));
    }
    return () => action(findIndex(values, (v) => v[gridDisplayKey] === val));
  }

  renderGridTiles (type, gridDisplayKey, values) {
    let index = 0;
    return (
      values.map((val) => {
        index += 1;
        if (type === 'TEXT') {
          return (
            <SimpleGridTile key={index}>
              <GridListTileBar
                title={val}
                titlePosition='top'
                style={{ background: blue[300] }}
                actionIcon={
                  <ActionButton
                    type='ICON'
                    icon='indeterminate_check_box'
                    onClick={this.onGridTileAction(val)}
                  />
                }
              />
            </SimpleGridTile>
          );
        }
        return (
          <SimpleGridTile key={index}>
            <GridListTileBar
              title={val[gridDisplayKey]}
              titlePosition='top'
              style={{ background: blue[300] }}
              actionIcon={
                <ActionButton
                  type='ICON'
                  icon='indeterminate_check_box'
                  onClick={this.onGridTileAction(val[gridDisplayKey])}
                />
              }
            />
          </SimpleGridTile>
        );
      })
    );
  }

  render () {
    const { values, action, type, gridDisplayKey, ...other } = this.props;
    return (
      <SimpleGridList {...other}>
        {this.renderGridTiles(type, gridDisplayKey, values, action)}
      </SimpleGridList>
    );
  }
}

MutableGridList.propTypes = {
  values: PropTypes.array,
  action: PropTypes.func,
  gridDisplayKey: PropTypes.string,
  type: PropTypes.string
};

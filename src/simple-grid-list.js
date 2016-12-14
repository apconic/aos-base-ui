import React from 'react';
import { GridList } from 'material-ui/GridList';

const SimpleGridList = (props) => (
  <GridList {...props}>
    {props.children}
  </GridList>
);

SimpleGridList.propTypes = {
  cellHeight: React.PropTypes.number,
  children: React.PropTypes.node,
  cols: React.PropTypes.number,
  padding: React.PropTypes.number,
  style: React.PropTypes.object,
};

export default SimpleGridList;

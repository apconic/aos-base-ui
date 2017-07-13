import React from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui/GridList';

const SimpleGridList = props => (
  <GridList
    cellHeight={props.cellHeight}
    cols={props.cols}
    padding={props.padding}
    style={props.style}
  >
    {props.children}
  </GridList>
);

SimpleGridList.propTypes = {
  cellHeight: PropTypes.number,
  children: PropTypes.node,
  cols: PropTypes.number,
  padding: PropTypes.number,
  style: PropTypes.object,
};

export default SimpleGridList;

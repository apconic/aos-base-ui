import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';

const SimpleGridTile = (props) => (
  <GridTile {...props}>
    {props.children}
  </GridTile>
);

SimpleGridTile.propTypes = {
  children: PropTypes.node,
};

export default SimpleGridTile;

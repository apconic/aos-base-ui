import React from 'react';
import PropTypes from 'prop-types';
import { GridListTile } from 'material-ui/GridList';

const SimpleGridTile = (props) => (
  <GridListTile {...props}>
    {props.children}
  </GridListTile>
);

SimpleGridTile.propTypes = {
  children: PropTypes.node,
};

export default SimpleGridTile;

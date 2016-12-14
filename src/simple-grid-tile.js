import React from 'react';
import { GridTile } from 'material-ui/GridList';

const SimpleGridTile = (props) => (
  <GridTile {...props}>
    {props.children}
  </GridTile>
);

SimpleGridTile.propTypes = {
  children: React.PropTypes.node,
};

export default SimpleGridTile;

import React from 'react';
import Subheader from 'material-ui/Subheader';

const BaseSubheader = (props) => (
  <Subheader {...props}>
    {props.children}
  </Subheader>
);

BaseSubheader.propTypes = {
  children: React.PropTypes.node,
};

export default BaseSubheader;

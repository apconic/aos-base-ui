import React from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';

const BaseSubheader = (props) => (
  <Subheader {...props}>
    {props.children}
  </Subheader>
);

BaseSubheader.propTypes = {
  children: PropTypes.node,
};

export default BaseSubheader;

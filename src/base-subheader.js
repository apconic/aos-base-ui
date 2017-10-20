import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const BaseSubheader = (props) => (
  <Typography type="subheading" {...props}>
    {props.children}
  </Typography>
);

BaseSubheader.propTypes = {
  children: PropTypes.node,
};

export default BaseSubheader;

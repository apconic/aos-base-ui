import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const BaseDialog = (props) => (
  <Dialog {...props}>
    {props.children}
  </Dialog>
);

BaseDialog.propTypes = {
  children: PropTypes.node,
};

export default BaseDialog;

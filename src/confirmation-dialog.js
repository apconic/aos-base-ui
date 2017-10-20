import React, { Component } from 'react';
import Button from 'material-ui/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';

export default class ConfirmationDialog extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk() {
    this.props.handleOk();
  }

  handleCancel() {
    this.props.handleCancel();
  }

  render() {
    const
      { handleOk,  // eslint-disable-line no-unused-vars
        handleCancel,  // eslint-disable-line no-unused-vars
        content,
        open,
        ...other }
       = this.props;
    const actions = [
      <Button
        color="accent"
        onClick={this.handleCancel}
      >Cancel</Button>,
      <Button
        color="primary"
        keyboardFocused /* Not documented by MUI, assuming this is an HTML attribute. */
        onClick={this.handleOk}
      >Ok</Button>,
    ];
    return (
      <Dialog
        open={open}
        onRequestClose={this.handleCancel}
        {...other}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent><DialogContentText>{content}</DialogContentText></DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialog.propTypes = {
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

ConfirmationDialog.defaultProps = { open: false };

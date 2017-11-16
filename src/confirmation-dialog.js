import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

export default class ConfirmationDialog extends Component {
  render() {
    const
      { handleOk,  // eslint-disable-line no-unused-vars
        handleCancel,  // eslint-disable-line no-unused-vars
        content,
        open,
        ...other }
       = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        secondary
        onClick={this.handleCancel}
      />,
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onClick={this.props.handleOk()}
      />,
    ];
    return (
      <Dialog
        title="Confirmation"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={this.props.handleCancel()}
        {...other}
      >
        {content}
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

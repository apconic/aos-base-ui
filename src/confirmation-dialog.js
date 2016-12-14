import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class ConfirmationDialog extends React.Component {
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
      <FlatButton
        label="Cancel"
        secondary
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onTouchTap={this.handleOk}
      />,
    ];
    return (
      <Dialog
        title="Confirmation"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={this.handleCancel}
        {...other}
      >
        {content}
      </Dialog>
    );
  }
}

ConfirmationDialog.propTypes = {
  handleOk: React.PropTypes.func.isRequired,
  handleCancel: React.PropTypes.func.isRequired,
  content: React.PropTypes.string.isRequired,
  open: React.PropTypes.bool.isRequired,
};

ConfirmationDialog.defaultProps = { open: false };

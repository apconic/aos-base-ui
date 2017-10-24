import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions, DialogContent, DialogContentText, DialogTitle
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';

export default class ConfirmationDialog extends React.Component {
  render () {
    const { handleOk, handleCancel, content, open, ...other } = this.props;
    return (
      <Dialog open={open} onRequestClose={handleCancel} {...other}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent><DialogContentText>{content}</DialogContentText></DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleOk}>Ok</Button>
          <Button color='accent' onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialog.propTypes = {
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import ActionButton from './action-button';

const ImageDialog = ({ open, name, url, onClose }) => {
  const contentStyle = { height: '80%', maxHeight: 'none' };
  return (
    <Dialog open={open} onRequestClose={onClose} style={contentStyle}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent><img alt="Camera" src={url} height={350} width={500} /></DialogContent>
      <DialogActions>
        <ActionButton color="primary" onClick={onClose} type="RAISED">Ok</ActionButton>
      </DialogActions>
    </Dialog>
  );
};

ImageDialog.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string,
  onClose: PropTypes.func,
};

export default ImageDialog;

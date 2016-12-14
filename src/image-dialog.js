import React from 'react';
import Dialog from 'material-ui/Dialog';
import ActionButton from './action-button';

const ImageDialog = ({ open, name, url, onClose }) => {
  const actions = [
    <ActionButton
      label="Ok"
      primary
      onTouchTap={onClose}
      type="RAISED"
    />,
  ];
  const contentStyle = { height: '80%', maxHeight: 'none' };
  return (
    <Dialog
      title={name}
      actions={actions}
      open={open}
      onRequestClose={onClose}
      autoScrollBodyContent
      contentStyle={contentStyle}
    >
      <img alt="Camera" src={url} height={350} width={500} />
    </Dialog>
  );
};

const { PropTypes } = React;
ImageDialog.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string,
  onClose: PropTypes.func,
};

export default ImageDialog;

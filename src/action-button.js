import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
// material-ui icons.
import ContentCopy from 'material-ui-icons/ContentCopy';
import Videocam from 'material-ui-icons/Videocam';
import Edit from 'material-ui-icons/Edit';
import Delete from 'material-ui-icons/Delete';
import Add from 'material-ui-icons/Add';
import LocalOffer from 'material-ui-icons/LocalOffer';
import List from 'material-ui-icons/List';

class ActionButton extends Component {
  getIconButton() {
    const { type, icon, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <Icon>{icon}</Icon>
      </IconButton>
    );
  }

  // Seems like this is legacy.
  // Possible solution in material-ui-icons?
  /* getSvgIconButton() {
    const { type, icon, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        {icon}
      </IconButton>
    );
  } */

  getCopyButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <ContentCopy />
      </IconButton>
    );
  }

  getCameraPreviewButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <Videocam />
      </IconButton>
    );
  }

  getEditButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <Edit />
      </IconButton>
    );
  }

  getDeleteButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <Delete />
      </IconButton>
    );
  }

  getAddButton() {
    const { type, tooltip, primary, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button dense fab color="primary" aria-label="add" {...other}>
        <Add />
      </Button>
    );
  }

  getRfidReadButton() {
    const { type, tooltip, primary, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button dense fab color="primary" aria-label="read-rfid-card" {...other}>
        <LocalOffer />
      </Button>
    );
  }

  getCodeListButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <List />
      </IconButton>
    );
  }

  getFlatButton() {
    const { type, tooltip, children, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button {...other}>{children}</Button>
    );
  }

  getRaisedButton() {
    const { type, tooltip, children, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button raised {...other}>{children}</Button>
    );
  }

  getFloatingButton() {
    const { type, tooltip, icon, color, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button fab color={color ? color : "primary"} {...other}>
        <Icon>{icon}</Icon>
      </Button>
    );
  }

  renderButton() {
    const { type } = this.props;
    switch (type) {
/* case 'SVG_ICON':
        return this.getSvgIconButton(); */
      case 'ICON':
        return this.getIconButton();
      case 'ADD':
        return this.getAddButton();
      case 'EDIT':
        return this.getEditButton();
      case 'DELETE':
        return this.getDeleteButton();
      case 'CODE_LIST':
        return this.getCodeListButton();
      case 'FLAT':
        return this.getFlatButton();
      case 'RAISED':
        return this.getRaisedButton();
      case 'COPY':
        return this.getCopyButton();
      case 'CAM_PREVIEW':
        return this.getCameraPreviewButton();
      case 'RFID_READ':
        return this.getRfidReadButton();
      case 'FLOATING':
        return this.getFloatingButton();
      default:
        return this.getAddButton();
    }
  }

  render() {
    return this.renderButton();
  }
}

ActionButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

export default ActionButton;

import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

class ActionButton extends Component {
  getIconButton() {
    const { type, icon, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">{icon}</FontIcon>
      </IconButton>
    );
  }

  getSvgIconButton() {
    const { type, icon, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        {icon}
      </IconButton>
    );
  }

  getCopyButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">content_copy</FontIcon>
      </IconButton>
    );
  }

  getCameraPreviewButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">videocam</FontIcon>
      </IconButton>
    );
  }

  getEditButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">edit</FontIcon>
      </IconButton>
    );
  }

  getDeleteButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">delete</FontIcon>
      </IconButton>
    );
  }

  getAddButton() {
    const { type, tooltip, primary, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <FloatingActionButton
        mini
        {...other}
      >
        <FontIcon className="material-icons">add</FontIcon>
      </FloatingActionButton>
    );
  }

  getRfidReadButton() {
    const { type, tooltip, primary, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <FloatingActionButton
        mini
        {...other}
      >
        <FontIcon className="material-icons">local_offer</FontIcon>
      </FloatingActionButton>
    );
  }

  getCodeListButton() {
    const { type, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...other}>
        <FontIcon className="material-icons">list</FontIcon>
      </IconButton>
    );
  }

  getFlatButton() {
    const { type, tooltip, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <FlatButton {...other} />
    );
  }

  getRaisedButton() {
    const { type, tooltip, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <RaisedButton {...other} />
    );
  }

  getFloatingButton() {
    const { type, tooltip, primary, icon, ...other } = this.props; // eslint-disable-line no-unused-vars
    return (
      <FloatingActionButton
        {...other}
      >
        <FontIcon className="material-icons">{icon}</FontIcon>
      </FloatingActionButton>
    );
  }

  renderButton() {
    const { type } = this.props;
    switch (type) {
      case 'SVG_ICON':
        return this.getSvgIconButton();
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

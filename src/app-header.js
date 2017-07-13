import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

export default class AppHeader extends Component {
  render() {
    const { toggleNavbar, ...other } = this.props;
    return (
      <AppBar
        {...other}
        ref="appBar"
        onLeftIconButtonTouchTap={toggleNavbar}
      />
    );
  }
}

AppHeader.propTypes = {
  toggleNavbar: PropTypes.func,
};

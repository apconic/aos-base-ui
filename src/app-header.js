import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class AppHeader extends React.Component {
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
  toggleNavbar: React.PropTypes.func,
};

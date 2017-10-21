import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import PropTypes from 'prop-types';

export default class AppHeader extends Component {
  render() {
    const { toggleNavbar, ...other } = this.props;
    return (
      <AppBar {...other}>
        <Toolbar>
          <IconButton style={{ marginLeft: -12, marginRight: 20 }} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.propTypes = {
  toggleNavbar: PropTypes.func,
  title: PropTypes.string.isRequired
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import { ListItem, ListItemText } from 'material-ui/List';
import * as Colors from 'material-ui/colors';
import Avatar from 'material-ui/Avatar';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.closePopover = this.closePopover.bind(this);
  }

  getNotificationStyle() {
    return { width: '30em', height: '6em' };
  }

  getNotificationFontIcon(notificationType) {
    switch (notificationType) {
      case 'Success':
        return <Icon color="white">check</Icon>;
      case 'Error':
        return <Icon color="white">clear</Icon>;
      case 'Info':
        return <Icon color="white">info</Icon>;
      case 'Warning':
        return <Icon color="white">warning</Icon>;
      default:
        return <Icon color="white">verified_user</Icon>;
    }
  }

  getAvatarColor(notificationType) {
    switch (notificationType) {
      case 'Success':
        return Colors.lightGreen[400];
      case 'Error':
        return Colors.red[500];
      case 'Info':
        return Colors.blue[500];
      case 'Warning':
        return Colors.yellow[800];
      default:
        return Colors.grey[400];
    }
  }

  closePopover() {
    const { clearNotification } = this.props;
    if (clearNotification) {
      clearNotification();
    }
  }

  render() {
    const anchorOrigin = { horizontal: 'right', vertical: 'bottom' };
    const targetOrigin = { horizontal: 'right', vertical: 'top' };
    const { notification, open, anchorEl } = this.props;
    const style = this.getNotificationStyle();
    const secondaryText = notification.text ? notification.text : '';
    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={targetOrigin}
        style={{ zDepth: 2 }}
        onRequestClose={this.closePopover}
        style={style}
      >
        <ListItem>
          <Avatar style={{ backgroundColor: this.getAvatarColor(notification.type) }}>
            {this.getNotificationFontIcon(notification.type)}
          </Avatar>
          <ListItemText
            primary={notification.type}
            secondary={secondaryText}
          />
        </ListItem>
      </Popover>
    );
  }
}

Notification.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.any,
  clearNotification: PropTypes.func,
  notification: PropTypes.object,
};

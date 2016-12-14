import React from 'react';
import Popover from 'material-ui/Popover';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import * as Colors from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

export default class Notification extends React.Component {
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
        return (
          <FontIcon className="material-icons" color="white">
           check
          </FontIcon>
        );
      case 'Error':
        return (
          <FontIcon className="material-icons" color="white">
            clear
          </FontIcon>
        );
      case 'Info':
        return (
          <FontIcon className="material-icons" color="white">
            info
          </FontIcon>
          );
      case 'Warning':
        return (
          <FontIcon className="material-icons" color="white">
            warning
          </FontIcon>
          );
      default:
        return (
          <FontIcon className="material-icons">
            verified_user
          </FontIcon>
      );
    }
  }

  getAvatarColor(notificationType) {
    switch (notificationType) {
      case 'Success':
        return Colors.lightGreen400;
      case 'Error':
        return Colors.red500;
      case 'Info':
        return Colors.blue500;
      case 'Warning':
        return Colors.yellow800;
      default:
        return Colors.grey400;
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
    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        targetOrigin={targetOrigin}
        zDepth={2}
        onRequestClose={this.closePopover}
        style={style}
      >
        <ListItem
          disabled
          leftAvatar={
            <Avatar
              icon={this.getNotificationFontIcon(notification.type)}
              backgroundColor={this.getAvatarColor(notification.type)}
            />
          }
          primaryText={notification.type}
          secondaryText={notification.text}
          secondaryTextLines={2}
        />
      </Popover>
    );
  }
}

Notification.propTypes = {
  open: React.PropTypes.bool,
  anchorEl: React.PropTypes.any,
  clearNotification: React.PropTypes.func,
  notification: React.PropTypes.object,
};

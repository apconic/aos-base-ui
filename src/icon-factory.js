import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPermDataSetting from 'material-ui/svg-icons/action/perm-data-setting';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import HardwareBack from 'material-ui/svg-icons/hardware/keyboard-backspace';
import MapsTruck from 'material-ui/svg-icons/maps/local-shipping';
import Card from 'material-ui/svg-icons/action/credit-card';
import Launch from 'material-ui/svg-icons/action/launch';
import ActionReports from 'material-ui/svg-icons/action/assessment';

const IconFactory = {
  getIcon(icon) {
    switch (icon) {
      case 'ActionHome':
        return <ActionHome />;
      case 'ActionPermDataSetting':
        return <ActionPermDataSetting />;
      case 'SocialGroup':
        return <SocialGroup />;
      case 'ActionDoneAll':
        return <ActionDoneAll />;
      case 'ActionBack':
        return <HardwareBack />;
      case 'MapsTruck':
        return <MapsTruck />;
      case 'Launch':
        return <Launch />;
      case 'Card':
        return <Card />;
      case 'Reports':
        return <ActionReports />;
      default:
        return <div />;
    }
  },
};

export default IconFactory;

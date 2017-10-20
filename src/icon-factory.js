import React from 'react';
import Home from 'material-ui-icons/Home';
import PermDataSetting from 'material-ui-icons/PermDataSetting';
import Group from 'material-ui-icons/Group';
import DoneAll from 'material-ui-icons/DoneAll';
import KeyboardBackspace from 'material-ui-icons/KeyboardBackspace';
import LocalShipping from 'material-ui-icons/LocalShipping';
import CreditCard from 'material-ui-icons/CreditCard';
import Launch from 'material-ui-icons/Launch';
import Assessment from 'material-ui-icons/Assessment';

const IconFactory = {
  getIcon(icon) {
    switch (icon) {
      // Legacy Material-UI 0.x
      case 'ActionHome':
        return <Home />;
      // Material-UI 1.x
      case 'Home':
        return <Home />;

      // Legacy Material-UI 0.x
      case 'ActionPermDataSetting':
        return <PermDataSetting />;
      // Material-UI 1.x
      case 'PermDataSetting':
        return <PermDataSetting />;

      // Legacy Material-UI 0.x
      case 'SocialGroup':
        return <Group />;
      // Material-UI 1.x
      case 'Group':
        return <Group />;

      // Legacy Material-UI 0.x
      case 'ActionDoneAll':
        return <DoneAll />;
      // Material-UI 1.x
      case 'DoneAll':
        return <DoneAll />;

      // Legacy Material-UI 0.x
      case 'ActionBack':
        return <KeyboardBackspace />;
      // Material-UI 1.x
      case 'KeyboardBackspace':
        return <KeyboardBackspace />;

      // Legacy Material-UI 0.x
      case 'MapsTruck':
        return <LocalShipping />;
      // Material-UI 1.x
      case 'LocalShipping':
        return <LocalShipping />;

      // Material-UI 0.x/1.x
      case 'Launch':
        return <Launch />;

      // Legacy Material-UI 0.x
      case 'Card':
        return <CreditCard />;
      // Material-UI 1.x
      case 'CreditCard':
        return <CreditCard />;

      // Legacy Material-UI 0.x
      case 'Reports':
        return <Assessment />;
      // Material-UI 1.x
      case 'Assessment':
        return <Assessment />;

      default:
        return <div />;
    }
  },
};

export default IconFactory;

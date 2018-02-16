import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const BaseCard = (props) => (
  <Card {...props}>
    {props.children}
  </Card>
);

BaseCard.propTypes = {
  children: PropTypes.node,
};

const BaseCardActions = (props) => (
  <CardActions {...props} style={{ paddingBottom: 16 }}>
    {props.children}
  </CardActions>
);

BaseCardActions.propTypes = {
  children: PropTypes.node,
};


const BaseCardHeader = (props) => (
  <div>
    <CardHeader {...props}>
      {props.children}
    </CardHeader>
    <Divider />
  </div>
);

BaseCardHeader.propTypes = {
  children: PropTypes.node,
};

const BaseCardText = (props) => (
  <CardText {...props}>
    {props.children}
  </CardText>
);

BaseCardText.propTypes = {
  children: PropTypes.node,
};

export {
  BaseCard,
  BaseCardActions,
  BaseCardHeader,
  BaseCardText
};

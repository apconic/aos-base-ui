import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import { grey300 } from 'material-ui/styles/colors';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const ExpandableCard = (props) => (
  <Card
    initiallyExpanded={props.initiallyExpanded ? true : false}
  >
  {props.title ? (
    <CardHeader
    title={props.title}
    showExpandableButton
    titleStyle={{ fontSize: '16pt' }}
    style={props.gray ? { background: grey300 } : null}
  />
  ) : (<div />)}
  <Divider />
    {props.children}
    <CardText>
      {props.text}
    </CardText>
    <CardActions>
      {props.actions}
    </CardActions>
  </Card>
);

ExpandableCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  initiallyExpanded: PropTypes.bool,
  text: PropTypes.node,
  actions: PropTypes.node,
  gray: PropTypes.bool,
  showExpandableButton: PropTypes.bool,
};

export default ExpandableCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Panel extends Component {
  renderTitle() {
    const { title, subtitle } = this.props;
    if (!title) {
      return '';
    }
    return (
      <CardTitle
        title={title}
        subtitle={subtitle}
        style={{ paddingLeft: 16, paddingTop: 8, paddingBottom: 8 }}
      />
    );
  }
  render() {
    const { style } = this.props;
    return (
      <Card zDepth={2} style={style}>
        {this.renderTitle()}
        <Divider />
        <CardText>
          {this.props.children}
        </CardText>
      </Card>
    );
  }
}

Panel.propTypes = {
  title: PropTypes.any,
  children: PropTypes.any,
  subtitle: PropTypes.string,
  style: PropTypes.object,
};

export default Panel;

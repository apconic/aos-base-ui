import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const { Component, PropTypes } = React;
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
  title: PropTypes.string,
  children: PropTypes.any,
  subtitle: PropTypes.string,
  style: PropTypes.object,
};

export default Panel;

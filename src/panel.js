import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Panel extends Component {
  renderTitle() {
    const { title, subtitle } = this.props;
    if (!title) {
      return '';
    }
    return (
      <CardHeader
        title={title}
        subheader={subtitle}
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
        <CardContent>
          {this.props.children}
        </CardContent>
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

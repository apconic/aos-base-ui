import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { grey300 } from 'material-ui/styles/colors';

class PanelWithHeader extends Component {
  state = { 
    style: { background: grey300 },
    titleStyle: { fontSize: '16pt' },
    zDepth: 1,
  };

  onMouseOver = () => {
    this.setState({ zDepth: 4 });
  }

  onMouseLeave = () => {
    this.setState({ zDepth: 1 });
  }

  render() {
    const style = this.state.style;
    const zDepth = this.state.zDepth;
    const header = (this.props.title || this.props.subtitle) ?
        (<CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          style={style}
          titleStyle={this.state.titleStyle}
        />) : '';

    return (
      <Card
        zDepth={zDepth}
        style={this.props.style}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        {header}
        <CardText>
          {this.props.children}
        </CardText>
      </Card>
    );
  }
}

PanelWithHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default PanelWithHeader;

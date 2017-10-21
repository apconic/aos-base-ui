import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import { grey } from 'material-ui/colors';

class PanelWithHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { background: grey[300] },
      titleStyle: { fontSize: '16pt' },
      zDepth: 1,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.setState({ zDepth: 4 });
  }

  onMouseLeave() {
    this.setState({ zDepth: 1 });
  }

  render() {
    const style = this.state.style;
    const zDepth = this.state.zDepth;
    const header = (this.props.title || this.props.subtitle) ?
        (<CardHeader
          title={this.props.title}
          subheader={this.props.subtitle}
          style={style}
        />) : '';

    return (
      <Card
        zDepth={zDepth}
        raised
        style={this.props.style}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        {header}
        <CardContent>
          {this.props.children}
        </CardContent>
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

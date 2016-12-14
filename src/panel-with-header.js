import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class PanelWithHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: { background: 'rgba(200, 210, 220, 0.5)' }, zDepth: 1 };
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
          subtitle={this.props.subtitle}
          style={style}
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
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
};

export default PanelWithHeader;

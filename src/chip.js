import React from 'react';
import * as Colors from 'material-ui/styles/colors';

const Chip = (props) => {
  const style = {
    display: 'inline-block',
    borderRadius: '24px',
    backgroundColor: Colors.grey300,
    margin: '0px',
    height: '24px',
    padding: '0px',
    lineHeight: '24px',
    textAlign: 'center',
  };

  const styleSpan = {
    paddingLeft: '9px',
    paddingRight: '9px',
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    paddingTop: '0px',
    paddingBottom: '0px',
    margin: '0px',
    lineHeight: 'normal',
    verticalAlign: 'middle',
  };

  return (
    <div style={style}>
      <span style={styleSpan}>
        {props.text}
      </span>
    </div>
  );
};

Chip.propTypes = {
  text: React.PropTypes.string,
};

export default Chip;

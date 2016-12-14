import React from 'react';
import TextField from 'material-ui/TextField';
import { isNaN } from 'lodash';
import Field from './field';

export default class FormulaDataField extends Field {
  constructor(props) {
    super(props);
    this.calculateValue = this.calculateValue.bind(this);
  }

  calculateValue() {
    const { formula, dataObject } = this.props;
    try {
      const formulaFunction = new Function(formula); // eslint-disable-line
      return formulaFunction.apply(dataObject);
    } catch (e) {
      console.log(e);
      return '';
    }
  }

  render() {
    const { displayName,
      docField,  // eslint-disable-line no-unused-vars
      value,
      onChange, isRequired,  // eslint-disable-line no-unused-vars
      readOnly,

      ...other } = this.props;
    let formulaValue = value;
    if (!readOnly) {
      formulaValue = this.calculateValue();
      if (isNaN(formulaValue)) {
        formulaValue = undefined;
      }
    }
    return (
      <TextField
        value={formulaValue}
        fullWidth
        disabled
        floatingLabelText={displayName}
        {...other}
      />
    );
  }
}

FormulaDataField.propTypes = {
  displayName: React.PropTypes.string,
  docField: React.PropTypes.string,
  formula: React.PropTypes.string,
  dataObject: React.PropTypes.object,
  value: React.PropTypes.any,
  formulaReturnType: React.PropTypes.string,
  readOnly: React.PropTypes.bool,
};

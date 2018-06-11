import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withFormsy} from 'formsy-react';

@withFormsy
export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    setValue: PropTypes.func,
    getErrorMessage: PropTypes.func,
    getValue: PropTypes.func,
    onChange: PropTypes.func,
    showError: PropTypes.func,
    required: PropTypes.bool,
    isPristine: PropTypes.func,
    isValid: PropTypes.func,
    showRequired: PropTypes.func,
    messageRequired: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    name: '',
    className: '',
    disabled: false
  }

  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.setValue(e.target.value);
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render () {
    const isRequired = !this.props.isPristine() && !this.props.isValid() && this.props.showRequired();
    return (
      <div>
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          name={this.props.name}
          autoComplete="off"
          onChange={this.onChange}
          disabled={this.props.disabled}
          value={this.props.getValue() || ''}
          required={this.props.required}
          style={{border: '1px solid #333', marginBottom: 20}}
        />
        {isRequired && <small className="form-text text-danger auth__error-message">{this.props.messageRequired}</small>}
        {this.props.getErrorMessage() && <small className="form-text text-danger auth__error-message">{this.props.getErrorMessage()}</small>}
      </div>
    );
  }
}

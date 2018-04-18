import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

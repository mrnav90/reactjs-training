import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MasterLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div id="page-wrap">
        {childrenWithProps}
      </div>
    );
  }
}

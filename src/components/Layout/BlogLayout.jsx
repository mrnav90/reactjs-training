import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MasterLayout} from 'components/Layout';
import Header from './Header';

export default class BlogLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <MasterLayout>
        <Header/>
        <div>
          {childrenWithProps}
        </div>
      </MasterLayout>
    );
  }
}

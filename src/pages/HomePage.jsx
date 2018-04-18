import React, {Component} from 'react';
import {BlogLayout} from 'components/Layout';
import {Products} from 'api';
import Product from './Product';

export default class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Products.actions.list.request().then(response => {
      this.setState({data: response.data});
    });
  }

  render() {
    return (
      <BlogLayout>
        <div>
          {
            this.state.data.length > 0 && this.state.data.map((product, idx) => {
              return (
                <Product key={idx} {...product}/>
              );
            })
          }
        </div>
      </BlogLayout>
    );
  }
}

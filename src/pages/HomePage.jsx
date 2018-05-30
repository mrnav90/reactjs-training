import React, {Component} from 'react';
import {BlogLayout} from 'components/Layout';
import {Products} from 'api';
import Product from './Product';
import PropTypes from 'prop-types';
import {requestGetProduct, changeLanguage} from 'actions';
import {translate} from 'utils';
import {connect} from 'react-redux';

@connect(state => ({
  product: state.product,
  language: state.i18n.locale
}), {
  requestGetProduct,
  changeLanguage
})

export default class HomePage extends Component {
  static propTypes = {
    requestGetProduct: PropTypes.func,
    changeLanguage: PropTypes.func,
    product: PropTypes.object,
    language: PropTypes.string,
    dispatch: PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    const key = this.props.language === 'en' ? 'vi' : 'en';
    this.props.changeLanguage(key);
  }

  componentDidMount() {
    this.props.requestGetProduct();
    // Products.actions.list.request().then(response => {
    //   this.setState({data: response.data});
    // });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product && nextProps.product.success) {
      this.setState({data: nextProps.product.data});
    }
    // this.setState({data: nextProps.product.items});
  }

  render() {
    return (
      <BlogLayout>
        <div>
          <span>{translate('hello', {name: 'Nam'})}</span>
          <button type="button" onClick={this.changeLanguage}>Change language</button>
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

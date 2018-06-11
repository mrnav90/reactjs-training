import React, {Component} from 'react';
import {BlogLayout} from 'components/Layout';
import {Products} from 'api';
import Product from './Product';
import PropTypes from 'prop-types';
import {requestGetProduct, changeLanguage} from 'actions';
import {translate} from 'utils';
import {connect} from 'react-redux';
import Input from 'components/FormUI/Input';
import Formsy, {addValidationRule} from 'formsy-react';

addValidationRule('isFruit', (values, value) => {
  return ['apple', 'orange', 'pear'].indexOf(value) >= 0;
});

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
      data: [],
      isSubmit: false
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  disableButton() {
    this.setState({isSubmit: false});
  }

  enableButton() {
    this.setState({isSubmit: true});
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

  submit(data) {
    console.log(data);
  }

  render() {
    return (
      <BlogLayout>
        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <Input
            name="fruit"
            validations="isFruit"
            validationErrors={{
              isFruit: 'This is not match'
            }}
            required
            messageRequired="The field is required"
          />
          <button type="submit">Submit form</button>
        </Formsy>
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

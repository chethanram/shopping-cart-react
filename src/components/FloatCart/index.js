import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../services/cart/actions';
import { updateCart } from '../../services/total/actions';
import CartProduct from './CartProduct';
import { formatPrice } from '../../services/util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class FloatCart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    changeProductQuantity: PropTypes.func,
    productToChange: PropTypes.object,
  };

  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }

    if (nextProps.productToChange !== this.props.productToChange) {
      this.changeProductQuantity(nextProps.productToChange);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  changeProductQuantity = changedProduct => {
    const { cartProducts, updateCart } = this.props;

    const product = cartProducts.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) {
      this.removeProduct(product);
    }
    updateCart(cartProducts);
  }

  render() {
    const { cartTotal, cartProducts, removeProduct, changeProductQuantity } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity} key={p.id} />
      );
    });

    let classes = ['float-cart'];

    if (!!this.state.isOpen) {
      classes.push('float-cart--open');
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, home button */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
            Home
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpen && (
          <div
            onClick={() => this.openFloatCart()}
             className="bag bag--float-cart-closed"
          >
           <FontAwesomeIcon icon={faShoppingCart} />
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </div>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
                <FontAwesomeIcon icon={faShoppingCart} />
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <h3>PRICE DETAILS</h3>
            {/* <div className="sub">Price (1 item)</div>
             <div className="sub-price">
              <p className="sub-price__val">
                {products.price*(products.discount/100) + products.price}
              </p>
            </div>
                <div className="sub">Discount</div>
             <div className="sub-price">
              <p className="sub-price__val">
                 {products.discount}
              </p>
            </div> */}

            <div className="sub">Total Payable</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal.currencyFormat} ${formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>
             
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct, changeProductQuantity }
)(FloatCart);

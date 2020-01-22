import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;



  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
    >
    
      <Thumb
        classes="shelf-item__thumb"
        src={product.img_url}
        alt={product.name}
      />
      <p className="shelf-item__title">{product.name}</p>
      <div className="shelf-item__price">
        {product.price} <del>{product.price*(product.discount/100) + product.price} </del>
        <span className='shelf-item__success'>{product.discount}% off </span>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);

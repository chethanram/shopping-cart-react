import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (filters, sortBy, search, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      var products  = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p => p.price <= filters  );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if(!!search){
        products = products.filter(p => Object.keys(p).some(key => p[key].toString().toLowerCase().includes(search.toLowerCase())));
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};

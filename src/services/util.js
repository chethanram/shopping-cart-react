export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'INR':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI =
  'https://api.myjson.com/bins/qzuzi';

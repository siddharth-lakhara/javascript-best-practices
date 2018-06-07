const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1',
  },
];

const getProduct = (productId) => {
  const product = products.find(p => p.id === productId);
  return product;
};

module.exports = {
  getProduct,
};

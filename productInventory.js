const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1',
  },
];

const getProducts = () => products;

const getProduct = (productId) => {
  const product = products.find(p => p.id === productId);
  return product;
};

const vendProduct = (productId) => {
  const product = this.getProduct(productId);
  this.decreaseBalance(product.price);
  return product;
};

module.exports = {
  getProduct,
  getProducts,
  vendProduct,

};

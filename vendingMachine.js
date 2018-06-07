
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

const products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1',
  },
];

module.exports = {
  getProducts() {
    return products;
  },

  getProduct(productId) {
    const product = products.find(p => p.id === productId);
    return product;
  },

  insertCoin(coinType) {
    const value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  releaseChange() {
    const currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct(productId) {
    const product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },

};

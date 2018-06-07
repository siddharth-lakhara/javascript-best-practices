
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

const vendProduct = (productId) => {
  const product = productInventory.getProduct(productId);
  balanceManager.decreaseBalance(product.price);
  return product;
};

const releaseChange = () => {
  const currentBalance = balanceManager.getBalance();
  balanceManager.decreaseBalance(currentBalance);
  return changeHandler.convertToChange(currentBalance);
};

const insertCoin = (coinType) => {
  const value = changeHandler.getAmount(coinType);
  balanceManager.increaseBalance(value);
};

const getProducts = () => products;

module.exports = {
  insertCoin,
  releaseChange,
  vendProduct,
  getProducts,
};

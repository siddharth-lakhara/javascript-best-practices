
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {
  insertCoin(coinType) {
    const value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  releaseChange() {
    const currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

};

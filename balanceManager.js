let balance = 0;

const getBalance = () => balance;

const canAfford = (amount) => {
  if (!this.isValidAmount(amount)) {
    errorMessage = 'Invalid Input';
  }
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return amount <= balance;
};

const decreaseBalance = (amount) => {
  // This method decreases the balance of the vending machine. If the balance amount is not
  // enough to cover the purchase, the method throws an error.
  let errorMessage;
  if (!this.canAfford(amount)) {
    errorMessage = 'Insufficient balance';
  }
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  balance -= amount;
};

const increaseBalance = (amount) => {
  balance += amount;
  return balance;
};

module.exports = {
  canAfford,
  decreaseBalance,
  balance,
  increaseBalance,
  getBalance,
};

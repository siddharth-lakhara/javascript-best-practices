let balance = 0;

const isValidAmount = (amount) => {
  if (amount === null || amount === undefined) {
    return false;
  }
  return true;
};
const getBalance = () => balance;

const canAfford = (amount) => {
  let errorMessage;
  if (!isValidAmount(amount)) {
    errorMessage = 'Invalid Input';
    throw new Error(errorMessage);
  }
  return amount <= balance;
};

const decreaseBalance = (amount) => {
  let errorMessage;
  if (!canAfford(amount)) {
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
  isValidAmount,
};

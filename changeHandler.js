// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

const getAmount = (coinType) => {
  const lookUpTable = {
    p: 1,
    n: 5,
    d: 10,
    q: 25,
  };
  if (lookUpTable[coinType]) {
    return lookUpTable[coinType];
  }
  throw new Error(`Unrecognized coin ${coinType}`);
};

const convertToChange = (amount) => {
  const coins = [25, 10, 5, 1];
  const coinNames = ['q', 'd', 'n', 'p'];
  let index = 0;
  const change = [];
  while (amount > 0) {
    if (amount >= coins[index]) {
      amount -= coins[index];
      change.push(coinNames[index]);
    } else {
      index += 1;
    }
  }
  return change;
};

module.exports = {
  getAmount,
  convertToChange,
};

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

module.exports = {
  getAmount,
};

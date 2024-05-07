const getRandom = (min, max) => {
  const gettingNumber = Math.floor(Math.random() * (max - min)) + min;
  return gettingNumber;
};

export default getRandom;

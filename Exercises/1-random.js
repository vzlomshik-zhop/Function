'use strict';

const random = (min, max) => {
  min = Math.abs(min);
  const t = Math.floor((Math.random() * (min + max + 1) - min));
  return t;
};

module.exports = { random };

'use strict';

//const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, possible) => {
  const n = possible.length;
  let s = '';
  for (let i = 0; i < length; i++) {
    const t = Math.floor(Math.random() * n);
    s += possible[t];
  }
  return s;
};

module.exports = { generateKey };

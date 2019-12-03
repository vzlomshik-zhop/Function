'use strict';

const parse = (s) => {
  let i = 0;
  let n = s.length;
  console.log();
  let a = [];
  let ts;
  while (i < n) {
    ts = '';
    while (i < n && s[i] === '.')
      i++;
    while (i < n && s[i] != '.')
      ts += s[i++];
    if (ts.length != 0)
      a.push(Number(ts));
  }
  return a;
};

const reducer = (a, b) => a + b;

const ipToInt = (ip = '127.0.0.1') => {
  let a = parse(ip);
  a[0] = a[0] << 8 << 8 << 8;
  a[1] = a[1] << 8 << 8;
  a[2] = a[2] << 8;
  return a.reduce(reducer);
};

module.exports = { ipToInt };

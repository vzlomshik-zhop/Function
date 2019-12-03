'use strict';

const methods = iface => {
  let arr = [];
  const n = iface.length;
  let i = 0;
  for (let [key, value] of Object.entries(iface)) {
    arr.push();
    arr[i++] = [key, value.length];
  }
  const m = arr.length;
  for (let i = 0; i < m; i++)
    console.log(arr[i]);
};

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}


methods(iface);

module.exports = { methods };

'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  printFn() {

    const ostium = this.getOstium();
    const communis = this.getCommunis();

    console.dir({ostium, communis});
    return this;
  },

};

const internus = (exitus, communis, fn, ...args) => {
  fn(...args);
};

const communis = {
  internus,
  os: function() {
  },
  objProto,
  closure: {
  },
};

const print = artus.bind(null, communis);

module.exports = { print };

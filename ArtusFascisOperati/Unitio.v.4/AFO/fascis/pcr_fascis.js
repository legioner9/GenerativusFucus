'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  printFn() {
    debugger
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
  alius: {
    method() {
    },
  },
  internus,
  os: function() {
  },
  objProto,
  closure: {
    limit: 0,
    counter: 0,
    timerMsec: 0,
    kill: false,
  },
};

const print = artus.bind(null, communis);

module.exports = { print };

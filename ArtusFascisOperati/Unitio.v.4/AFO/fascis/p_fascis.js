'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  printFn() {
    console.log(this.getOstium().fn);
    return this;
  },

};

const internus = (exitus, communis, fn, ...args) => {

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

module.exports = { timer: print };

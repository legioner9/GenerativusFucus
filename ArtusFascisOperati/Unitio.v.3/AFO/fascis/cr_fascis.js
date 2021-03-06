'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  cancel() {
    communis.closure.kill = true;
  },
  resume(){
    communis.closure.kill = false;
  },
};

const internus = (exitus, communis, fn, ...args) => {

  if (!communis.closure.kill) fn(...args);

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

const cancelResume = artus.bind(null, communis);

module.exports = { cancelResume };

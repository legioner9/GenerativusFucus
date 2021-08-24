'use strict';

const clone = val => {
  if (typeof val !== 'object' || val === null) {
    return val;
  }
  const objOrArray = Array.isArray(val) ? new Array(val.length) : {};
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      objOrArray[key] = clone(val[key]);
    }
  }
  return objOrArray;
};

const artus = (communis, fn) => {

  const exitus = function(...args) {
    const ostium = {
      fn,
      args,
      communis,
    };
    communis.os.prototype.getOstium = () => clone(ostium);
    debugger
    if (fn.getOstium) {

    }
    communis.internus(exitus, communis, fn, ...args);
  };

  for (const key in communis.objProto) {
    if (communis.objProto.hasOwnProperty(key)) communis.os.prototype[key] = communis.objProto[key];
  }

  Object.setPrototypeOf(communis.os.prototype, fn.__proto__);
  Object.setPrototypeOf(exitus, communis.os.prototype);

  return exitus;
};

module.exports = {
  artus,
};

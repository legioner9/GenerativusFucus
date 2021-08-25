'use strict';

const { print } = require('../fascis/p_fascis');
const { cancelResume } = require('../fascis/cr_fascis');

const fn = function(...args) {
  console.dir({ args });
};

const pFn = print(fn);
const pcrFn = cancelResume(pFn);
debugger
pcrFn.cancel();
pcrFn(0);
pcrFn.printFn();
pcrFn.resume();
pcrFn(1);




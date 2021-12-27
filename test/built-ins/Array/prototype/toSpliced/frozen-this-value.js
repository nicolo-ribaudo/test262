// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced works on frozen objects
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

var arr = Object.freeze([2, 0, 1]);
arr.toSpliced();

var arrayLike = Object.freeze({ length: 3, 0: 0, 1: 1, 2: 2 });

assert.deepEqual(Array.prototype.toSpliced.call(arrayLike, 1, 1, 4, 5), [0, 4, 5, 2]);

// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.with
description: >
  Array.prototype.with works on frozen objects
features: [change-array-by-copy]
---*/

var arr = Object.freeze([0, 1, 2]);
var result = arr.with(1, 3);
assert.deepEqual(result, [0, 3, 2]);

var arrayLike = Object.freeze({ length: 3, 0: 0, 1: 1, 2: 2 });
var result2 = Array.prototype.with.call(arrayLike);
assert.deepEqual(result2, [0, 3, 2]);

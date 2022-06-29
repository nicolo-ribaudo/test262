// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted does not read a "length" property
info: |
  %TypedArray%.prototype.toSorted ( comparefn )

  ...
  4. Let len be O.[[ArrayLength]].
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);
  Object.defineProperty(ta, "length", { value: 2 })
  var res = ta.toSorted()
  assert.compareArray([res[0], res[1], res[2], res[3]], [1, 2, 3, undefined]);

  ta = new TA([3, 1, 2]);
  Object.defineProperty(ta, "length", { value: 5 });
  res = ta.toSorted()
  assert.compareArray([res[0], res[1], res[2], res[3]], [1, 2, 3, undefined]);
});

var length;
Object.defineProperty(TypedArray.prototype, "length", {
  get: () => length,
});

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);

  length = 2;
  var res = ta.toSorted()
  assert.compareArray([res[0], res[1], res[2], res[3]], [1, 2, 3, undefined]);

  length = 5;
  res = ta.toSorted()
  assert.compareArray([res[0], res[1], res[2], res[3]], [1, 2, 3, undefined]);
});

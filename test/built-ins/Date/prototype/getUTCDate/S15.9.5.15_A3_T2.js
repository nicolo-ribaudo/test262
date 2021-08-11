// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getUTCDate property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getutcdate
description: Checking DontDelete attribute
---*/
assert.sameValue(
  delete Date.prototype.getUTCDate.length,
  true,
  'The value of `delete Date.prototype.getUTCDate.length` is expected to be true'
);

assert(
  !Date.prototype.getUTCDate.hasOwnProperty('length'),
  'The value of !Date.prototype.getUTCDate.hasOwnProperty(\'length\') is expected to be true'
);

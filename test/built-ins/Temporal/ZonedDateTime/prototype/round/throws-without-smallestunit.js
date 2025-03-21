// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.round
description: Throws without required smallestUnit parameter.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(217175010123456789n, "+01:00");

assert.throws(RangeError, () => zdt.round({}));
assert.throws(RangeError, () => zdt.round({
  roundingIncrement: 1,
  roundingMode: "ceil"
}));

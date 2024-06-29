// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-parse-json-module
description: Does not define
info: |
  # 1.4 ParseJSONModule ( source )

  The abstract operation ParseJSONModule takes a single argument source which
  is a String representing the contents of a module.

  1. Let json be ? Call(%JSON.parse%, undefined, « source »).
  2. Return CreateDefaultExportSyntheticModule(json).
flags: [module,async]
features: [import-assertions, json-modules]
---*/

globalThis.didEvaluate = false;

assert
  .throwsAsync(import("./json-invalid-track-evaluation_FIXTURE.js"))
  .then(() => {
    assert(!globalThis.didEvaluate, "It should error before evaluation");
  })
  .then($DONE, $DONE);

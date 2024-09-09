Copyright (C) 2024 Igalia, S.L. All rights reserved.
This code is governed by the BSD license found in the LICENSE file.

## main.js

```js
/*---
flags: [module]
features: [import-defer]
---*/
const ns = await import.defer("./deferred_FIXTURE.js");

assert(globalThis.executed === undefined);
```

## deferred_FIXTURE.js

```js
globalThis.executed = true;
```

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat32
es6id: 24.2.4.5
description: >
  Detached buffer is checked after checking If numberIndex ≠ getIndex or
  getIndex < 0,
info: |
  24.2.4.5 DataView.prototype.getFloat32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float32").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
  8. Let buffer be the value of view's [[ViewedArrayBuffer]] internal slot.
  9. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(6);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);
assert.throws(RangeError, function() {
  sample.getFloat32(1.1);
});

assert.throws(RangeError, function() {
  sample.getFloat32(-1);
});

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setint32
es6id: 24.2.4.17
description: >
  Throws a RangeError if numberIndex ≠ getIndex
info: |
  24.2.4.17 DataView.prototype.setInt32 ( byteOffset, value [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? SetViewValue(v, byteOffset, littleEndian, "Int32", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
features: [DataView.prototype.getInt32]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.setInt32();
}, "no args");
assert.sameValue(sample.getInt32(0), 0, "no args - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(undefined, 39);
}, "undefined");
assert.sameValue(sample.getInt32(0), 0, "undefined - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(1.1, 39);
}, "floating number");
assert.sameValue(sample.getInt32(0), 0, "floating number - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(0.1, 39);
}, "0.1");
assert.sameValue(sample.getInt32(0), 0, "0.1 - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(NaN, 39);
}, "NaN");
assert.sameValue(sample.getInt32(0), 0, "NaN - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(-0.1, 39);
}, "-0.1");
assert.sameValue(sample.getInt32(0), 0, "-0.1 - no value was set");

assert.throws(RangeError, function() {
  sample.setInt32(-1.1, 39);
}, "-1.1");
assert.sameValue(sample.getInt32(0), 0, "-1.1 - no value was set");

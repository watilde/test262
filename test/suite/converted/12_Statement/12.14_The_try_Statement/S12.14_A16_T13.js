// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally"
 *
 * @section: 12.14;
 * @path: 12_Statement/12.14_The_try_Statement/S12.14_A16_T13.js;
 * @description: Catch: "catch (Identifier ) Block". Checking if execution of "22" passes at the place of Identifier of "catch";
 * @negative;
 */

// CHECK#1
try
{
}
catch("22")
{
}




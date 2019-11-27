/**
 * Execution default cmd>npm
 * @file :dstest.js
 * @package :npm
 * @test :Mocha,chai
 * @version: 6.0.3(mocha),
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @since :25-nov-2019
 */
const assert = require("chai").assert;
let res = require("../DataStracture/Implementation/Stack/parenth");
let result1 = require("../DataStracture/Implementation/Queue/palidrome");
let result2 = require("../DataStracture/Calender/calender");

describe("positive tesing for Data Stracture ", function() {
  it("Check for true or False ", function() {
    assert.isString("res", true);
  });
  it("Check for Boolean Condition   ", function() {
    assert.isString("result1", Boolean);
  });
  it("Check for Date  ", function() {
    //assert.equal("ressult1",true);
    //assert(result1).to.be.an(Boolean).that.includes('true');
    assert.isNotEmpty("result2", isNotEmpty);
  });
});

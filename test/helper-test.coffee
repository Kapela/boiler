require "./_helper"
# assert = require 'assert'
chai = require("chai")
# chaiModel = require("./helpers/model")
# chai.should()
# chai.use chaiModel

app = require "../server"

assert = chai.assert
expect = chai.expect
should = chai.should

describe "Array", ->
  describe "#indexOf()", ->
    it "should return -1 when the value is not present", ->
      assert.equal -1, [1, 2, 3].indexOf(5)
      assert.equal -1, [1, 2, 3].indexOf(0)

describe "Number", ->
  it "should be above 5", ->
    expect(10).to.be.above(5)

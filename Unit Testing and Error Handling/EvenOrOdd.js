const { assert } = require("chai");

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
    return undefined;
    }
    if (string.length % 2 === 0) {
    return "even";
    }
    
    return "odd";
    }
    
describe("isOddOrEven", () => {
  it("return even when string length is even", () => {
    assert.equal(isOddOrEven("even"), "even");
  });
  it("return odd when string length is odd", () => {
    assert.equal(isOddOrEven("odd"), "odd");
  });
  it("return undefined when string length is not a string", () => {
    assert.equal(isOddOrEven(1), undefined);
  });
});

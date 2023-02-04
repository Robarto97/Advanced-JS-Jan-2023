const { assert } = require("chai");
function sum(a, b) {
  return a + b;
}

describe("Main test", function () {
  it("works with whole numbers", function () {
    assert.equal(sum(0.1, .2),(0.3));
  });
});

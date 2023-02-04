const { expect } = require("chai");

function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }
  let reversed = arr.slice(0).reverse(); // Clone and reverse
  let equal = JSON.stringify(arr) == JSON.stringify(reversed);
  return equal;
}

describe("Symmetry checker", function () {
  it("return true for symmetric", function () {
    const arr = [1, 2, 2, 1];
    expect(isSymmetric(arr)).to.be.true;
  });

  it("return false for non-symmetric", function () {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).to.be.false;
  });

  it("return false for non-array", function () {
    const data = 121;
    expect(isSymmetric(data)).to.be.false;
  });

  it('return true when length is odd', function(){
    const arr = [1, 2, 1];
    expect(isSymmetric(arr)).to.be.true;
  })
  it('return false for array-like arguments', function(){
    const arr = '1221';
    expect(isSymmetric(arr)).to.be.false;
  })
});

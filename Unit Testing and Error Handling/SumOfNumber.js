const { assert } = require("chai");
function sum(arr) {
  let sum = 0;
  for (let num of arr){
  sum += Number(num);
      }
  return sum;
  }

  
describe("whole numbers", function () {
  it("add", function () {
    assert.equal(sum([3, 5]), 8);
  });
});

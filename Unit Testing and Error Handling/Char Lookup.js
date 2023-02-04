const { assert } = require("chai");

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("LookupChar", () => {
  it("Return undefined if first param not a string", () => {
    assert.equal(lookupChar(1, 1), undefined);
  });
  it("Return undefined if second param not an int", () => {
    assert.equal(lookupChar("string", 1.5), undefined);
  });
  it("Return undefined if first para not correct", () => {
    assert.equal(lookupChar("string", "index"), undefined);
  });
  it('Return "Incorrect index" if index is lower than 0', () => {
    assert.equal(lookupChar("string", -1), "Incorrect index");
  });
  it('Return "Incorrect index" if index is outside the array', () => {
    assert.equal(lookupChar("string", 99), "Incorrect index");
  });
  it("Return correct char at index 0", () => {
    assert.equal(lookupChar("string", 0), "s");
  });
  it("Return correct char at final index", () => {
    assert.equal(lookupChar("string", 5), "g");
  });
});

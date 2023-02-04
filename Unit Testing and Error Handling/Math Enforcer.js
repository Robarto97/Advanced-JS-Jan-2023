const { assert } = require("chai");

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("MathEnforcer", () => {
  describe("addFive", () => {
    it("Should return undefined if param is not a number", () => {
      assert.equal(mathEnforcer.addFive("a"), undefined);
    });
    it("Should return undefined if without param", () => {
      assert.equal(mathEnforcer.addFive(), undefined);
    });
    it("Should return 10 if param is 5", () => {
      assert.equal(mathEnforcer.addFive(5), 10);
    });
    it("Should return 8.14 if param is 3.14", () => {
      assert.equal(mathEnforcer.addFive(3.14), 8.14);
    });
    it("Should return 0 if param is -5", () => {
      assert.equal(mathEnforcer.addFive(-5), 0);
    });
  });

  describe("subtractTen", () => {
    it("Should return undefined if param is not a number", () => {
      assert.equal(mathEnforcer.subtractTen("a"), undefined);
    });
    it("Should return undefined if without param", () => {
      assert.equal(mathEnforcer.subtractTen(), undefined);
    });
    it("Should return 5 if param is 15", () => {
      assert.equal(mathEnforcer.subtractTen(15), 5);
    });
    it("Should return -15 if param is -5", () => {
      assert.equal(mathEnforcer.subtractTen(-5), -15);
    });
    it("Should return -floating number if param is -0.99", () => {
      assert.equal(mathEnforcer.subtractTen(-0.99), -10.99);
    });
  });

  describe("sum", () => {
    it("return undefined if first param is not a number", () => {
      assert.equal(mathEnforcer.sum("text", 5), undefined);
    });
    it("return undefined if second param is not a number", () => {
      assert.equal(mathEnforcer.sum(10, "text"), undefined);
    });
    it("return undefined if no params passed", () => {
      assert.equal(mathEnforcer.sum(), undefined);
    });
    it("return 9 if both params are positive numbers", () => {
      assert.equal(mathEnforcer.sum(4, 5), 9);
    });
    it("return 9 if both params are negative numbers", () => {
      assert.equal(mathEnforcer.sum(-4, -5), -9);
    });
    it("return negative floating if both params are numbers", () => {
      assert.equal(mathEnforcer.sum(-5, 3.1), -1.9);
    });
    it("return positive floating if both params are numbers", () => {
      assert.equal(mathEnforcer.sum(2.7, 3.4), 6.1);
    });
  });
});

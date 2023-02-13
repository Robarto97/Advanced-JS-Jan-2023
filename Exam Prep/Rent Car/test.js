const { expect } = require("chai");
const rentCar = require("./rentCar");

describe("Tests", function () {
  describe("searchCar", () => {
    it("finds one car", () => {
      const shop = ["a", "b", "c"];
      const model = "a";

      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal(`There is 1 car of model a in the catalog!`);
    });
    it("finds two cars", () => {
      const shop = ["a", "b", "a"];
      const model = "a";

      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal(`There is 2 car of model a in the catalog!`);
    });
    it("invalid shop (number)", () => {
      expect(() => {
        rentCar.searchCar(5, "a");
      }).to.throw();
    });
    it("invalid shop (string)", () => {
      expect(() => {
        rentCar.searchCar("abc", "a");
      }).to.throw();
    });
    it("invalid model", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], 5);
      }).to.throw();
    });
    it("car not found", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], "d");
      }).to.throw();
    });
  });
  describe("calculatePriceOfCar", () => {
    it("invalid model", () => {
      expect(() => {
        rentCar.calculatePriceOfCar(1, 1);
      }).to.throw();
    });
    it("invalid days", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Volkswagen", "1");
      }).to.throw();
    });
    it("correct price for model", () => {
      const result = rentCar.calculatePriceOfCar("Volkswagen", 2);
      expect(result).to.equal("You choose Volkswagen and it will cost $40!");
    });
    it("model not found", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("a", 1);
      }).to.throw();
    });
  });
  describe("checkBudget", () => {
    it("invalid costPerDay", () => {
      expect(() => {
        rentCar.checkBudget("1", 1, 1);
      }).to.throw();
    });
    it("invalid days", () => {
      expect(() => {
        rentCar.checkBudget(1, "1", 1);
      }).to.throw();
    });
    it("invalid budget", () => {
      expect(() => {
        rentCar.checkBudget(1, 1, "1");
      }).to.throw();
    });
    it("can afford", () => {
      const result = rentCar.checkBudget(1, 1, 1);
      expect(result).to.equal("You rent a car!");
    });
    it("can afford (2)", () => {
      const result = rentCar.checkBudget(10, 3, 45);
      expect(result).to.equal("You rent a car!");
    });
    it("can't afford", () => {
      const result = rentCar.checkBudget(1, 2, 1);
      expect(result).to.equal("You need a bigger budget!");
    });
  });
});

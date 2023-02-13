const { expect } = require("chai");
const motorcycleRider = require("./Motorcycle Rider");

describe("Tests …", function () {
  describe("licenseRestriction", () => {
    it("AM category", function () {
      expect(motorcycleRider.licenseRestriction("AM")).to.equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("A1 category", function () {
      expect(motorcycleRider.licenseRestriction("A1")).to.equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("A2 category", function () {
      expect(motorcycleRider.licenseRestriction("A2")).to.equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("A category", function () {
      expect(motorcycleRider.licenseRestriction("A")).to.equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
    it("Wrong string category", function () {
      expect(() => {
        motorcycleRider.licenseRestriction("B");
      }).to.throw("Invalid Information!");
    });
    it("Array category", function () {
      expect(() => {
        motorcycleRider.licenseRestriction(["B"]);
      }).to.throw("Invalid Information!");
    });
    it("Number category", function () {
      expect(() => {
        motorcycleRider.licenseRestriction(2);
      }).to.throw("Invalid Information!");
    });
  });
  describe("motorcycleShowroom", () => {
    it("When engineVolume not an array", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(100, 125);
      }).to.throw();
    });
    it("When engineVolume is empty array", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([], 125);
      }).to.throw();
    });
    it("When maxEngineVolume not an number", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([100, 250, 300], "Nothing");
      }).to.throw();
    });
    it("When maxEngineVolume is less than 50", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([100, 250, 300], 40);
      }).to.throw();
    });
    it("When maxEngineVolume is negative", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([100, 250, 300], -5);
      }).to.throw();
    });
    it("When inputs are correct", () => {
      expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 300)).to.equal(
        "There are 2 available motorcycles matching your criteria!"
      );
    });
    it("When inputs are correct", () => {
      expect(
        motorcycleRider.motorcycleShowroom([125, 250, "fifty", 600], 300)
      ).to.equal("There are 2 available motorcycles matching your criteria!");
    });
    it("When inputs are correct", () => {
      expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 100)).to.equal(
        "There are 0 available motorcycles matching your criteria!"
      );
    });
  });
  describe("otherSpendings", () => {
    it("When equipment is not an array", () => {
      expect(() => {
        motorcycleRider.otherSpendings("None", ["a", "b"], false);
      }).to.throw("Invalid Information!");
    });
    it("When consumables is not an array", () => {
      expect(() => {
        motorcycleRider.otherSpendings(["a", "b"], 20, false);
      }).to.throw("Invalid Information!");
    });
    it("When discount is not a boolean", () => {
      expect(() => {
        motorcycleRider.otherSpendings(["a", "b"], ["a", "b"], "Discount");
      }).to.throw("Invalid Information!");
    });
    it("With correct inputs", () => {
      expect(
        motorcycleRider.otherSpendings(["a", "helmet"], ["a", "b"], false)
      ).to.equal("You spend $200.00 for equipment and consumables!");
    });
    it("With correct inputs", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["a", "helmet"],
          ["engine oil", "b"],
          false
        )
      ).to.equal("You spend $270.00 for equipment and consumables!");
    });
    it("With correct inputs", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["a", "helmet"],
          ["engine oil", "b"],
          true
        )
      ).to.equal(
        "You spend $243.00 for equipment and consumables with 10% discount!"
      );
    });
    it("With correct inputs", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["jacked", "helmet"],
          ["engine oil", "oil filter"],
          false
        )
      ).to.equal("You spend $600.00 for equipment and consumables!");
    });
    it("With correct inputs", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["jacked", "helmet"],
          ["engine oil", "oil filter"],
          true
        )
      ).to.equal(
        "You spend $540.00 for equipment and consumables with 10% discount!"
      );
    });
  });
});

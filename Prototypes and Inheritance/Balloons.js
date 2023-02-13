function balloons() {
  class Balloon {
    constructor(balloonColor, gasWeight) {
      this.color = balloonColor;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(balloonColor, gasWeight, ribbonColor, ribbonLength) {
      super(balloonColor, gasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(balloonColor, gasWeight, ribbonColor, ribbonLength, text) {
      super(balloonColor, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }

    get text() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = balloons();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.table(testBalloon);
console.table(testPartyBalloon);
console.table(ribbon);

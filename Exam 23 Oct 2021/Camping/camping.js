class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw Error("Unsuccessful registration at the camp.");
    }

    const match = this.listOfParticipants.find((p) => p.name === name);

    if (match) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const match = this.listOfParticipants.find((p) => p.name === name);

    if (!match) {
      throw Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants = this.listOfParticipants.filter(
      (p) => p.name !== name
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    const checkP1 = this.listOfParticipants.find(
      (p) => p.name === participant1
    );
    const checkP2 = this.listOfParticipants.find(
      (p) => p.name === participant2
    );

    if (participant2 === undefined) {
      if (!checkP1) {
        throw Error(`Invalid entered name/s.`);
      }
    } else {
      if (!checkP1 || !checkP2) {
        throw Error(`Invalid entered name/s.`);
      }

      if (checkP1.condition !== checkP2.condition) {
        throw Error("Choose players with equal condition.");
      }
    }

    if (typeOfGame === "Battleship") {
      checkP1.power += 20;
      return `The ${checkP1.name} successfully completed the game ${typeOfGame}.`;
    } else if (typeOfGame === "WaterBalloonFights") {
      if (checkP1.power > checkP2.power) {
        checkP1.wins++;
        return `The ${checkP1.name} is winner in the game ${typeOfGame}.`;
      }

      if (checkP1.power < checkP2.power) {
        checkP2.wins++;
        return `The ${checkP2.name} is winner in the game ${typeOfGame}.`;
      }
      return `There is no winner.`;
    }
  }

  toString() {
    const result = [];
    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .map((p) => {
        result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
      });
    return result.join("\n");
  }
}

// const summerCamp = new SummerCamp("JaneAusten", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov")
// );

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());

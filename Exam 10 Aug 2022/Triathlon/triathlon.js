class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = [];
    this.listOfFinalists = [];
  }

  addParticipant(name, gender) {
    const match = this.participants.find((p) => p[name]);

    if (match) {
      return `${name} has already been added to the list`;
    }
    let obj = {};
    obj[name] = gender;
    this.participants.push(obj);
    return `A new participant has been added - ${name}`;
  }

  completeness(name, condition) {
    const index = this.participants.findIndex((p) => p[name]);
    const match = this.participants[index];

    if (!match) {
      throw Error(`${name} is not in the current participants list`);
    }

    if (condition < 30) {
      throw Error(
        `${name} is not well prepared and cannot finish any discipline`
      );
    }
    let count = Math.floor(condition / 30);
    if (count == 1 || count == 2) {
      return `${name} could only complete ${count} of the disciplines`;
    }

    for (const key in match) {
      let name = key;
      let gender = match[key];
      this.listOfFinalists.push({
        name,
        gender,
      });
    }
    this.participants = this.participants.filter((el, i) => i !== index);
    return `Congratulations, ${name} finished the whole competition`;
  }

  rewarding(name) {
    const match = this.listOfFinalists.find((f) => f.name == name);
    if (!match) {
      return `${name} is not in the current finalists list`;
    }
    return `${name} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    let result = [];
    if (criteria === "all") {
      result.push(`List of all ${this.competitionName} finalists:`);
      let sorted = this.listOfFinalists.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      sorted.forEach((p) => {
        let name = p.name;
        result.push(name);
      });
      return result.join("\n");
    } else {
      let filtered = this.listOfFinalists.filter((f) => f.gender === criteria);
      return `${filtered[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }
  }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("all"));

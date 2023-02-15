class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let result = [];
    footballPlayers.forEach((player) => {
      const [name, age, value] = player.split("/");
      const index = this.invitedPlayers.findIndex((p) => p.name === name);
      const match = this.invitedPlayers[index];

      if (!match) {
        this.invitedPlayers.push({
          name,
          age: Number(age),
          value: Number(value),
        });
        result.push(name);
      } else {
        if (match.value < value) {
          this.invitedPlayers[index].value = Number(value);
        }
      }
    });
    return `You successfully invite ${result.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    const [name, offer] = selectedPlayer.split("/");
    const index = this.invitedPlayers.findIndex((p) => p.name == name);
    const match = this.invitedPlayers[index];

    if (!match) {
      throw Error(`${name} is not invited to the selection list!`);
    }
    if (offer < match.value) {
      let diff = match.value - offer;
      throw Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`
      );
    }
    this.invitedPlayers[index].value = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    const index = this.invitedPlayers.findIndex((p) => p.name == name);
    const match = this.invitedPlayers[index];

    if (!match) {
      throw Error(`${name} is not invited to the selection list!`);
    }
    if (match.age < age) {
      let diff = age - match.age;
      if (diff < 5) {
        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    let result = [];
    result.push("Players list:");
    let sortedPlayers = this.invitedPlayers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    sortedPlayers.forEach((p) => {
      result.push(`Player ${p.name}-${p.value}`);
    });
    return result.join("\n");
  }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

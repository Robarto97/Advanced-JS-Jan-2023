function deckOfCards(cards) {
  function createCard(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };

    if (!faces.includes(face)) {
      error = `Invalid card: ${face}${suit}`;
      return error;
    }

    const result = {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      },
    };

    return result.toString();
  }
  let error = "";
  const result = [];
  for (const card of cards) {
    let cardToArr = card.split("");
    const suit = cardToArr.pop();
    const face = cardToArr.join("");
    result.push(createCard(face, suit));
  }
  return error ? error : result.join(" ");
}
console.log(deckOfCards(["AS", "10D", "KH", "2C"]));

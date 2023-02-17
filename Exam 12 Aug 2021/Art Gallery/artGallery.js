class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    if (!this.possibleArticles[articleModel.toLowerCase()]) {
      throw Error("This article model is not included in this gallery!");
    }

    const match = this.listOfArticles.find(
      (a) => a.articleName === articleName
    );

    if (match && articleModel == match.articleModel) {
      match.quantity += quantity;
    } else {
      this.listOfArticles.push({
        articleModel: articleModel.toLowerCase(),
        articleName,
        quantity,
      });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    const match = this.guests.find((g) => g.guestName === guestName);

    if (match) {
      throw Error(`${guestName} has already been invited.`);
    }

    let points = 0;
    if (personality === "Vip") points = 500;
    else if (personality === "Middle") points = 250;
    else points = 50;

    this.guests.push({
      guestName,
      points,
      purchaseArticle: 0,
    });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const articleMatch = this.listOfArticles.find(
      (a) => a.articleName === articleName
    );

    if (
      !articleMatch ||
      articleMatch.articleModel !== articleModel.toLowerCase()
    ) {
      throw Error("This article is not found.");
    }

    if (articleMatch.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    const guestMatch = this.guests.find((g) => g.guestName === guestName);

    if (!guestMatch) {
      return "This guest is not invited.";
    }

    if (guestMatch.points < this.possibleArticles[articleModel.toLowerCase()]) {
      return "You need to more points to purchase the article.";
    }

    guestMatch.points -= this.possibleArticles[articleModel.toLowerCase()];
    articleMatch.quantity--;
    guestMatch.purchaseArticle++;
    return `${guestName} successfully purchased the article worth ${
      this.possibleArticles[articleModel.toLowerCase()]
    } points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      const articlesArr = [];
      articlesArr.push("Articles information:");
      this.listOfArticles.map((a) => {
        articlesArr.push(
          `${a.articleModel} - ${a.articleName} - ${a.quantity}`
        );
      });
      return articlesArr.join("\n");
    } else if (criteria === "guest") {
      const guestsArr = [];
      guestsArr.push("Guests information:");
      this.guests.map((g) => {
        guestsArr.push(`${g.guestName} - ${g.purchaseArticle}`);
      });
      return guestsArr.join("\n");
    }
  }
}

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.addArticle("picture", "Mona Liza", 3));
// console.log(artGallery.addArticle("Item", "Ancient vase", 2));
// console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
// console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("picture", "Mona Liza", 1));
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));

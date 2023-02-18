class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw Error("Not enough space in the cellar.");
    }

    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false,
    });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const match = this.wines.find((w) => w.wineName === wineName);

    if (!match) {
      throw Error(`${wineName} is not in the cellar.`);
    }

    if (match.paid) {
      throw Error(`${wineName} has already been paid.`);
    }

    match.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    const index = this.wines.findIndex((w) => w.wineName === wineName);
    const match = this.wines[index];

    if (!match) {
      throw Error("The wine, you're looking for, is not found.");
    }

    if (!match.paid) {
      throw Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType){
    const result =[]
    if(!wineType) {
        result.push(`You have space for ${this.space - this.wines.length} bottles more.`)
        result.push(`You paid ${this.bill}$ for the wine.`)
        this.wines.sort((a,b)=>a.wineName.localeCompare(b.wineName)).map(w=>{
            result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)
        })
        return result.join('\n')
    }

    const match = this.wines.find(w=>w.wineType === wineType)

    if(!match){
        throw Error(`There is no ${wineType} in the cellar.`)
    }

    return `${match.wineName} > ${match.wineType} - ${match.paid ? 'Has Paid' : 'Not Paid'}.`
  }
}

// const selection = new WineSelection(2);
// console.log(
//   selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50)
// );
// console.log(
//   selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120)
// );
// console.log(selection.reserveABottle("Bodegas GodeliaMencía", "Rose", 144));

// const selection = new WineSelection(2);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// console.log(selection.payWineBottle("Sauvignon Blanc Marlborough", 120));
// console.log(selection.payWineBottle("Bodegas GodeliaMencía", 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2);
// console.log(selection.reserveABottle("Bodegas GodeliaMencía", "Rose", 144));
// console.log(selection.cellarRevision("Rose"));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas GodeliaMencía', 'Rose', 144);
selection.payWineBottle('Bodegas GodeliaMencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


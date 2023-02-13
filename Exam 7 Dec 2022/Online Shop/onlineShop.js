class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.warehouseSpace -= spaceRequired;
    this.products.push({
      product,
      quantity,
    });
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minQuantity) {
    const match = this.products.find((p) => p.product == product);

    if (!match) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    if (minQuantity <= match.quantity) {
      return `You have enough from product ${product}.`;
    }
    let diff = minQuantity - match.quantity;
    match.quantity = minQuantity;
    return `You added ${diff} more from the ${match.product} products.`;
  }

  sellProduct(product) {
    const match = this.products.find((p) => p.product == product);

    if (!match) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    match.quantity--;
    this.sales.push({
      product,
      quantity: 1,
    });
    return `The ${match.product} has been successfully sold.`;
  }

  revision() {
    if (!this.sales) {
      throw new Error(`There are no sales today!`);
    }
    const result = this.products.map(
      (p) => `${p.product}-${p.quantity} more left`
    );
    result.unshift(`Products in the warehouse:`);
    result.unshift(`You sold ${this.sales.length} products today!`);
    return result.join("\n");
  }
}

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore("headphones", 10, 200));
// console.log(myOnlineShop.loadingStore("laptop", 5, 200));
// console.log(myOnlineShop.loadingStore("TV", 40, 500));

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore("headphones", 10, 200));
// console.log(myOnlineShop.loadingStore("laptop", 5, 200));
// console.log(myOnlineShop.quantityCheck("headphones", 10));
// console.log(myOnlineShop.quantityCheck("laptop", 10));
// console.log(myOnlineShop.quantityCheck("TV", 40));

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore("headphones", 10, 200));
// console.log(myOnlineShop.loadingStore("laptop", 5, 200));

// console.log(myOnlineShop.quantityCheck("headphones", 10));
// console.log(myOnlineShop.quantityCheck("laptop", 10));

// console.log(myOnlineShop.sellProduct("headphones"));
// console.log(myOnlineShop.sellProduct("laptop"));
// console.log(myOnlineShop.sellProduct("keyboard"));

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("laptop"));
console.table(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());

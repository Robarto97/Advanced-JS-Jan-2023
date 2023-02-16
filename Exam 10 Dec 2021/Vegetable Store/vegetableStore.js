class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    const uniqueVegs = [];
    vegetables.forEach((veg) => {
      let [type, quantity, price] = veg.split(" ");
      quantity = Number(quantity);
      price = Number(price);
      const match = this.availableProducts.find((p) => p.type === type);

      if (match) {
        match.quantity += quantity;
        if (match.price < price) {
          match.price = price;
        }
      } else {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
        uniqueVegs.push(type);
      }
    });
    return `Successfully added ${uniqueVegs.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let price = 0;
    selectedProducts.forEach((product) => {
      let [type, quantity] = product.split(" ");
      quantity = Number(quantity);
      const match = this.availableProducts.find((p) => p.type === type);

      if (!match) {
        throw Error(
          `${type} is not available in the store, your current bill is $${price.toFixed(
            2
          )}.`
        );
      }
      if (quantity > match.quantity) {
        throw Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${price.toFixed(
            2
          )}.`
        );
      }

      price += match.price * quantity;
      match.quantity -= quantity;
    });
    return `Great choice! You must pay the following amount $${price.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const match = this.availableProducts.find((p) => p.type === type);

    if (!match) {
      throw Error(`${type} is not available in the store.`);
    }

    if (quantity > match.quantity) {
      match.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    match.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    const result = [];
    result.push(`Available vegetables:`);
    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
    sorted.forEach((p) => {
      result.push(`${p.type}-${p.quantity}-$${p.price}`);
    });
    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return result.join("\n");
  }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2","Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

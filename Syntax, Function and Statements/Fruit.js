function fruit(type, weight, pricePerKg) {
  const weightInKg = weight / 1000;
  console.log(
    `I need $${(pricePerKg * weightInKg).toFixed(
      2
    )} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);

function dayOfWeek(day) {
  switch (day) {
    case "Monday":
      return console.log(1);
    case "Tuesday":
      return console.log(2);
    case "Wednesday":
      return console.log(3);
    case "Thursday":
      return console.log(4);
    case "Friday":
      return console.log(5);
    case "Saturday":
      return console.log(6);
    case "Sunday":
      return console.log(7);
    default:
      return console.log("error");
  }
}

dayOfWeek("Invalid");

const { assert } = require("chai");
const cinema = require("./cinema");

describe("Tests", () => {
  it("showMovies", () => {
    assert.equal(cinema.showMovies(['a','b','c','d']),'a, b, c, d')
    assert.equal(cinema.showMovies(['a','b','c']),'a, b, c')
    assert.equal(cinema.showMovies(['a','b']),'a, b')
    assert.equal(cinema.showMovies(['a']),'a')
    assert.equal(cinema.showMovies(['a','b','5',5]),'a, b, 5, 5')
    assert.equal(cinema.showMovies([1,2,3,4]),'1, 2, 3, 4')
    assert.equal(cinema.showMovies([1,-2,3,-4]),'1, -2, 3, -4')
    assert.equal(cinema.showMovies(['a','b','5',['a']]),'a, b, 5, a')
    assert.equal(cinema.showMovies([]), "There are currently no movies to show.")
  });
  it("ticketPrice", () => {
    assert.throw(()=>cinema.ticketPrice('abc'),'Invalid projection type')
    assert.throw(()=>cinema.ticketPrice('5'),'Invalid projection type')
    assert.throw(()=>cinema.ticketPrice('premiere'),'Invalid projection type')
    assert.throw(()=>cinema.ticketPrice('normal'),'Invalid projection type')
    assert.throw(()=>cinema.ticketPrice('discount'),'Invalid projection type')
    assert.equal(cinema.ticketPrice('Premiere'),'12.00')
    assert.equal(cinema.ticketPrice('Normal'),'7.50')
    assert.equal(cinema.ticketPrice('Discount'),'5.50')
  });
  it("swapSeatsInHall", () => {
    assert.equal(cinema.swapSeatsInHall(1), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,10.5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5.2,10.5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5.2,25), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,25), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,25), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,-5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(0,5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(0,-5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(30,5), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(0,0), 'Unsuccessful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,10), 'Successful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(5,20), 'Successful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(1,20), 'Successful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(20,5), 'Successful change of seats in the hall.')
    assert.equal(cinema.swapSeatsInHall(20,1), 'Successful change of seats in the hall.')
  });
});

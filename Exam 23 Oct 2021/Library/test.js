const { assert } = require("chai");
const library = require("./library");

describe("Tests", () => {
  it("calcPriceOfBook", () => {
    assert.throw(()=>library.calcPriceOfBook('a', '5'), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook('a', 'abc'), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook('a', [5]), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook('a'), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook(5,2000), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook([55],2000), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook(['agfgn'],2000), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook(['agfgn'],['asfgsdg']), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook([],[]), 'Invalid input')
    assert.throw(()=>library.calcPriceOfBook(), 'Invalid input')
    assert.equal(library.calcPriceOfBook('a', 2000), 'Price of a is 20.00')
    assert.equal(library.calcPriceOfBook('a', 2000), 'Price of a is 20.00')
    assert.equal(library.calcPriceOfBook('a', 1980), 'Price of a is 10.00')
    assert.equal(library.calcPriceOfBook('a', 1900), 'Price of a is 10.00')
    assert.equal(library.calcPriceOfBook('a', 0), 'Price of a is 10.00')
    assert.equal(library.calcPriceOfBook('a', -1000), 'Price of a is 10.00')
  });
  it("findBook", () => {
    assert.throw(()=>library.findBook([], 'a'), 'No books currently available')
    assert.throw(()=>library.findBook([], 'abc'), 'No books currently available')
    assert.equal(library.findBook(['a','b','c'], 'a'), 'We found the book you want.')
    assert.equal(library.findBook(['a'], 'a'), 'We found the book you want.')
    assert.equal(library.findBook(['a','b','c'], 'd'), "The book you are looking for is not here!")
    assert.equal(library.findBook(['a'], 'd'), "The book you are looking for is not here!")
  });
  it("arrangeTheBooks", () => {
    assert.throw(()=>library.arrangeTheBooks(-5), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks('abc'), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks('5'), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks([]), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks([55]), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks(['abc']), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks(), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks(null), 'Invalid input')
    assert.throw(()=>library.arrangeTheBooks({}), 'Invalid input')
    assert.equal(library.arrangeTheBooks(0), "Great job, the books are arranged.")
    assert.equal(library.arrangeTheBooks(20), "Great job, the books are arranged.")
    assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
    assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.")
    assert.equal(library.arrangeTheBooks(60), "Insufficient space, more shelves need to be purchased.")
    assert.equal(library.arrangeTheBooks(100), "Insufficient space, more shelves need to be purchased.")
  });
});

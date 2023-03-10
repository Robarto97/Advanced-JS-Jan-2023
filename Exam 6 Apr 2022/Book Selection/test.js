const { assert } = require('chai')
const bookSelection = require('./bookSelection')



describe('Tests', ()=>{
    it('isGenreSuitable',()=>{
        assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`)
        assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`)
        assert.equal(bookSelection.isGenreSuitable('Thriller', 5), `Books with Thriller genre are not suitable for kids at 5 age`)
        assert.equal(bookSelection.isGenreSuitable('Thriller', -5), `Books with Thriller genre are not suitable for kids at -5 age`)
        assert.equal(bookSelection.isGenreSuitable('Fantasy', 10), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable('Adventure', 10), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable('Thriller', 20), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable('Horror', 15), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable('Adventure', 20), `Those books are suitable`)
    })
    it('isItAffordable',()=>{
        assert.throw(()=>bookSelection.isItAffordable(),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable('5',20),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable([5],20),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable(5,'abc'),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable(5,'5'),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable(5,[5]),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable([5],[5]),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable('5','50'),'Invalid input')
        assert.throw(()=>bookSelection.isItAffordable('abc','50'),'Invalid input')
        assert.equal(bookSelection.isItAffordable(5,50),`Book bought. You have 45$ left`)
        assert.equal(bookSelection.isItAffordable(5,5),`Book bought. You have 0$ left`)
        assert.equal(bookSelection.isItAffordable(5,0),`You don't have enough money`)
        assert.equal(bookSelection.isItAffordable(5, -5),`You don't have enough money`)
        assert.equal(bookSelection.isItAffordable(-5, 20),`Book bought. You have 25$ left`)
        assert.equal(bookSelection.isItAffordable(0, 0),`Book bought. You have 0$ left`)
    })
    it('suitableTitles',()=>{
        assert.throw(()=>bookSelection.suitableTitles(['a','b'], 5),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(['a','b'], null),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(['a','b'], ['a']),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(5, 'abc'),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(null, 'abc'),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles('a', 'abc'),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles('5', 'abc'),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(5, 5),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles('a', ['5']),'Invalid input')
        assert.throw(()=>bookSelection.suitableTitles(),'Invalid input')
        assert.equal(bookSelection.suitableTitles([{title: 'a', genre: 'b'}], 'b'),'a')
        assert.equal(bookSelection.suitableTitles([{title: 'a', genre: 'b'}], 'c'),'')
        assert.equal(bookSelection.suitableTitles([{title: 'a', genre: 'b'}, {title: 'd', genre: 'c'}], 'b'),'a')
        assert.deepEqual(bookSelection.suitableTitles([{title: 'a', genre: 'b'}, {title: 'd', genre: 'b'}], 'b'),[ 'a', 'd' ])
    })
})
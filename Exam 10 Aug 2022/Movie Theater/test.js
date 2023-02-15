const { assert } = require('chai')
const movieTheater = require('./MovieTheater')



describe('Tests', ()=>{
    it('ageRestrictions',()=>{
        assert.equal(movieTheater.ageRestrictions('G'), `All ages admitted to watch the movie`)
        assert.equal(movieTheater.ageRestrictions('PG'), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
        assert.equal(movieTheater.ageRestrictions('R'), `Restricted! Under 17 requires accompanying parent or adult guardian`)
        assert.equal(movieTheater.ageRestrictions('NC-17'), `No one under 17 admitted to watch the movie`)
        assert.equal(movieTheater.ageRestrictions('A'), `There are no age restrictions for this movie`)
        assert.equal(movieTheater.ageRestrictions('15'), `There are no age restrictions for this movie`)
        assert.equal(movieTheater.ageRestrictions('a'), `There are no age restrictions for this movie`)
    })
    it('moneySpent',()=>{
        assert.throw(()=>movieTheater.moneySpent(5,['a'],'b'),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent(5,'a',['b']),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent('abc',['a'],['b']),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent('abc','a',['b']),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent('abc',['a'],'b'),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent('abc','a','b'),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent([10],'5',5),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent([10],5,'10'),'Invalid input')
        assert.throw(()=>movieTheater.moneySpent(),'Invalid input')
        assert.equal(movieTheater.moneySpent(1,['nachos'],['soda']),`The total cost for the purchase is 15.00`)
        assert.equal(movieTheater.moneySpent(1,['Nachos'],['Soda']),`The total cost for the purchase is 23.50`)
        assert.equal(movieTheater.moneySpent(1,['Nachos','Popcorn'],['Soda','Water']),`The total cost for the purchase is 29.50`)
        assert.equal(movieTheater.moneySpent(4,['Nachos','Popcorn'],['Soda','Water']),`The total cost for the purchase with applied discount is 59.60`)
        assert.equal(movieTheater.moneySpent(4,['Nachos'],['Soda']),`The total cost for the purchase with applied discount is 54.80`)
        assert.equal(movieTheater.moneySpent(4,[],[]),`The total cost for the purchase with applied discount is 48.00`)
        assert.equal(movieTheater.moneySpent(2,[],[]),`The total cost for the purchase is 30.00`)
        assert.equal(movieTheater.moneySpent(0,[],[]),`The total cost for the purchase is 0.00`)
    })
    it('reservation',()=>{
        assert.throw(()=>movieTheater.reservation(['a'], '5'),'Invalid input')
        assert.throw(()=>movieTheater.reservation(['a'], 'abc'),'Invalid input')
        assert.throw(()=>movieTheater.reservation(['a'], ['b']),'Invalid input')
        assert.throw(()=>movieTheater.reservation(['a'], [5]),'Invalid input')
        assert.throw(()=>movieTheater.reservation('a', 1),'Invalid input')
        assert.throw(()=>movieTheater.reservation(5, 1),'Invalid input')
        assert.throw(()=>movieTheater.reservation('5', 1),'Invalid input')
        assert.throw(()=>movieTheater.reservation(null, 1),'Invalid input')
        assert.throw(()=>movieTheater.reservation(),'Invalid input')
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 5 }],2),'2')
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 5 }],6),'1')
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 5 }],0),'2')
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 5 }],8),'-Infinity')
    })
})
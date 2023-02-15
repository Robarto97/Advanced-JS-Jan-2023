const { assert } = require('chai')
const carService = require('./Car Service')


describe('Tests', ()=>{
    it('isItExpensive', ()=>{
        assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
        assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
        assert.equal(carService.isItExpensive('abc'), 'The overall price will be a bit cheaper')
        assert.equal(carService.isItExpensive(''), `The overall price will be a bit cheaper`)
        assert.equal(carService.isItExpensive('55'), `The overall price will be a bit cheaper`)
    })
    it('discount', ()=>{
        assert.throw(()=>carService.discount('a','b'),'Invalid input')
        assert.throw(()=>carService.discount('5',[5]),'Invalid input')
        assert.throw(()=>carService.discount([1],['a']),'Invalid input')
        assert.throw(()=>carService.discount(1,'1'),'Invalid input')
        assert.throw(()=>carService.discount('1',1),'Invalid input')
        assert.throw(()=>carService.discount(),'Invalid input')
        assert.equal(carService.discount(0,20),"You cannot apply a discount")
        assert.equal(carService.discount(2,20),"You cannot apply a discount")
        assert.equal(carService.discount(4,20),'Discount applied! You saved 3$')
        assert.equal(carService.discount(7,50),'Discount applied! You saved 7.5$')
        assert.equal(carService.discount(10,50),'Discount applied! You saved 15$')
    })
    it('partsToBuy', ()=>{
        assert.throw(()=>carService.partsToBuy(5,['a']),'Invalid input')
        assert.throw(()=>carService.partsToBuy('a',['a']),'Invalid input')
        assert.throw(()=>carService.partsToBuy('5',['a']),'Invalid input')
        assert.throw(()=>carService.partsToBuy(['a'],5),'Invalid input')
        assert.throw(()=>carService.partsToBuy(['a'],'5'),'Invalid input')
        assert.throw(()=>carService.partsToBuy(['a'],'abc'),'Invalid input')
        assert.throw(()=>carService.partsToBuy('a','abc'),'Invalid input')
        assert.throw(()=>carService.partsToBuy(5,5),'Invalid input')
        assert.throw(()=>carService.partsToBuy(),'Invalid input')
        assert.equal(carService.partsToBuy([],['a','b']), '0')
        assert.equal(carService.partsToBuy([],['a','b']), '0')
        assert.equal(carService.partsToBuy([{ part: "a", price: 145 }, { part: "b", price: 230} ],["a","b"]), '375')
        assert.equal(carService.partsToBuy([{ part: "a", price: 145 }, { part: "b", price: 230} ],["a","c"]), '145')
        assert.equal(carService.partsToBuy([{ part: "a", price: 145 }, { part: "b", price: 230} ],["c","d"]), '0')
        assert.equal(carService.partsToBuy([{ part: "a", price: 100 }],["c","a"]), '100')
    })
})
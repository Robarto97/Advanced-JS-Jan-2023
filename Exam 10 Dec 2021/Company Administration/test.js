const { assert } = require('chai')
const companyAdministration = require('./companyAdministration')


describe('Tests', ()=>{
    it('hiringEmployee', ()=>{
        assert.throw(()=>companyAdministration.hiringEmployee('Rob', 'b', 3), 'We are not looking for workers for this position.')
        assert.throw(()=>companyAdministration.hiringEmployee('Rob', 'b', 1), 'We are not looking for workers for this position.')
        assert.throw(()=>companyAdministration.hiringEmployee('Rob', 'b', 0), 'We are not looking for workers for this position.')
        assert.equal(companyAdministration.hiringEmployee('Rob', 'Programmer', 0), `Rob is not approved for this position.`)
        assert.equal(companyAdministration.hiringEmployee('Rob', 'Programmer', 1), `Rob is not approved for this position.`)
        assert.equal(companyAdministration.hiringEmployee('Rob', 'Programmer', 3), `Rob was successfully hired for the position Programmer.`)
        assert.equal(companyAdministration.hiringEmployee('Rob', 'Programmer', 6), `Rob was successfully hired for the position Programmer.`)
    })
    it('calculateSalary', ()=>{
        assert.throw(()=>companyAdministration.calculateSalary(-10), 'Invalid hours')
        assert.throw(()=>companyAdministration.calculateSalary('abc'), 'Invalid hours')
        assert.throw(()=>companyAdministration.calculateSalary([100]), 'Invalid hours')
        assert.throw(()=>companyAdministration.calculateSalary(), 'Invalid hours')
        assert.throw(()=>companyAdministration.calculateSalary('10'), 'Invalid hours')
        assert.equal(companyAdministration.calculateSalary(0), 0)
        assert.equal(companyAdministration.calculateSalary(100), 1500)
        assert.equal(companyAdministration.calculateSalary(160), 2400)
        assert.equal(companyAdministration.calculateSalary(200), 4000)
        assert.equal(companyAdministration.calculateSalary(300), 5500)
    })
    it('firedEmployee', ()=>{
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c'], 5), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c'], -5), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c'], '5'), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c']), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c'], 'abc'), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(['a','b','c'], [5]), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee('abc', 1), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(5, 1), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(1), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee('5', 1), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee('5','5'), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(5,5), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee([],0), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee([],2), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee([],-2), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(-5,-2), 'Invalid input')
        assert.throw(()=>companyAdministration.firedEmployee(-5,2), 'Invalid input')
        assert.equal(companyAdministration.firedEmployee(['a','b','c'],1), 'a, c')
        assert.equal(companyAdministration.firedEmployee(['a','b','c'],2), 'a, b')
        assert.equal(companyAdministration.firedEmployee(['a','b','c'],0), 'b, c')
        assert.equal(companyAdministration.firedEmployee(['a','b'],1), 'a')
        assert.equal(companyAdministration.firedEmployee(['a','b'],0), 'b')
        assert.equal(companyAdministration.firedEmployee(['a'],0), '')
        assert.equal(companyAdministration.firedEmployee(['a',10,'b'],0), '10, b')
        assert.equal(companyAdministration.firedEmployee(['a',10,'b'],1), 'a, b')
        assert.equal(companyAdministration.firedEmployee([10],0), '')
        assert.equal(companyAdministration.firedEmployee([1,2,3],0), '2, 3')
    })
})

// 1. Write a test and see it fail
// 2. Write just enough code to make the test pass
// 3. Refactor the code to be inclusive yet concise


let assert = require('assert')
let romanify = require('../js/roman')

// make a converter to turn numbers into Roman numerals
// 1 => "I"
// 2 => "II"
// 3 => "III"
// 4 => "IV"
// 5 => "V"
// 6 => "VI"
// 7 => "VII"
// 8 => "VIII"
// 9 => "IX"
// looks like my inputs are always one number at a time and the output is a string

describe('Roman numeral converter', function() {
    it('converts 1 to I', function() {
        let result = romanify(1)
        assert.equal(result, "I")
    })
    it('converts 2 to II', function() {
        let result = romanify(2)
        assert.equal(result, "II")
    })
    it('converts 3 to III', function() {
        let result = romanify(3)
        assert.equal(result, "III")
    })
    it('converts 4 to IV', function() {
        let result = romanify(4)
        assert.equal(result, "IV")
    })
    it('converts 5 to V', function() {
        let result = romanify(5)
        assert.equal(result, "V")
    })
    it('converts 6 to VI', function() {
        let result = romanify(6)
        assert.equal(result, "VI")
    })
    it('converts 7 to VII', function() {
        let result = romanify(7)
        assert.equal(result, "VII")
    })
    it('converts 8 to VIII', function() {
        let result = romanify(8)
        assert.equal(result, "VIII")
    })
    it('converts 9 to IX', function() {
        let result = romanify(9)
        assert.equal(result, "IX")
    })
    it('converts 10 to X', function() {
        let result = romanify(10)
        assert.equal(result, "X")
    })
    it('converts 11 to XI', function() {
        let result = romanify(11)
        assert.equal(result, "XI")
    })
    it('converts 12 to XII', function() {
        let result = romanify(12)
        assert.equal(result, "XII")
    })
    it('converts 13 to XIII', function() {
        let result = romanify(13)
        assert.equal(result, "XIII")
    })
    it('converts 14 to XIV', function() {
        let result = romanify(14)
        assert.equal(result, "XIV")
    })
    it('converts 15 to XV', function() {
        let result = romanify(15)
        assert.equal(result, "XV")
    })
    it('converts 16 to XVI', function() {
        let result = romanify(16)
        assert.equal(result, "XVI")
    })
    it('converts 17 to XVII', function() {
        let result = romanify(17)
        assert.equal(result, "XVII")
    })
    it('converts 18 to XVIII', function() {
        let result = romanify(18)
        assert.equal(result, "XVIII")
    })
    it('converts 19 to XIX', function() {
        let result = romanify(19)
        assert.equal(result, "XIX")
    })
    it('converts 25 to XXV', function() {
        let result = romanify(25)
        assert.equal(result, "XXV")
    })
    it('converts 29 to XXIX', function() {
        let result = romanify(29)
        assert.equal(result, "XXIX")
    })
    it('converts 39 to XXXIX', function() {
        let result = romanify(39)
        assert.equal(result, "XXXIX")
    })
    it('converts 40 to XL', function() {
        let result = romanify(40)
        assert.equal(result, "XL")
    })
    it('converts 41 to XLI', function() {
        let result = romanify(41)
        assert.equal(result, "XLI")
    })
    it('converts 49 to XLIX', function() {
        let result = romanify(49)
        assert.equal(result, "XLIX")
    })
    it('converts 50 to L', function() {
        let result = romanify(50)
        assert.equal(result, "L")
    })
    it('converts 89 to LXXXIX', function() {
        let result = romanify(89)
        assert.equal(result, "LXXXIX")
    })
    it('converts 90 to XC', function() {
        let result = romanify(90)
        assert.equal(result, "XC")
    })
    it('converts 99 to XCIX', function() {
        let result = romanify(99)
        assert.equal(result, "XCIX")
    })
    it('converts 199 to CXCIX', function() {
        let result = romanify(199)
        assert.equal(result, "CXCIX")
    })
    it('converts 299 to CCXCIX', function() {
        let result = romanify(299)
        assert.equal(result, "CCXCIX")
    })
    it('converts 399 to CCCXCIX', function() {
        let result = romanify(399)
        assert.equal(result, "CCCXCIX")
    })
    it('converts 400 to CD', function() {
        let result = romanify(400)
        assert.equal(result, "CD")
    })
    it('converts 499 to CDXCIX', function() {
        let result = romanify(499)
        assert.equal(result, "CDXCIX")
    })
    it('converts 500 to D', function() {
        let result = romanify(500)
        assert.equal(result, "D")
    })
    it('converts 899 to DCCCXCIX', function() {
        let result = romanify(899)
        assert.equal(result, "DCCCXCIX")
    })
    it('converts 999 to CMXCIX', function() {
        let result = romanify(999)
        assert.equal(result, "CMXCIX")
    })
    it('converts 919 to CMXIX', function() {
        let result = romanify(919)
        assert.equal(result, "CMXIX")
    })
    it('converts 1299 to MCCXCIX', function() {
        let result = romanify(1299)
        assert.equal(result, "MCCXCIX")
    })
    it('converts 1999 to MCMXCIX', function() {
        let result = romanify(1999)
        assert.equal(result, "MCMXCIX")
    })
    it('converts 2017 to MMXVII', function() {
        let result = romanify(2017)
        assert.equal(result, "MMXVII")
    })
    it('converts 3017 to MMMXVII', function() {
        let result = romanify(3017)
        assert.equal(result, "MMMXVII")
    })
    it('converts 9999 to MMMMMMMMMCMXCIX', function() {
        let result = romanify(9999)
        assert.equal(result, "MMMMMMMMMCMXCIX")
    })
    describe('when input is a string', function() {
        it('converts "1" to "I"', function() {
            let result = romanify("1")
            assert.equal(result, "I")
        })
    })
})

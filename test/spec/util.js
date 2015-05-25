(function () {
    'use strict';

    describe('The util module', function () {
        var magic = util();
        it('should have a magic number', function () {
            assert.equal(42, magic.magicNumber);
        });
        it('should add numbers', function () {
            assert.equal(9, magic.addNumbers(4, 5));
        });
    });
})();

/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
            it('should have a magic number', function () {
                var magic = util();
                assert.equal(42, magic.magicNumber);
            });
        });
    });
})();

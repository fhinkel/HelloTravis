'use strict';

var util = function () {
    var magicNumber = 42;
    var addNumbers = function(a, b) {
        return a + b;
    };

    return {
        magicNumber: magicNumber,
        addNumbers: addNumbers
    };
};
"use strict";
exports.__esModule = true;
exports.myValidators = void 0;
var myValidators = /** @class */ (function () {
    function myValidators() {
    }
    myValidators.isPriceValid = function (control) {
        var value = control.value;
        console.log(value);
        if (value > 10000) {
            return { price_invalid: true };
        }
        return null;
    };
    return myValidators;
}());
exports.myValidators = myValidators;

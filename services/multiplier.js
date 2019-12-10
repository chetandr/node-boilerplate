/**
 * @purpose This file is created to showcase sample mutiplier services for instanbul code coverage
 * @author Yuwaraj Chavan
 * Date 10/12/2019
 */

function multiplier() {
    this.multiple = function (numberA, numberB) {
        if(!numberA || !numberB) return;

        return  numberA * numberB;
    }
}

module.exports = new multiplier();
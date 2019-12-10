/**
 * @purpose This file is created to showcase sample substractor services for instanbul code coverage
 * @author Yuwaraj Chavan
 * Date 10/12/2019
 */

function subtractor() {
    this.subtract = function (numberA, numberB) {
        if(!numberA || !numberB) return;
        
        return  numberA - numberB;
    }
}

module.exports = new subtractor();
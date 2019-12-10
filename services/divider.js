/**
 * @purpose This file is created to showcase sample divider services for instanbul code coverage
 * @author Yuwaraj Chavan
 * Date 10/12/2019
 */

function divider() {
    this.divide = function (numberA, numberB) {
        if(!numberA || !numberB || numberB ==0) return;

        return  numberA / numberB;
    }
}

module.exports = new divider();
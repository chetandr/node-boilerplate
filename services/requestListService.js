/**
 * @purpose This file is created to define Request List handlers or services
 * @author Ritesh Mohire
 * Date 10/12/2019
 */

/************************* Require modules *************************/


/************************* Require files *************************/


/************************* Define services *************************/

function create(body){
    console.log('\n in requestListService.js : create() : body : ', body)
    body.createdOn = Date.now()
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(body), 1000)
    });
}


module.exports = { create }
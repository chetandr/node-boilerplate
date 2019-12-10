/**
 * @purpose This file is created to define Request List handlers or services
 * @author Ritesh Mohire
 * Date 10/12/2019
 */

/************************* Require modules *************************/


/************************* Require files *************************/


/************************* Define services *************************/

/**
 * @purpose To validate and save request list into DB
 * @author Ritesh Mohire
 * @Date 10/12/2019
 * @argument body: JSON object with create request param
 */
function create(body){
    console.log('\n in requestListService.js : create() : body : ', body)
    body.createdOn = Date.now()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(body.firstName){
                resolve(body)
            }else{
                reject({"Message" : "First name is missing!!!"})
            }
        }, 1000)
    });
}


module.exports = { create }
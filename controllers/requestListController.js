/**
 * @purpose This is the Request List controllers file
 * @author Ritesh Mohire
 * Date 10/12/2019
 */

/************************* Require modules *************************/


/************************* Require files *************************/

let requestListService = require("../services/requestListService")

/*********** Create route-handler callback functions ***************/

// Define get all the request handler
exports.get_request_list = function(req, res) {

    console.log('\n in requestListController.js : get_request_list() : URL: ', req.url)
    res.send('Request List controller!!!')
};

// Define create request list handler.
exports.create_request_list = async function(req, res) {

    console.log('\n in requestListController.js : create_request_list() : start : ')

    try{
        let result = await requestListService.create(req.body)
        res.status(201).send(result)
    }catch(error){
        res.status(400).send(error)
    }
}

// Define update request list handler.
exports.update_request_list = async function(req, res) {

    console.log('\n in requestListController.js : update_request_list() : URL: ', req.url)
    res.send('Put request list controller!!!')
}

// Define delete request list handler.
exports.delete_request_list = async function(req, res) {

    console.log('\n in requestListController.js : delete_request_list() : URL: ', req.url)
    res.send('Delete request list controller!!!')
}

// Define get all request lists handler.
exports.get_all_request_list = async function(req, res) {

    console.log('\n in requestListController.js : get_all_request_list() : URL: ', req.url)
    res.send('Get all request list controller!!!')
}


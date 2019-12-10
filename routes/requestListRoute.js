/**
 * @purpose This is the Request List API route file
 * @author Ritesh Mohire
 * Date 10/12/2019
 */

/************************* Require modules *************************/

var express = require('express')
var router = express.Router()

/************************* Require files *************************/
let requestListController = require("../controllers/requestListController")


/************************* Middleware *************************/

// middleware that is specific to request list router
router.use(function timeLog (req, res, next) {
  console.log('\n in requestListRoute.js : use() : Time: ', Date.now())
  next()
})

/************************* Route *************************/

// GET Request List route.
router.get('/', requestListController.get_request_list)

// Create Request List route
router.post('/', requestListController.create_request_list)

// Update request list route
router.put('/', requestListController.update_request_list)

// Delete request list route
router.delete('/', requestListController.delete_request_list)

// Create get all route
router.get('/getAll', requestListController.get_all_request_list)


module.exports = router

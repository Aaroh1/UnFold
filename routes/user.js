const express = require('express')
const usercontroller = require('../Controllers/user')
const router = express.Router()
const upload = require("../Config/multerConfig");
const auth = require('../Middlewares/tokenauth');

router.get('/currentuser',auth ,usercontroller.user);
router.get('/getuserinfo',auth ,usercontroller.getuserinfo);
/**
 * @api{get} /user/getuserinfo get User
 * @apiName getuserinfo
 * @apiGroup users
 * @apiHeader {String} token The jwt token that is generated after signing in/up.
 * @apiSuccess {Object}  user details about user
 * @apiSuccessExample {json} user 
 * {
 *      "user":
 *      {"id": 1,
 *      "firstName": "Abc",
 *      "lastName": "DEF",
 *      "email" :"a@W.com"    
 *      "password": "12",
 *      "about" :"Hello"     
*      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"   
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"}
 *    }
 * @apiError (500) {json} Database error 
 * @apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getFollowingblogs',auth , usercontroller.getFollowingblogs)

router.get('/getbookmarkedblogs',auth , usercontroller.getbookmarkedblogs)
/**
 * @api {get} /user/getbookmarkedblogs get blogs bookmarked by user
 * @apiName getbookmarkedblogs
 * @apiGroup Users
 * @apiHeader {String} token The jwt token that is generated after signing in/up.
 * @apiQuery {UID} id Blog id
 * @apiSuccess {String[]} bblogs ids of all bookmarked blogs.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "bblogs":[
 *              "addb08654-ced11faf"
 *         ],
 *     }
 ** @apiError (500) {json} Database error 
 * @apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getFollowers',auth ,usercontroller.getFollowers)
/**
 * @api {get} /user/getFollowers get followers of user
 * @apiName getFollowers
 * @apiGroup Users
 * @apiHeader {String} token The jwt token that is generated after signing in/up.
 * @apiQuery {UID} id User id
 * @apiSuccess {user[]} bblogs array of followers of user type
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "bblogs":[
 *              "addb08654-ced11faf"
 *         ],
 *     }
 ** @apiError (500) {json} Database error 
 * @apiErrorExample (500)    
 * {error: 'Database error occurred while signing in!'}
 */
router.get('/getFollowing',auth ,usercontroller.getFollowing)

router.get('/getallusers',auth ,usercontroller.getallusers)

router.post('/followUser',auth ,usercontroller.followUser)

router.post('/unfollowUser',auth ,usercontroller.unfollowUser)

router.post('/bookmarkblog',auth ,usercontroller.bookmarkblog)

router.post('/unbookmarkblog',auth ,usercontroller.unbookmarkblog)

router.put('/editprofile',auth ,upload.single('item'),usercontroller.editprofile);

module.exports = router

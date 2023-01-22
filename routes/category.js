const express = require('express')
const upload = require('../Config/multerConfig')
const router = express.Router()
const catcontrollers = require('../Controllers/category')
const auth = require('../Middlewares/tokenauth')
/**
 * @api {get} /category/getallcategories get all categories
 * @apiName getallcategories
 * @apiGroup Categories
 * @apiSuccess {Objects[]}  allcats array of all categories
 *  @apiSuccessExample {json}
 * cat
 * ["cat":{
 *      "id": "16caee02-16a3-42e2-8a4b-be5e0094349c",
 *      "Title": "Study",
 *      "Description" :"Lorem Ipsum"
 *      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiError (500) {json} error Database error
 *@apiErrorExample (500)
 * {error: 'Database error'}
 */
router.get('/getallcategories', catcontrollers.getallcategories)
/**
 * @api {get} /category/getallcategoryblogs get all blogs which have given category
 * @apiName getallcategoryblogs
 * @apiGroup Categories
 *  @apiQuery {UID} id category id
 * @apiSuccess {Objects[]}  blogs array of all blogs having given category
 * @apiError (500) {json} error Database error
 *@apiErrorExample (500)
 * {error: 'Database error'}
 */
router.get('/getallcategoryblogs', catcontrollers.getallcategoryblogs)
/**
 * @api {get} /category/getcategoryinfo get info about category
 * @apiName getcategoryinfo
 * @apiGroup Categories
 * @apiQuery {UID} id category id
 * @apiSuccess {Object}  cat Details about given category id
 * @apiSuccessExample {Object}
 * cat
 * {
 *      "id": "16caee02-16a3-42e2-8a4b-be5e0094349c",
 *      "Title": "Study",
 *      "Description" :"Lorem Ipsum"
 *      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }
 * @apiError (500) {json} error Database error
 *@apiErrorExample (500)
 * {error: 'Database error'}
 */
router.get('/getcategoryinfo', catcontrollers.getcategoryinfo)
/**
 * @api {get} /category/getblogcategories get all categories of a blog
 * @apiName getblogcategories
 * @apiGroup Categories
 * @apiQuery {UID} id blog id
 * @apiSuccess {Objects[]}  cats array of all categories of blog
 * @apiError (500) {json} error Database error
 *@apiErrorExample (500)
 * {error: 'Database error'}
 */
router.get('/getblogcategories', auth, catcontrollers.getblogcategories)
/**
 * @api {post} /category/addcategoryblog add category to blog
 * @apiName addcategoryblog
 * @apiGroup Categories
 *  @apiBody {UID} bid       Blog id.
 * @apiBody {UID} cname      category name.
 * @apiQuery {UID} id blog id
 *  @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'category added successfully',
 *    }
 * @apiError (500) {json} error Database error
 *@apiErrorExample (500)
 * {error: 'Database error'}
 */
router.post('/addcategorytoblog', auth, catcontrollers.addcategorytoblog)

router.post('/addcategory', upload.single('item'), catcontrollers.addcategory)

module.exports = router

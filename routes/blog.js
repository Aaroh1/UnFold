const express = require('express')
const blogcontroller = require('../Controllers/blog')
const auth = require('../Middlewares/tokenauth')
const router = express.Router()
const upload = require('../Config/multerConfig')
/**
 * @api {delete} /blog/deleteblog Delete blog
 * @apiName deleteblog
 * @apiGroup Blogs
 * @apiQuery {UID} id blog id 
 * @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'blog deleted successfully',
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.delete('/deleteBlog', auth, blogcontroller.deleteBlog)
/**
 * @api{get}/blog/getAllBlogs Get all Blogs
 * @apiName getAllBlogs
 * @apiGroup Blogs
 * @apiHeader {String} Authorization The jwt token that is generated after signing in/up.
 * @apiSuccess {Array}  AllBlogs The list of all Blogs
 * @apiSuccessExample {json} AllBlogs 
 * [{
 *      "id": 1,
 *      "title": "Study",
 *      "content" :"<h2>Hello I am going to study now!</h2>"    
 *      "likes": 12,
 *      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"   
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiError (400) {json} error when no blogs are found
 * @apiError (500) {json} Database error 
 * @apiErrorExample (400)  
 * {error: 'No blogs found'}
 * @apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getAllBlogs', auth, blogcontroller.getAllBlogs)
/**
 * @api{get}/blog/getblogbyid Get Blog from id
 * @apiName getblogbyid
 * @apiGroup Blogs
 * 
 * @apiSuccess {Object}  blog blog details having given id
 * @apiQuery {UID} id Blog id
 * @apiSuccessExample {json}
 * blog
 * {
 *      "id": "16caee02-16a3-42e2-8a4b-be5e0094349c",
 *      "title": "Study",
 *      "content" :"<h2>Hello I am going to study now!</h2>"    
 *      "likes": 12,
 *      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"   
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }
 * @apiError (500) {json} Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getblogbyid', auth, blogcontroller.getblogbyid)
/**
 * @api{get}/blog/alluserBlogs Get all Blogs composed by user
 * @apiName alluserBlogs
 * @apiGroup Blogs
 * 
 * @apiSuccess {Object[]}  alluserblogs details of all blogs by user in ascending order of updation
 * @apiQuery {UID} id User id
 * @apiSuccessExample {json}
 * blog
 * [{
 *      "id": "16caee02-16a3-42e2-8a4b-be5e0094349c",
 *      "title": "Study",
 *      "content" :"<h2>Hello I am going to study now!</h2>"    
 *      "likes": 12,
 *      "imageurl":"https://cloudinary/12e33r",
 *      "cloudid":"asdasdcvw221sdf"   
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiError (500) {json} Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/allUserBlogs', auth, blogcontroller.getUserBlogs)
/**
 * @api{get}/blog/getlikedusers get all users who have liked the blog
 * @apiName getblikedusers
 * @apiGroup Blogs
 * 
 * @apiSuccess {json}  ids array of ids of all users who've liked the blog
 * @apiQuery {UID} id Blog id
 * @apiSuccessExample {json}
 * * {
 *      "ids":["16caee02-16a3-42e2-8a4b-be5e0094349c",]
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getlikedusers', auth, blogcontroller.getlikedusers)
/**
 * @api {post} /blog/addblog Compose a new blog
 * @apiName addblog
 * @apiGroup Blogs
 * @apiBody {String} title       Title of the Blog.
 * @apiBody {String} content          Content of the Blog
 * @apiBody {Object} file      multipart object depicting file uploaded
 * @apiQuery {UID} id User id
 * @apiSuccess {json}  blogid id of newly published blog
 * @apiSuccessExample {json} blogid
 * {
 *      "blogid":"02532d53-6751-4fa9-8fd5-73cf61b3ff3c",
 *    }
 * @apiError (400) {json} error no user found error 
 *@apiErrorExample (500)  
 * {"error": "No user found"}
 */
router.post('/addBlog', auth, upload.single('item'), blogcontroller.addBlog)
/**
 * @api {post} /blog/addblogcategory Add categories to a blog
 * @apiName addblogcategory
 * @apiGroup Blogs
 * @apiBody {UID} bid       Blog id.
 * @apiBody {UID} cid       Category id.
 * @apiSuccess {json}  blogid id of newly published blog
 * @apiSuccessExample {json} blogid
 * {
 *      "blogid":"16caee02-16a3-42e2-8a4b-be5e0094349c",
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.post('/addblogcategory', auth, blogcontroller.addblogcat)
/**
 * @api {put} /blog/editblog Edit blog
 * @apiName editblog
 * @apiGroup Blogs
 * @apiBody {String} newtitle       new title of the Blog.
 * @apiBody {String} newcontent     new content of the Blog
 * @apiBody {Object} file      multipart object depicting file uploaded
 * @apiQuery {UID} id Blog id
 * @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'blog edited successfully',
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.put('/editBlog', auth, upload.single('item'), blogcontroller.editBlog)
/**
 * @api {put} /blog/likeblog Like a blog
 * @apiName likeblog
 * @apiGroup Blogs
 * @apiBody {UID} bid       Blog id.
 * @apiBody {UID} uid       User id.
 * @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'blog liked successfully',
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.put('/likeBlog', auth, blogcontroller.likeBlog)
/**
 * @api {put} /blog/unlikeblog Dislike a blog
 * @apiName dislikeblog
 * @apiGroup Blogs
 * @apiBody {UID} bid       Blog id.
 * @apiBody {UID} uid       User id.
 * @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'blog disliked successfully',
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.put('/unlikeBlog', auth, blogcontroller.unlikeBlog)

module.exports = router

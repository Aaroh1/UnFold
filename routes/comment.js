const express = require('express')
const commentcontroller = require('../Controllers/comment')
const router = express.Router()
const auth = require('../Middlewares/tokenauth')

router.delete('/deletecomment', auth, commentcontroller.deletecomment)
/**
 * @api {delete} /comment/deletecomment Delete comment
 * @apiName deletecomment
 * @apiGroup Comments
 * @apiQuery {UID} id comment id 
 * @apiSuccess {json}  message success message
 * @apiSuccessExample {json} message
 * {
 *      "message":'comment deleted successfully',
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.get('/getComments', auth, commentcontroller.getcomments)
/**
 * @api {get} /comment/getComments get comment
 * @apiName getComments
 * @apiGroup Comments
 * @apiQuery {UID} bid Blog id 
 * @apiSuccess {Object[]}  comments comments under blog
 * @apiSuccessExample {Object[]} comments
 * {
 *      "comments":["id":'02532d53-6751-4fa9-8fd5-73cf61b3ff3c',
 *       "content":"gr8 blog"],
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
router.post('/addComment', auth, commentcontroller.addcomment)
/**
 * @api {post} /comment/addComment Add comment to blog
 * @apiName addComment
 * @apiGroup Comments
  *@apiBody {UID} uid commenter (user) id   
  *@apiBody {UID} bid blog id    
  *@apiBody {String} content comment body    
  * @apiSuccess {Object}  comment The newly added comment's details
 * @apiSuccessExample {Object} comment
 * {
 *      "comment":{
 *          "id":"02532d53-6751-4fa9-8fd5-73cf61b3ff3c",
 *          "content":"asdsad"       
 * },
 *    }
 * @apiError (500) {json} error Database error 
 *@apiErrorExample (500)    
 * {error: 'Database error'}
 */
module.exports = router

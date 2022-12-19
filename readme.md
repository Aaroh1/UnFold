<h1  align="center">Unfold your thoughts with Un-Fold ✉️</h1>

> Un-Fold : Connecting People, Ideas and Products worldwide !

## Project Description

Blogging website for webkriti.

- Users can create their un-fold account or can directly sign in if they already have an account  .

- Then the users will be directed to home page , and they can see all the latest blogs , and all the blogs by the users they follow.

- Users can search for blogs by title and also search for other users by their names.

- Users can open blogs, read , like and give review on them.

- In the same page , he/she can see otherblogs by the same user .

- Users can open any users' profile and can FOLLOW or UNFOLLOW them. They can also see users that they follow as well as their followers .

- In the profile page , all blogs by the user are also visible.

- Users can compose their own blog and choose categories related to the blog. The blog can be formatted with various tools present in the text-editor , links , images can also be added to the blog. Later the blogs can also be edited .

- Users can also edit their profile whenever they desire from the profile page.

- Users can bookmark any blog that they like from any page so as to get quick access to them in their profile page.



# Screen shots

<img  src="./assets/unfold1.png"></img>

<img  src="./assets/unfo.png"></img>

<img  src="./assets/unfold3.png"></img>

<img  src="./assets/unfold4.png"></img>

<img  src="./assets/unfold5.png"></img>

<img  src="./assets/edit.png"></img>

<img src="./assets/likesandcomments.png"></img>

<img src="./assets/bookmark.png"></img>

<img  src="./assets/last.png"></img>

### ✨ [Deployed site](http://65.0.100.50/)

# Features Implemented

## Front-end

1. Sign in and sign up page :

- All the checks have been made on the frontend side for email and password.

- A user friendly prompts appear if there is any error while filling the input values.

2. Home Page :

- Once the user is signed in, a token is generated, saved in local storage and also stored in browser cookie, which helps maintain session activity. This token is verified every time the user visits any page.

- Users can here view all the blogs(sorted by time) that have been posted and can bookmark them . 

- It also has a section of categories showcasing all the available genres.

- Then it has a 3rd section displaying the blogs added by the users whom the logged in user follows.

3. Blog Page :

- In the blog page , it has the record of the person by whom the blog is posted.

- Then the logged in user can also like or unlike (if he has already liked) and comment on the blog. The comments by users can be deleted by the respective commenter.q

- Then it has a section of other blogs by the author of the blog.

4. Blog edit page

- Users can edit their blogs .

5. Profile Page :

- Users can see the number of followers , following and the blogs .

- Can also follow/unfollow the user.

- See all the bookmarked blogs here.

- Can also see whom are they following and by whom they are being followed.

6. Edit Profile Page :

- Users can make changes to their profile like their profile image, bio, description etc., and all this information is sent to the back-end and then further stored in the database.

7. Category Page

- It displays information about the category and also exhibits the trending blogs belonging to the category.

8. EXTRA FEATURES THAT ARE IMPLEMENTED

- Users can add tags to their blogs to mention the genre of their blogs.

- Users can bookmark blogs and view them later.

- Users can follow/unfollow any other users.

#### Future Ideas

- One-on-One chat feature

- Allowing the user to archive his/her blogs or make it private

- implement notification for any activity(like/comment/bookmark) on posted blogs

- Allow users to share blogs via other platforms

## Back-end

1. slash routes for authentication purpose

- We have setup basic authentication for login and signup wherein we set up a token in the cookie and use it for authentication.

- POST routes

```

/api/login

/api/register

/api/logout

```

2. user routes to perform get, post and put operations pertaining to user information
   --We are verifying token as middleware for every post, get or delete request

- GET routes

```

/api/user/getuserinfo

/api/user/getFollowingblogs

/api/user/getbookmarkedblogs

/api/user/getFollowers

/api/user/getFollowing

/api/user/getallusers



```

- POST routes

```

/api/user/followUser

/api/user/unfollowUser

/api/user/bookmarkblog

/api/user/unbookmarkblog



```

- PUT route

```

/api/user/editprofile



```

3. blog routes to perform delete, get, post and put operations pertaining to blogs
   -- We are verifying token as middleware for every post, get or delete request

- DELETE routes

```

/api/blog/deleteBlog



```

- GET routes

```

/api/blog/getAllBlogs

/api/blog/getblogbyid

/api/blog/allUserBlogs

/api/blog/getlikedusers



```

- POST route

```

/api/blog/addBlog



```

- PUT routes

```

/api/blog/editBlog

/api/blog/likeBlog

/api/blog/unlikeBlog



```

4. comment route to add, delete and get comments.

- We are verifying token as middleware for every post, get or delete request

```

/api/comment/deletecomment

/api/comment/getComments

/api/comment/addComment



```

5. category routes for get and post requests on blog categories
   --We are verifying token as middleware for every post, get or delete request

- GET routes

```

/api/category/getallcategories

/api/category/getallcategoryblogs

/api/category/getcategoryinfo

/api/category/getblogcategories



```

- POST routes

```

/api/category/addcategorytoblog

/api/category/addcategory



```

6. Middlewares

- error middleware inorder to effectively handle any/all encountered errors in controller functions.

- tokenauth middleware for authemtication (put before each request) which checks for the presence of a jwt token in the cookie.

  ## Database

  -- PostgresSQL used as a database
  -- Schemas defined using Sequelize
  -- Several relationships (One to One, Many to One and Many to Many) have been defined between the main schemas (including user,blog ,comment and category schemas) in order to increase efficiency in data retrieval and eliminate redundancies. DAO as well as lazy and eager loading methods have been utilized.

# Technologies/Libraries/Packages Used

| Packages      | README                                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| bcrypt        | To store hashed password in database                                                                                 |
| dotenv        | To keep db connection string, client id, client secret key and also cloudinary config credentials safe               |
| jsonwebtoken  | To store users session encrypted and verify them as middleware in user/blog/comment/category api requests            |
| nodemon       | To run application in dev mode                                                                                       |
| body-parser   | Parse incoming request bodies in a middleware before your handlers, available under the req.body property.           |
| cloudinary    | It provides cloud-based image and video management services.                                                         |
| cookie-parser | Parse Cookie header and populate req.cookies with an object keyed by the cookie names.                               |
| cors          | For Cross-Origin Resource Sharing                                                                                    |
| express       | a back end web application framework for building RESTful APIs with Node.js                                          |
| jwt           | JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. |
| multer        | Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files.       |
| Sequelize     | Sequelize is a modern TypeScript and Node.js ORM for Postgres                                                        |

### Built With

<img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"  alt="html5"  width="40"  height="40"  style="max-width:100%;"><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"  alt="css3"  width="40"  height="40"  style="max-width:100%;"><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"  alt="javascript"  width="40"  height="40"  style="max-width:100%;"><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"  alt="nodejs"  width="40"  height="40"  style="max-width:100%;"><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"  alt="postgresql"  width="40"  height="40"  style="max-width:100%;"><a  href="https://expressjs.com"  target="_blank"> <img  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"  alt="express"  height="40"/> </a>

## Contact

👤 **Aaroh Srivastava, Anshu Joshi, Hari Om Sharma**

### Aaroh Srivastava (2021BCS-001)

- Github: [@Aaroh1](https://github.com/Aaroh1)

- LinkedIn: [@aarohsrivastava](https://www.linkedin.com/in/aaroh-srivastava-5051a9224/)

- Gmail: [mail](mailto:aarohsjcian1@gmail.com)

- Instagram: [@aaroh01](https://www.instagram.com/aaroh01/)

### Anshu Joshi (2021BCS-014)

- Github: [@ImAnshuJoshi](https://github.com/ImAnshuJoshi)

- LinkedIn: [@anshujoshi](https://www.linkedin.com/in/anshu-joshi-9080b6223/)

- Gmail: [mail](mailto:anshu.aj.joshi@gmail.com)

- Instagram: [@anshu_joshi](https://www.instagram.com/imanshujoshi/)

### Hari Om Sharma (2021BCS-029)

- Github: [@iamhariom0228](https://github.com/iamhariom0228)

- LinkedIn: [@hari-om-sharma](https://www.linkedin.com/in/hari-om-sharma-72249b244)

- Gmail: [mail](mailto:iamhariom28@gmail.com)

- Instagram: [@hari*om_sharma*](https://www.instagram.com/hari_om_sharma_/)

## Show your support

Give a ⭐️ if this project helped you!

const jwt = require('jsonwebtoken')
const db = require('../Config/dbconfig')
module.exports = (req, res, next) => {
  try {
    console.log(req.cookies)
    const token = req.cookies.token
    if (!token) {
      //if no token is present
      res.redirect('/')
    }
    jwt.verify(token, process.env.secretstring, async (err, decoded) => {
      if (err) {
        //If some error occurs
        res.status(400).json({
          error: 'User not Signed in, Sign in First.',
        })
      } else {
        console.log(decoded)
        const userDoc = await db.user.findOne({ where: { email: decoded.email } })
        if (!userDoc)
          res.status(400).json({
            error: 'User not Signed in, Sign in First.',
          })
        req.userEmail = userDoc.email
        req.userid = userDoc.id
      }
    })
    next()
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: 'A Miscellaneous error occurred while signing in!',
    })
  }
}

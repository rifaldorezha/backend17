const User = require("../models/user")
const bcrypt = require('bcrypt');

module.exports = {
  getAllUser: (req, res) => {

  },

  getUserByID: (req, res) => {

  },

  addUser: (req, res) => {

  },

  deleteUserByID: (req, res) => {

  },

  updateUserByID: (req, res) => {

  },
  login: async (req, res) => {
    const data = req.body

    const user = await User.findOne({ email: data.email })


    const checkPwd = bcrypt.compareSync(data.password, user.password)

    if (checkPwd) {
      res.json({
        message: "anda berhasil login",
        token: "kasih token di sini"
      })
    } else {
      res.json({
        message: "lu siapa???",
      })
    }
    // try {
    //   const email = req.body.email
    //   const password = req.body.password

    //   const user = await User.findOne({
    //     where: {
    //       email: email,
    //       password: password // Remove this if you have a verify password func
    //     }
    //   })

    //   if (!user) {
    //     res.status(403).send({
    //       error: "Password or email is wrong"
    //     })
    //   }
    // } catch (err) {
    //   console.log(err)
    //   res.status(500).send({
    //     error: "Error occured during login"
    //   })
    // }
  }
}
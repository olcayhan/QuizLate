const express = require("express")
const bcryptjs = require("bcryptjs")
const User = require("../models/UserModel.js")
const router = express.Router()



router.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body

        const userExists = await User.findOne({ email })
        if (userExists) return res.status(400).json({ message: "User already exist" })

        const hashedPassword = await bcryptjs.hash(password, 10)
        const createdUser = await User.create({
            email,
            password: hashedPassword
        })
        return res.status(201).json(createdUser)
    } catch (err) {
        console.log(err)
        return res.json({ message: "create user failed" })
    }

})


router.post("/signin", async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "user does not exist" })

        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong Password" })

        return res.status(200).json({ user, message: "Authentication successful" })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

})




module.exports = router
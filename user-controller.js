import User from '../model/user.js'
 export const signupUser= async (req, res)=> {
    try {
        const user = req.body
        const newUser = await User.create(user)
        console.log(newUser)
        // await newUser.save()
        
        return res.status(200).json({ msg: "signup successfull" })
    }
    catch (err) {
        return res.status(500).json({ msg: "error whie sign up" })
    }
}
export default signupUser
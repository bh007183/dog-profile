const router =  require("express").Router()
const Profile = require("../models/puppy-profile")



router.post("/api/createprofile",  async (req, res)=> {
let data = await Profile.create(req.body).catch(err => console.log(err))
res.json(data)
})

router.get("/api/dogs",  async (req, res)=> {
let data = await Profile.find().catch(err => console.log(err))
res.json(data)
})



module.exports = router
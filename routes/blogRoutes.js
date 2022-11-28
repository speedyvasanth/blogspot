const express = require("express")
const router = express.Router()
const Blog = require("../models/blog.js")
const User = require("../models/user.js")

router.route("/createBlog").post((req, res) =>{
    const blogtitle = req.body.blogtitle;
    const blogdesc = req.body.blogdesc;
    const blogimage = req.body.blogimage;
    const bloglink = req.body.bloglink;

    const NewBlog = new Blog({
        blogtitle,
        blogdesc,
        blogimage,
        bloglink
    })
    
    NewBlog.save()
})

router.route("/createUser").post((req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;

    const NewUser = new User({
        username,
        email,
        mobile,
        password
        
    })
    NewUser.save()
})


router.route("/blogs").get((req, res) =>{
    Blog.find()
        .then(foundBlogs => res.json(foundBlogs))
})

router.route("/users").get((req, res) =>{    
    User.find()
        .then(foundUsers => res.json(foundUsers))
})


module.exports = router;


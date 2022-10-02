const express = require("express")
const router = express.Router()
const Blog = require("../models/blog.js")

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

router.route("/blogs").get((req, res) =>{
    Blog.find()
        .then(foundBlogs => res.json(foundBlogs))
})


module.exports = router;


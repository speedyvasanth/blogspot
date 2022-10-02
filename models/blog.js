const mongoose = require('mongoose')

const blogSchema = {
    blogtitle: String,
    blogdesc: String,
    blogimage: String,
    bloglink: String
}

const blog = mongoose.model("Blog", blogSchema)

module.exports = blog;
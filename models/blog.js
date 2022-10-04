const mongoose = require('mongoose')

const blogSchema = {
    blogtitle: {
        type: String,
        trim: true,
        require: true
    },
    blogdesc: {
        type: String,
        trim: true,
        require: true
    },
    blogimage: {
        type: String,
        trim: true,
        require: true
    },
    bloglink: {
        type: String,
        trim: true,
        require: true
    },
}

const blog = mongoose.model("Blog", blogSchema)

module.exports = blog;
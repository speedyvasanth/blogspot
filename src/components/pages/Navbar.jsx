import React from 'react'

function Navbar() {    

    return(
        <>
        <h1>Amazon Amplify</h1>
        <div className='navBar'>
            <a href="/createBlog">Create Blog</a>
            <a href="/blogs">View All Blogs</a>
            <a href="/news">News</a>
        </div>
        </>
    )

}

export default Navbar;
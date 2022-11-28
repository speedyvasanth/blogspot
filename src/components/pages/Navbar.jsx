import React from 'react'

function Navbar() {    

    return(
        <>        
        <div className='navBar'>
            <a href="/createBlog">Create Blog</a>
            <a href="/blogs">View All Blogs</a>
            <a href="/news">News</a>
            <a href="/userSignup">Signup</a>
            <a href="/userLogin">Login</a>
            <a href="/users">List of Users</a>
            <a href="/counter">Redux Counter</a>
        </div>
        </>
    )

}

export default Navbar;
import React, { useState } from 'react'
import axios from 'axios'

function AddBlogspot(){
    const [input, setInput] = useState({
        blogtitle: '',
        blogdesc: '',
        blogimage: '',
        bloglink: ''
    })    

    const handleChange = (event) => {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput, 
                [name] : value
            }
        })
    }

    const handleSubmit = (event)=> {
        event.preventDefault();        
        const newBlog = {
            blogtitle: input.blogtitle, 
            blogdesc: input.blogdesc,
            blogimage: input.blogimage,
            bloglink: input.bloglink
        }
        axios.post('http://localhost:3001/createBlog', newBlog)
        .then((res)=> {
            document.write(`Successfully created blog post title ${res.blogtitle}, blog description ${res.blogdesc}, Image url ${res.blogimage} and Blog link ${res.bloglink} `)
        })
        .catch((error) => {
            document.write(error);
        })
    
    }

    

    return(
        <>
            <form className='col-sm-6 justify-content-sm-center blog-spot-form'>
                <h1>Add New Blog</h1>
                <div className="form-group row">
                    <label htmlFor="blogtitle" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} value={input.blogtitle} type="text" name="blogtitle" autoComplete='off' className="form-control" id="blogtitle" placeholder="Blog Title" maxLength={50} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="blogdesc" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <textarea onChange={handleChange} value={input.blogdesc} type="text" name="blogdesc" autoComplete='off' className="form-control" id="blogdesc" placeholder="Blog Description" maxLength={200}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="blogimage" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} value={input.blogimage} type="text" name="blogimage" autoComplete='off' className="form-control" id="blogimage" placeholder="Image Path/URL" maxLength={100}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="bloglink" className="col-sm-2 col-form-label">Blog Link</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} value={input.bloglink} type="text" name="bloglink" autoComplete='off' className="form-control" id="bloglink" placeholder="Blog Detail Link" maxLength={100}/>
                    </div>
                </div>             
                
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Create</button>                    
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddBlogspot;
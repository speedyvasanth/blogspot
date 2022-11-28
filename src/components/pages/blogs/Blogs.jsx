import React, { useEffect, useState } from 'react';

function Blogs() {
    const[blogdata, setBlogdata] = useState([{
        blogtitle: '',
        blogdesc: '',
        blogimage: '',
        bloglink: ''
    }])   

    useEffect(()=> {
        fetch("http://localhost:3001/blogs").then(res =>{
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes =>setBlogdata(jsonRes))
    }, [])

    const handleDelete = () => {
        
    }

    
    return(
        <>
            <h1>Blogs</h1>
            <div className='cards-container'>
            {             
                blogdata?.map((element, index) => {     
                    return(    
                        <React.Fragment key={index}>       
                            <div className="card" >
                                <img className="card-img-top" src={element.blogimage} alt={element.blogtitle} />
                                <div className="card-body">
                                    <h5 className="card-title">{element.blogtitle}</h5>
                                    <p className="card-text">{element.blogdesc}</p>
                                    <a href={element.bloglink} className="btn btn-primary">View More</a>
                                    <button onClick={handleDelete} className="btn btn-danger delete-btn">Delete</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )                    
                })
            }
            </div>
            
        </>
    )
}

export default Blogs
import React from "react";

const Newsitem = ({title, description, imageurl, linkurl}) => {
    return(
        <>
            <div className="card" >
                <img className="card-img-top" src={imageurl} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a target={`_blank`} href={linkurl} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
        
    )
}

export default Newsitem;
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Newsitem from './Newsitem';

function Newslist() {
    const[newsdata, setNewsdata] = useState([{
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt:''
    }])   

    useEffect(()=> {        
        const uri = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a12fe2b2731340be93b7e3c2ecad4d5d`;
        
        const getAriticles = async() => {
            const response = await axios.get(uri)
            console.log(response)
            setNewsdata(response.data.articles)
        }
        getAriticles()
        
    }, [])
    
    return(
        <>
            <h1 className='display-4'>Blogs</h1>
            <div className='sort col-md-3 offset-md-7'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='cards-container'>
            {             
                newsdata.map((news, index) => {     
                    return(   
                        <>
                        
                        <Newsitem
                            title={news.title}
                            description = {news.description}
                            imageurl = {news.urlToImage}
                            linkurl = {news.url}
                            key={index}
                        />
                        </>
                    )                    
                })
            }
            </div>
            
        </>
    )
}

export default Newslist;
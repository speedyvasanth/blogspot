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
    
    const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const[category, setCategory] = useState('business')
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }  
    const languages = ['ar','de','en', 'es', 'fr', 'he', 'it', 'in', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'];
    const[language, setLanguage] = useState('in') 
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value)
    } 

    useEffect(()=> {        
        const uri = `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&apiKey=a12fe2b2731340be93b7e3c2ecad4d5d`;
        
        const getAriticles = async() => {
            const response = await axios.get(uri)
            setNewsdata(response.data.articles)
        }
        getAriticles()        
        
    }, [category, language])    
    
    
    return(
        <>
        <div className='container'>
        <h1 className='display-4'>Blogs</h1>
            <div className='row'>
                <div className='sort col-md-3'>
                    <select id="languages" onChange={handleLanguageChange} className="form-select" aria-label="Default select example">
                        {languages?.map((item, i) => (
                            <option value={item} key={i}>
                                {item}
                            </option>
                        ))}                    
                    </select>
                </div>
                <div className='sort col-md-3'>
                    <select id="categories" onChange={handleCategoryChange} className="form-select" aria-label="Default select example">
                        {categories?.map((item, i) => (
                            <option value={item} key={i}>
                                {item}
                            </option>
                        ))}                    
                    </select>
                </div>
            </div>
            <div className='cards-container'>
            {             
                newsdata?.map((news, index) => {     
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
        </div>           
            
        </>
    )
}

export default Newslist;
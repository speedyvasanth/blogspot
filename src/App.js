import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddBlogspot from "./components/pages/blogs/AddBlogspot";
import Navbar from './components/pages/Navbar';
import Blogs from './components/pages/blogs/Blogs';
import Newslist from './components/pages/news/Newslist';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/createBlog" element={<AddBlogspot />} /> 
          <Route path="/blogs" element={<Blogs />}  />
          <Route path="/news" element={<Newslist />} />      
        </Routes>
      </Router>     
       
    </div>
  );
}

export default App;

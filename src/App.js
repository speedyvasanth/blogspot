import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddBlogspot from "./components/pages/blogs/AddBlogspot";
import Navbar from './components/pages/Navbar';
import Blogs from './components/pages/blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/createBlog" element={<AddBlogspot />} /> 
          <Route path="/blogs" element={<Blogs />}  />        
        </Routes>
      </Router>     
       
    </div>
  );
}

export default App;

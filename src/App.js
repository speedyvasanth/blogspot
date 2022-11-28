import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddBlogspot from "./components/pages/blogs/AddBlogspot";
import Blogs from './components/pages/blogs/Blogs';
import Newslist from './components/pages/news/Newslist';
import Signupform from './components/pages/signup/Signupform';
import Users from './components/pages/signup/Users';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/pages/signup/Login';
import Counter from './counter/counter';


function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <div className='container body'>
          <Router>
            <Routes>
              <Route path="/createBlog" element={<AddBlogspot />} /> 
              <Route path="/blogs" element={<Blogs />}  />
              <Route path="/news" element={<Newslist />} />
              <Route path="/userSignup" element={<Signupform />} />
              <Route path="/userLogin" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/counter" element={<Counter />} />    
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;

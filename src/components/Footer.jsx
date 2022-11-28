import React from 'react'

const Footer = () => {
  
  const year = new Date().getFullYear();
  return (
    <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white"}}>
            © {year} Copyright:
            <a className="text-white" href="/">Blogspot.com</a>
        </div>    
    </footer>
  )
}

export default Footer
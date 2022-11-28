import React from 'react'

const Login = () => {
    

  return (
    <>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-4'>
                    <h3>Login</h3>
                    <form>
                        <br />
                        <div className="form-group">
                            <label htmlFor="username">Enter Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" required={true}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" required={true}/>
                        </div> 
                        <br />                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Login
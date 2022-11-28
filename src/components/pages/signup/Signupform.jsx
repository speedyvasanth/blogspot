import axios from 'axios';
import React, {useState} from 'react';


const Signupform = () => {
    const[input, setInput] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""
    }); 

    const[error, setError] = useState(false)
    const[submitted, setSubmitted] = useState(false)

    const handleChange = (e)=> {
        setSubmitted(false)
        const{name, value} = e.target;
        setInput(prevInput=> {
            return {
                ...prevInput,
                [name]: value
            }
        })
        setSubmitted(true)
        
    }
    
    
    const signInSubmit = (event)=> {
        event.preventDefault();   
        setSubmitted(true)             
        const newUser = {
            username: input.username,
            email: input.email,
            mobile: input.mobile,
            password: input.password
        }        
        if(!input.username === '' &&  !input.email === '' && input.password === '' && submitted){
            setError(true);
            alert(error);
        }else{
            axios.post("http://localhost:3001/createUser", newUser); 
            alert(`Your Email is ${newUser.email} and Your Username ${newUser.username}`);     
        }   
        
    }
    
    
    return (
        <>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                <h3>User Signup</h3>
                <form onSubmit={signInSubmit}>
                    <div className="form-group">
                        <input  type="text" name="username" className="form-control" id="InputUsername" aria-describedby="emailHelp" placeholder="Enter username" value={input.username} onChange={handleChange} maxLength={20} required={true}/>                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={input.email} onChange={handleChange} maxLength={35} required={true} />                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" name="mobile" className="form-control" id="InputMobile" aria-describedby="mobileHelp" placeholder="Enter Mobile" value={input.mobile} onChange={handleChange} maxLength={13} />                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input autoComplete="false" name="password" type="password" className="form-control" id="InputPassword1" placeholder="Enter Password" value={input.password} onChange={handleChange} maxLength={50} required={true}/>
                    </div>
                    <br/>                    
                    <button type="submit" className="btn btn-primary" onClick={signInSubmit}>Submit</button>
                </form>
                </div>
            </div>
        </div>           
            
        </>
    )
}

export default Signupform;
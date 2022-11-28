import React from 'react'

function Users () {
    const [userdata, setUserdata] = React.useState([{
        username: "",
        email: "",
        mobile: "",
    }]);

    React.useEffect(()=> {        
        fetch("http://localhost:3001/users")
        .then(res =>{
            if(res.ok) {
                return res.json();
            }
        })
        .then((res) => {
            setUserdata(res)
        })        

    }, [])

    return (
        <>
            <div className='cards-container'>
            {             
                userdata?.map((element, index) => {     
                    return(    
                        <React.Fragment key={index}>       
                        <div className="card" >                            
                            <div className="card-body">
                                <h5 className="card-title">{element.username}</h5>
                                <h5 className="card-title">{element.mobile}</h5>
                                <p className="card-text">{element.email}</p>                                
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

export default Users
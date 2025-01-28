import React from "react";

 const Login = (()=>{
    return(
        <form className="w-25 text-center position-absolute top-35 start-50 translate-middle-x">
            <h1>Login</h1>
            <div className="form-outline mb-4 ">
                <input type="email" id="a1" className="form-control" />
                <label className="form-label" for="a1">phone Number</label>
            </div>

            <div  className="form-outline mb-4">
                <input type="password" id="a2" className="form-control" />
                <label className="form-label" for="a2">Password</label>
            </div>

             <button className="btn btn-primary btn-block mb-4">Sign in</button>
        </form>
    )
 })
  

 export default Login
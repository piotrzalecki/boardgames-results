import React, { useEffect, useState, Fragment } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from './ui-components/Alert';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

 



    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();

        let errors = [];

        if(email === ""){
            errors.push("email");
        }

        if(password === ""){
            errors.push("password");
        }

        setErrors(errors);

        if (errors.length > 0) {
            return false;
          }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());
        console.log(payload);
        props.handleJWTChange("klklklklkl");
        props.handleAlertChange({type: "alert-success", message: "You are logged in"})
        navigate("/");
    }

    function hasError(key) {
        return errors.indexOf(key) !== -1;
      }

    if (error !== null) {
        
        return <Alert 
          alertType={error.type}
          alertMessage={error.message}
          />
    } else {
        return (
            <Fragment>
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>email</label>
                    <input 
                        type="email"
                        className={`form-control`}
                        id="email"
                        name="email"
                        value={email} 
                        onChange={handleChangeEmail}
                        />
                        <div className={hasError("email") ? "text-danger" : "d-none"}>Please enter email</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input 
                        type="password"
                        className={`form-control`}
                        id="password"
                        name="password"
                        value={password} 
                        onChange={handleChangePassword}
                        />
                        <div className={hasError("password") ? "text-danger" : "d-none"}>Please enter password</div>
                </div>

                
                {/* <button className="btn btn-primary">Save</button> */}
                <button className="btn btn-danger">Login</button>
                

                

            </form>
            
            </Fragment>
        );
    }

}

export default Login;
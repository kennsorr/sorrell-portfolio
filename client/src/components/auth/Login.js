import React, {useState} from 'react'
import AlertContext from '../../context/alert/AlertContext'
function Login() {
    const [user, setUser] = useState({email:''});
    
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const OnSubmit = e => {
        e.preventDefault();
        console.log("Login User")
    }
    
    return (
        <div className="form-container">
            <h1>
                Enter your email:
            </h1>
            <form onSubmit={OnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" value={ user.email } onChange={ onChange } required/>
                </div>
                <input type="submit" value="Enter"/>
            </form>
        </div>
    )
}

export default Login

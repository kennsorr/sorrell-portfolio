import React, {useState, useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Register() {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email:'',
        phone: '',
        company:''
    });
    
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const OnSubmit = e => {
        e.preventDefault();
        if (user.name === '' || user.email === '' || user.phone === '' || user.company === '') {
            setAlert("Please enter all fields.")
        }
        console.log("Register User")
    }
    
    return (
        <div className="form-container">
            <h1>
                I dont think we've met. Let's get to know eachother.
            </h1>
            <form onSubmit={OnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={user.name} onChange={onChange} minLength={ 3 } maxLength={ 30 }/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" value={ user.email } onChange={ onChange } />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Phone:</label>
                    <input type="tel" name="phone" value={ user.phone } onChange={ onChange } />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input type="text" name="company" value={ user.company } onChange={ onChange } minLength={ 3 } maxLength={ 20 }/>
                </div>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register

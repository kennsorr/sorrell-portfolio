import React, {useState, useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import axios from 'axios';
import AuthContext from '../../context/auth/AuthContext'
import '../../styles/pages/Register.scss'

import { VscChevronRight } from 'react-icons/vsc';
function Register() {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register } = authContext;

    const [user, setUser] = useState({
        name: {value:'', error:'', focus:false},
        email:{value:'', error:'', focus:false},
        phone: {value:'', error:'', focus:false},
        company:{value:'', error:'', focus:false}
    });
    
    
    const onChange = e => {
        //focus: true - for autocompleted fields
        setUser({ ...user, [e.target.name]: {...user[e.target.name], value: e.target.value, focus: true} });
    }
    const onSubmit = e => {
        e.preventDefault();
        /** Not using frontend validation **/
        // if (user.name === '' || user.email === '' || user.phone === '' || user.company === '') {
        //     setAlert("Please enter all fields.")
        // }
        
        //** send only the user data **//
        const userData = {}
        for(let prop in user){
            userData[prop] = user[prop].value;
        }
        register(userData);
    }
    const onFocus = (e)=>{
        setUser({ ...user, [e.target.name]: {...user[e.target.name], focus: true} });
    }
    const onBlur = (e)=>{
        if(user[e.target.name].value === ""){
            setUser({ ...user, [e.target.name]: {...user[e.target.name], focus: false} });
        }
    }
    
    return (
        <div className="form-container">
            <h1>
                I dont think we've met. Let's get to know eachother.
            </h1>
            <form onSubmit={onSubmit} autocomplete="off">
                <div className={`form-group`}>
                    <label htmlFor="name" className={`${user.name.focus ? "focused" : ""}`}>Name</label>
                    <input type="text" name="name" className={`${user.name.focus ? "focused" : "n"}`} value={user.name.value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} minLength={ 3 } maxLength={ 30 } autocomplete="off"/>
                    <div className={`${user.name.focus ? "focused" : ""} border`}></div>
                </div>
                <div className={`form-group`}>
                    <label htmlFor="name" className={`${user.email.focus ? "focused" : ""}`}>Email</label>
                    <input type="email" name="email" className={`${user.email.focus ? "focused" : ""}`} value={ user.email.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} />
                    <div className={`${user.email.focus ? "focused" : ""} border`}></div>
                </div>
                <div className={`form-group`}>
                    <label htmlFor="name" className={`${user.phone.focus ? "focused" : ""}`}>Phone</label>
                    <input type="tel" name="phone" className={`${user.phone.focus ? "focused" : ""}`} value={ user.phone.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} />
                    <div className={`${user.phone.focus ? "focused" : ""} border`}></div>
                </div>
                <div className={`form-group`}>
                    <label htmlFor="name" className={`${user.company.focus ? "focused" : ""}`}>Company</label>
                    <input type="text" name="company" className={`${user.company.focus ? "focused" : ""}`} value={ user.company.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} minLength={ 3 } maxLength={ 20 }/>
                    <div className={`${user.company.focus ? "focused" : ""} border`}></div>
                </div>
                <input type="submit" class="submit" value="Go"/>
                {/* <FaBeer/> */}
                <button className="submit">Go<VscChevronRight/></button>
            </form>
        </div>
    )
}

export default Register

import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import axios from 'axios';
import AuthContext from '../../context/auth/AuthContext'
import '../../styles/pages/Register.scss'

import { VscChevronRight } from 'react-icons/vsc';
function Register(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register, error, successmsg, isAuthenticated, loadUser } = authContext;

        console.log("error", error)

    const [user, setUser] = useState({
        name: {value:'', error:'', focus:false},
        email:{value:'', error:'', focus:false},
        phone: {value:'', error:'', focus:false},
        company:{value:'', error:'', focus:false}
    });
    useEffect(() => {

        loadUser();

        /** redirect if used is logged in **/
        if (isAuthenticated === true) {
            props.history.push('/');
        } else {
            console.log("isAuthenticated == false")
        }

        if(error !== null){
            if(error.length > 0){
                /** Create new object with single error (from array returned from server/express validator) for each field **/
                let finalErrs={};
                for(let prop in user){
                    let errorsForField = error.filter(function(singError){   
                        if(singError.param === prop){
                            return singError
                        }
                    })
                    if(errorsForField[0]){
                        finalErrs[prop] = errorsForField[0];
                    } else{
                        finalErrs[prop] = "";
                    }
                }
                console.log("finalErrs", finalErrs);
                setUser({
                    name: {...user.name, error:finalErrs.name.msg},
                    email:{...user.email, error:finalErrs.email.msg},
                    phone: {...user.phone, error:finalErrs.phone.msg},
                    company:{...user.company, error:finalErrs.company.msg}
                });
            }
        } else {
            setUser({
                    name: {...user.name, error:''},
                    email:{...user.email, error:''},
                    phone: {...user.phone, error:''},
                    company:{...user.company, error:''}
                });
        }
        
        
    }, [error, isAuthenticated, props.history])
    
    
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
                <div className={`form-group ${user.name.error !== "" ? "error" : ""}`}>
                    <label htmlFor="name" className={`${user.name.focus ? "focused" : ""}`}>Name</label>
                    <input type="text" name="name" className={`${user.name.focus ? "focused" : ""}`} value={user.name.value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} minLength={ 3 } maxLength={ 30 } autocomplete="off"/>
                    <div className={`${user.name.focus ? "focused" : ""} border`}></div>
                    <div className="error">{user.name.error}</div>
                </div>
                <div className={`form-group ${user.name.error !== "" ? "error" : ""}`}>
                    <label htmlFor="name" className={`${user.email.focus ? "focused" : ""}`}>Email</label>
                    <input type="email" name="email" className={`${user.email.focus ? "focused" : ""}`} value={ user.email.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} />
                    <div className={`${user.email.focus ? "focused" : ""} border`}></div>
                    <div className="error">{user.email.error}</div>
                </div>
                <div className={`form-group ${user.name.error !== "" ? "error" : ""}`}>
                    <label htmlFor="name" className={`${user.phone.focus ? "focused" : ""}`}>Phone</label>
                    <input type="tel" name="phone" className={`${user.phone.focus ? "focused" : ""}`} value={ user.phone.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} />
                    <div className={`${user.phone.focus ? "focused" : ""} border`}></div>
                    <div className="error">{user.phone.error}</div>
                </div>
                <div className={`form-group ${user.name.error !== "" ? "error" : ""}`}>
                    <label htmlFor="name" className={`${user.company.focus ? "focused" : ""}`}>Company</label>
                    <input type="text" name="company" className={`${user.company.focus ? "focused" : ""}`} value={ user.company.value } onChange={ onChange } onFocus={onFocus} onBlur={onBlur} minLength={ 3 } maxLength={ 20 }/>
                    <div className={`${user.company.focus ? "focused" : ""} border`}></div>
                    <div className="error">{user.company.error}</div>
                </div>
                {/* <input type="submit" class="submit" value="Go"/><VscChevronRight/> */}
                <button className="submit" type="submit">Go<VscChevronRight/></button>
            </form>
        </div>
    )
}

export default Register

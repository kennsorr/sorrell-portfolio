import React, { useContext, useEffect } from 'react'
import PageHeader from '../layout/PageHeader'
import AuthContext from '../../context/auth/AuthContext'
function Home() {
    const authContext = useContext(AuthContext);
    useEffect(function () {
        authContext.loadUser();
    },[])
    return (
        <div id="main" className="Contact" style={{backgroundColor:'red'}}>
                <PageHeader title="Contact" desc="Let's connect" display="none"></PageHeader>
                <div class="center container">
                   <h1>Contact</h1>
                </div>
            </div>
    )
}

export default Home

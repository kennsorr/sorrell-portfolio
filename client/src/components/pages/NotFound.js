import React from 'react'
import {Link} from 'react-router-dom'
import LogoAnimation from '../../assets/logos/LogoAnimation';
import PageHeader from '../layout/PageHeader'


function NotFound() {
    return (
       
            <div id="main" className="NotFound" style={{backgroundColor:'red'}}>
                <PageHeader title="404 Page Not Found" desc="This page is not availble." display="none"></PageHeader>
                <div class="center container">
                    <Link to="/"><LogoAnimation style={{marginBottom: '27px'}}/></Link>
                    
                    <ul>
                        <li>The page has been deleted</li>
                        <li>You clicked a broken link</li>
                        <li>The URL contains a typo</li>
                    </ul>
                    <Link className="button normal" to="/" style={{ textAlign: "center", display: "block" }}><span ><i class="bi bi-chevron-left"></i>Back home</span></Link>
                </div>
            </div>
        
    )
}

export default NotFound

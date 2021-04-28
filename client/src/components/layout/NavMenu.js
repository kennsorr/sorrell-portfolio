import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import '../../styles/layout/NavMenu.scss';



function NavMenu() {
    const [menuState, changeMenuState] = useState(
        {
            hover: false,
            active: false
        }
    )
    function toggleMenu(toggled = false) {
        if (toggled) {
            document.body.classList.add('nav-active');
            
         } else {
            document.body.classList.remove('nav-active');
           
        }
        changeMenuState({ ...menuState, active: toggled });
    }
    function closeNav() {
        document.body.classList.remove('nav-active');
        changeMenuState({ ...menuState, active: false });
    }
    return (
        <React.Fragment>
         <div class="nav">
                <div class="nav__content">
                    <ul class="nav__list">
                        {/* <li class="nav__list-item"><Link onClick={closeNav} to="/">Home</Link></li> */}
                        <li class="nav__list-item"><Link onClick={closeNav} to="/about">About</Link></li>
                        <li class="nav__list-item"><Link onClick={closeNav} to="/portfolio">Projects</Link></li>
                        <li class="nav__list-item"><Link onClick={closeNav} to="/resume">Resume</Link></li>
                        {/* <li class="nav__list-item"><Link onClick={closeNav} to="/contact">Contact</Link></li> */}
                    </ul>
                </div>
        </div>
        <div id="NavMenu">
            <Hamburger label="Show menu" className={"MenuBtn"} onToggle={(toggled)=>toggleMenu(toggled)} toggled={menuState.active} toggle={changeMenuState}  />
        </div>
        </React.Fragment>
        
    )
}
export default NavMenu
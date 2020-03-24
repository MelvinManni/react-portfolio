import React from 'react';
import Navitems from './navItems';
import Navlogo from './navLogo';



function Navbar(){

    return <div>
        <nav className="navbar navbar-expand-lg navbar-light " id="navbar navBar">
            <Navlogo />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNav"
                aria-controls="toggleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <Navitems />
        </nav>
    </div>
}


export default Navbar;
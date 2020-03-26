import React from 'react';
import Navitems from './navItems';
import Navlogo from './navLogo';



class Navbar extends React.Component{


    componentDidMount = ()=>{
        let navBar = document.getElementById("navbar");



        window.addEventListener("scroll", () => {
            let Offset = window.pageYOffset;

            if (Offset > 120) {
                navBar.style.opacity = "0.85";
            } else {
                navBar.style.opacity = "1";
            }
        });

    }


    render(){
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top "  id="navbar">
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
}


export default Navbar;
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Button from './toggle';



function Navitems() {

    return (
        <div className="collapse navbar-collapse" id="toggleNav">

            <ul className="navbar-nav ml-auto">
                <li classNameName="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    <div className="nav-line">

                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    <div className="nav-line">

                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skill">Skills</a>
                    <div className="nav-line">

                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                    <div className="nav-line">

                    </div>
                </li>


                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    <div className="nav-line">

                    </div>
                </li>

                <li className="nav-item switchNav">

                    <ThemeConsumer>
                        {theme => (
                        <Button
                            variant="primary"
                            onClick={e =>
                                theme.setTheme(
                                    theme.mode === 'dark'
                                        ? { ...theme, mode: 'light' }
                                        : { ...theme, mode: 'dark' }
                                )
                            }
                        >
                                <i class="fas fa-lightbulb" id="light"></i>
                        </Button>
                    )}
                    </ThemeConsumer>
                    
                </li>
            </ul>
        </div>
    )
}




export default Navitems;
        
        
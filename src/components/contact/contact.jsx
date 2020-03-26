import React from 'react';
import FormalContact from './formalContact';
import Social from './socialContact/social';




function Contact (){
    return <div>

        <div className="relative">
            <div className="triangleAnimation">

            </div>
        </div>

        <p className="main-title" id="contact">
            Contact
            </p>
        <div className="contact">

            <FormalContact />
            <Social />
        </div>
    </div>
}


export default Contact;
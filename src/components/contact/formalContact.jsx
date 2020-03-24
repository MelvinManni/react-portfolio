import React from 'react';




function FormalContact (){

    return <div>
        <div className="contact__formal">

            <a className="contact__formalLink" href="mailto:melvinnnamani@gmail.com"><i className="far fa-envelope"></i>
                <p className="cont">melvinnnamani@gmail.com</p>
            </a>


            <a className="contact__formalLink" href="tel:+2348076080771"> <i className="fas fa-phone-alt"></i>
                <p >08076080771</p>
            </a>


            <a className="contact__formalLink" href="https://github.com/MelvinManni"><i className="fab fa-github-square"></i>
                <p className="cont">melvinmanni.github</p>
            </a>

        </div> 
    </div>

}

export default FormalContact;

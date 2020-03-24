import React from 'react';



function Footer(){
    return <div>
        <div className="footer">

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/melvin-kosisochukwu-9557a9184/" className="footer__socialFirst">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://bit.ly/2rn9pcL">
                    <i className="fab fa-facebook-square"></i>
                </a>

                <a href="https://twitter.com/Melvin_manni">
                    <i className='fab fa-twitter'></i>
                </a>

                <a href="https://www.instagram.com/melvin_manni/">
                    <i className="fab fa-instagram"></i>
                </a>

                
            </div>

            <p className="footer__text">
                Made with <span>❤</span> and <span role="img" aria-label="music" className="span" >🎧</span> by <a href="https://github.com/MelvinManni?tab=repositories" target="_blank" rel="noopener noreferrer" className="footer__link">Melvin_manni</a>
            </p>
        </div>
    </div>
}





export default Footer;
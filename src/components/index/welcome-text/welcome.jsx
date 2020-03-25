import React from 'react';





function Welcome(){

    return <div>
        <div className="welcome">
            <div className="circleAnimation">
                
            </div>

            <div className="welcome__mainText">
                <p>
                    Hi there, I'm 
                </p>
            </div>

            <div className="welcome__name">
                <p>
                    <span className="welcome__name--blinkBg">
                        Melvin Kosisochukwu
                </span>
                </p>
            </div>

            <div className="welcome__mainText welcome__mainText2">
               <p>
                    A Software Enginner <span className="welcome--color">..<span className="welcome--blink">.</span></span>
               </p>
            </div>


            <div className="welcome__about">
               <a href="/about">
                    My Story<i class="fas fa-external-link-alt"></i>
               </a>
            </div>

            <div className="welcome__btnText ">
                <p>
                    Hire me lets build an online presence for your dreams and business 
                </p>
            </div>

            <div className="welcome__btn">
                <a href="mailto:melvinmanni@gmail.com?subject=I Will Like To Employ Your Services" >
                    <button className="btn">
                        Hire Me
                </button>
                </a>

                <a href="https://drive.google.com/open?id=1Rwo2mKlF093bj8-YOMW7WA6tv7VStx_P" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                        Review CV
                </button>
                </a>
            </div>
        </div>
    </div>    

}



export default Welcome;
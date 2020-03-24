import React from 'react';



function Newsletter (){
    return <div>
        <div className="contact__newsletter">
            <form name="Newsletter" method="POST" data-netlify="true">

                <label for="news"> <span>
                    <h4>NEWSLETTER</h4>
                </span> Get latest update on progress and articles from me</label>
                <div className="contact__col">
                    <input id="news" class="mail-input" type="email" placeholder="Enter valid email" name="email" required />
                    <input className="contact__newsletterBtn btn" type="submit" value="Subscribe" />
                </div>
            </form>
        </div>
    </div>
}


export default Newsletter;
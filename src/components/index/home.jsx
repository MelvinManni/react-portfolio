import React from 'react';
import Navbar from '../navBar/navBar';
import Welcome from './../welcome';
import Projects from './../projects/projects';
import Contact from './../contact/contact';
import Footer from './../footer';
import Stack from './../stack';
import Top from './../toTop';






function Home() {

    return <div>

        <div>
            <Navbar />
        </div>


        <section className="fadeIn">
            <Welcome  />
        </section>

        <section>
            <Stack />
        </section>

        <section className="projectSect">
            <Projects />
        </section>

        <section className="contactSect">
            <Contact />
        </section>
        <Top />
        <footer>
            <Footer />
        </footer>
    </div>

}



export default Home;
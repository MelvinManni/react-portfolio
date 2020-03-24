import React from 'react';
import Navbar from './../navBar/navBar';
import Welcome from './../welcome';
import Projects from './../projects/projects';
import Contact from './../contact/contact';
import Footer from './../footer';
import Stack from './../stack';






function Home() {

    return <div>

        <Navbar />


        <section className="welcome fadeIn">
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

        <footer>
            <Footer />
        </footer>
    </div>

}



export default Home;
import React from 'react';
import Navbar from '../navBar/navBar';
import Welcome from './welcome-text/welcome';
import Projects from './projects/projects';
import Contact from './../contact/contact';
import Footer from '../footer/footer';
import Stack from './stack/stack';
import Top from '../to-Top/toTop';
import Theme from '../themeToggle/themeBtn';






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
        <Theme />
        <footer>
            <Footer />
        </footer>
    </div>

}



export default Home;
import React from 'react';
import Navbar from '../navBar/navBar'
import Footer from '../footer/footer';
import Skills from './skillset/skills';
import Contact from '../contact/contact';
import myStory from './mystory';
import Top from '../to-Top/toTop';
import Theme from '../themeToggle/themeBtn';


let n = 1080;


class About extends React.Component {


    constructor(props){

        super(props)
        this.state = {
            story: myStory.substring(0, n),
            more: 'more',
        }
    }

    render(){
        return (
        <div >

            <Navbar />
                
                <section className="fadeIn">

                    <div className="circleAnimation">

                    </div>

                    <div className="about">

                        <p className="main-title">
                            My Story
                    </p>

                        <p  className="about__text" dangerouslySetInnerHTML={{__html: this.state.story}}>
                        

                        
                    </p>    
                    <button className="readMore" onClick={e=>{
                        if (n <= 2280){

                            n += 600;
                            console.log(n);

                            this.setState({
                                story: myStory.substring(0, n)
                            })

                            if (n > 1680 ){

                                this.setState({
                                    more: 'less'
                                })
                            }

                        } else{
                            n = 1080;

                            this.setState({
                                story: myStory.substring(0, n)
                            })


                            this.setState({
                                more: 'more'
                            })

                        } 
                        
                    }}

                    >Read {this.state.more}</button>
                    <div className="readMoreLine">
                        
                    </div>
                    <div className="relative">
                        <div className="circleAnimation about_animate">

                        </div>
                    </div>
                        <Skills />


                    <div className="about__portfolio">
                        
                        <a href="/">
                            My Portfolio<i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>

                    </div>

                    
                </section>
                 
                 <section>
                     <Contact />
                 </section>
                <Theme />
                 <Top />
            <footer>
                <Footer />
            </footer>

        </div>
    )
    }

}


export default About
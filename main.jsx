import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './src/components/index/home';
import About from './src/components/about/about';




function Main (){
    
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
        </main>
    )
    
}




export default Main;
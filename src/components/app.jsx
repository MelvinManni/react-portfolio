import React, {useState, useEffect} from 'react';
import Main from './main';
import {  createGlobalStyle, ThemeProvider } from 'styled-components';
import useTheme from './useState';
import theme from 'styled-theming';
// import AddToHomescreen from 'react-add-to-homescreen';

const GlobaStyle = createGlobalStyle `

    body{
        background-color: ${props =>
    props.theme.mode === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.596)'};
        color: ${props =>
    props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.596)' : '#121212'};
    }

    #light{
            color: ${props =>
    props.theme.mode === 'dark' ? '#e2c41b' : 'black'};
    }

     nav .navbar-collapse .navbar-nav .nav-link{
            color: ${props =>
    props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.896)' : 'black'};
        }
    }

    nav nav-brand p{
        
    }

    .back-top button{
            color: ${props =>
        props.theme.mode === 'dark' ? '#121212' : '#fff'};
        }
    }

`;


 



function App(){


  const  theme = useTheme()
    
    return (
        <ThemeProvider theme={theme}>
            <GlobaStyle />
            <div>
                <Main />
                {/* <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} /> */}
            </div>
        </ThemeProvider>
    )

} 



// let handleAddToHomescreenClick = function() {
//     alert(`
//     1. Open Share menu
//     2. Tap on "Add to Home Screen" button`);
// };


export default App;
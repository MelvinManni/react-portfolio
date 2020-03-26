import React from 'react';
import Main from './route/main';
import {  createGlobalStyle, ThemeProvider } from 'styled-components';
import useTheme from './themeToggle/useState';
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
    props.theme.mode === 'dark' ? '#000' : '#e2c41b'};
    }

     nav .navbar-collapse .navbar-nav .nav-link, .project__title{
            color: ${props =>
    props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.896)' : 'black'};
        }
    }

    #navbar{
                background-color: ${props =>
        props.theme.mode === 'dark' ? '#121212' : 'rgb(255, 255, 255)'};
    }

    .back-top button{
            color: ${props =>
        props.theme.mode === 'dark' ? '#121212' : '#fff'};
        }
    }

    .fixed-theme{
        background-color: ${props =>
        props.theme.mode === 'dark' ? '#fff' : 'black'};
        }
    }

    .footer__social a {
        color: ${props =>
        props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.696)' : 'black'};
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
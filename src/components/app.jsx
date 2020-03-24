import React, {useState, useEffect} from 'react';
import Main from './main';
import {  createGlobalStyle, ThemeProvider } from 'styled-components';
import useTheme from './useState';
import theme from 'styled-theming';


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

`;





function App(){

  const  theme = useTheme()
    
    return (
        <ThemeProvider theme={theme}>
            <GlobaStyle />
            <div>
                <Main />
            </div>
        </ThemeProvider>
    )

} 



export default App;
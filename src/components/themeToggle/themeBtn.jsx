import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Button from './toggle';




function Theme(){
    return(
           <div className="fixed-theme">
                < ThemeConsumer >
                    {theme => (
                        <Button
                            variant="primary"
                            onClick={e =>
                                theme.setTheme(
                                    theme.mode === 'dark'
                                        ? { ...theme, mode: 'light' }
                                        : { ...theme, mode: 'dark' }
                                )
                            }
                        >
                            <i class="fas fa-lightbulb" id="light"></i>
                        </Button>
                    )
                    }
                </ThemeConsumer >
           </div>
    )
}



export default Theme;
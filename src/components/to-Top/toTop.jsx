import React from 'react';





class Top extends React.Component{
    constructor(){
        super()
        this.state = {
            pageSet: window.pageYOffset,
        }
    }

    componentWillMount = ()=>{
        window.addEventListener('scroll', ()=>{

            let top = document.getElementById("topper");

            if (window.pageYOffset > 400) {
                
                top.style.display = 'block'

            } else {
                top.style.display = 'none'
            } 
            
        })
    }

    render(){
        return (
            <div className="back-top">
                <button  onClick={
                    e => {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                    }
                } className="btn-top" id="topper">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        )
    }
}



export default Top;
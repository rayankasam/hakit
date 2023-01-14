import React, { useEffect } from "react";
import logo from './hakIT.png'

function Home(){
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('is-active');
        });
    }, []);
    return(
        <nav>
         <div class = "container">
           <div>
            <img src={logo} alt = "Logo"></img>
           </div>

           <div class= "ham">
            <botton class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </botton>
           </div>
         </div>
        </nav>
        
    );
}

export default Home;
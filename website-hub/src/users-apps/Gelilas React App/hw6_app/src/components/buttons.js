import React from "react";

function Buttons() {
    return (
        <div class="buttons">
            <a href="https://www.linkedin.com/in/gelila-kebede/" target="_blank"> 
                <img class="linkedin" src={require('./images/linkedin_icon.jpg')} width="50" height="50" alt=""></img>
            </a>
            <a href="https://www.instagram.com/gelila.kebede/" target="_blank"> 
                <img class="icons" src={require('./images/instagram_icon.jpg')} width="50" height="50" alt=""></img>
            </a>
            <a href="https://open.spotify.com/user/gelilakebede123?si=0e0990cdf0c64860" target="_blank">  
                <img class="icons" src={require('./images/spotify_icon.jpg')} width="50" height="50" alt=""></img>
            </a>
        </div>
    );
}

export default Buttons;
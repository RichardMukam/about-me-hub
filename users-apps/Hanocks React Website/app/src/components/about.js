import Hobbies from "./hobbies";
import React from "react";
export default function About() {
    
    return (
        <section id="about">
            <h1>Hanock Tsegaye</h1>
                <div class="box">
                    About Me!
                    <div class="box-text">Some of my favorite hobbies consist of...</div>
                    <h2>Music Production</h2>
                    <div class="box-text">
                        <p>During quarantine, I began trying new hobbies in my bordem. Lo and behold, music was a secret passion of mine.</p>
                    </div>
                    
                    <video width="540" height="303" controls>
                        <source src="Kippy-Jump-Up-Beneath-The-Stars.mp4" type="video/mp4"></source>
                    </video>
                    <h2>Drawing</h2>
                    <div class="box-text">
                        <p>Been drawing for a while. It's a very theraputic process.</p>
                    </div>
                    <img src="sketch1663750295414.png" alt="" width="463" height="579"></img>
                    <h2>Video Games</h2>
                    <img src="zelda-the-legend-of-zelda.gif" alt=""></img>
                    <span class = "box-text">
                        <h3>Some of my current favorite games!</h3>
                        <ol>
                            <Hobbies />
                        </ol>
                    </span>
                </div>
        </section>
    );
}
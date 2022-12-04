import React from "react";

function MoviesShows() {
    return (
    <div class="content_box">
        <h3 class="section_header"> MOVIES + SHOWS </h3>

        <div class="row">
            <div class="column">
                <img src={require('./images/succession.jpg')} style={{width:'70%'}} alt=""></img>
                <p> Succession </p>
            </div>
            <div class="column">
                <img src={require('./images/beautiful_boy.jpg')} style={{width:'70%'}} alt=""></img>
                <p> Beautiful Boy </p>
            </div>
            <div class="column">
                <img src={require('./images/the_batman.jpg')} style={{width:'70%'}} alt=""></img>
                <p> The Batman </p>
            </div>

            <div class="column">
                <img src={require('./images/schitts_creek.jpg')} style={{width:'70%'}} alt=""></img>
                <p> Schitt's Creek </p>
            </div>
        </div>
    </div>
    );
}

export default MoviesShows;
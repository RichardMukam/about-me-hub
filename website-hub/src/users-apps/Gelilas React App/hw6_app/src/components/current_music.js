import React from "react";

function CurrentPlaylist() {
    return (
        <div class="content_box">
            <h3 class="section_header"> CURRENT PLAYLIST</h3>
            <iframe title="spotify" src="https://open.spotify.com/embed/playlist/3ymptxxvAwKVUjYjKFjtyR?utm_source=generator&theme=0" width="50%" height="400" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <h3>Some of my current favorite musical artists: </h3>
            
            <ul> 
                <li> Weston Estate </li>
                <li> Omar Apollo </li>
                <li> KAMAARA </li>
                <li> Magic City Hippies </li>
                <li> Steve Lacy </li>
            </ul>
        </div>
        
    );
    
}





export default CurrentPlaylist;
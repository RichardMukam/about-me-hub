import React from "react";
import sanjeev from '../THORSEN_0469_JPG.jpeg';
import image2 from '../IMG_4835 (1).jpg'
import image3 from '../IMG_5585.jpg'
import image4 from '../richardpic.jpg'
import image5 from '../zelda-background1.jpg'

export default function Title()
{
    return (
        <div>
            <div id="title-div">
                <h1 className="title-text">team 3</h1>
                <h1 className="title-text">hack4impact's bootcamp's personal websites</h1>
            </div>
            
            <div class="description1">
                <div class="table">
                    <div class="column">
                        <img src={sanjeev} alt="First pic of Sanjeev" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image2} alt="pic2" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image3} alt="pic3" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image4} alt="pic4" style={{width: '100%'}}></img>
                    </div>
                    <div class="column">
                        <img src={image5} alt="pic5" style={{width: '100%'}}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
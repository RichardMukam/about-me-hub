import sanjeev from '../THORSEN_0469_JPG.jpeg';
import image2 from '../IMG_1923.PNG'
import image3 from '../IMG_5585.jpg'
import image4 from '../richardpic.jpg'
import image5 from '../zelda-background1.jpg'

export default function Images() {
    return (
        <>
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
        </>

    );
}
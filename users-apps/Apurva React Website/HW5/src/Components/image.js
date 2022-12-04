
import img from '../IMG_5585.jpg';

export default function Image()
{
    return (
        <>
        <center>
            <div id="img-div">
                <img id="my-pic" src={img} alt="Summer pic with my sister!" />
                <p><em> Summer pic with my sister!</em></p>
            </div>
        </center>
        </>
    );
}
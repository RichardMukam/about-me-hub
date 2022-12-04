import headshot from '../richardpic.jpg';

export default function Image()
{
    return (
        <>
            <div id="img-div">
                <img id="my-pic" src={headshot} alt="A headshot image of Richard Mukam Jr" />
            </div>
        </>
    );
}
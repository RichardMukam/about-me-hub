import React from 'react';
import ReactDOM from 'react - dom';
import App from './App';
import './App.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('./hw6.js')
);

const new_interests = [
    { interest: 'AR', why: 'Designing 3D objects' },
    { interest: 'VR', why: 'Designing a new reality' },
]

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>William Le</h1>
                <p>I'm a sophomore studying Technology & Information Design</p>
                <section id="shape">
                    <div class="circle"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                </section>
                <h1>My Interests</h1>
                <section id="container">
                    <div style="background-color: #ff13ef; height: 350px;">Design</div>
                    <div style="background-color: #ffa42e; height: 400px;">Fashion</div>
                    <div style="background-color: #90ff6bf4; height: 300px;">Sports</div>
                </section>
                <div>
                    <span class="Design">
                        <h2>Design</h2>
                        <p> I have always been passionate in art as a young kid.
                            As I continued to grow up, I enjoyed making graphic design pieces.
                            However, this past year, I have been practicing skills in UI/UX Design! </p>
                    </span>
                </div>
                <div>
                    <span class="Fashion">
                        <h2>Fashion</h2>
                        <p> Growing up, my family has always been keeping up with different fashion trend so I just followed them:And with my eye for design, I always had a set idea of what materials/style I like to wear. </p>
                    </span>
                </div>
                <div>
                    <span class="Sports">
                        <h2>Sports</h2>
                        <p>My favorite sport is soccer and I also enjoy playing/watching basketball, football, and more. I also played competitive soccer since I was around 10 years old and I just continued with my passion until I came here. Now I'm just playing for fun with friends and the club team!</p>
                    </span>
                </div>
            </header>
        </div>

    );
}
export default App;
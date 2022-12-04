import './App.css';
var cooks = require('./Cooksy.gif');
var club_tennis = require('./IMG_1923.PNG');
var king = require('./King.jpeg');

const fav_athletes = [
  {name: 'Roger Federer', sport: 'Tennis'},
  {name: 'Jamaar Chase', sport: 'Football'},
  {name: 'Dejounte Murray', sport: 'Basketball'}, 
  {name: 'Magnus Carlsen', sport: 'Chess'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Sathya Gnanakumar's Website!</h1>
        <h2>Below are some facts and pictures about me and my hobbies.</h2>
        <a href = "https://lichess.org:" target = "_blank">
            <h3>I love to play chess: Lichess is my favorite website to play on </h3>
        </a>
        <img alt="Paris" class="center" src={king} />
        <h2>I love to watch football and play fantasy football. One of my favorite players is Brandin Cooks.
           His nickname is "The Archer" and I enjoy this celebration when he scores a touchdown. 
        </h2>
        <img alt="Paris" class="center" src={cooks} />
        <div>
            <h2>I love playing tennis. I have been playing since I was 8 years old.
                I enjoy watching and playing the game and am a member of UMD Club Tennis. 
                <img alt="Paris" class="tennis" src={club_tennis} />
            </h2>
        </div>
        <h2>Some of my current favorite athletes!</h2>
        <div class = "athletes">
              {fav_athletes.map(sportPlay => (
                <section>
                  <li>{sportPlay.name}: {sportPlay.sport}</li>
                </section>
              ))}
        </div>
      </header>
    </div>
  );
}

export default App;

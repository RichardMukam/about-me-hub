import './App.css';
import './index.css';
import MoviesShows from "./components/movies_shows";
import Hobbies from "./components/hobbies";
import CurrentPlaylist from "./components/current_music";
import Buttons from "./components/buttons";

function App() {
  return (
    <main>
      <h1 class="page_title"> GELILA KEBEDE </h1>
      <Buttons />
      <CurrentPlaylist />
      <MoviesShows />
      <Hobbies />
    </main>

  );
}

export default App;

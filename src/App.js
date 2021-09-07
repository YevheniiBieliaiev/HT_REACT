import "./css/Reset.scss";
import "./css/App.scss";
import { useState } from "react";
import AddSong from "./components/AddSong";
import AddList from "./components/AddList";
import SONGS from "./components/songsList";


function App() {
  const [songsData, setSongsData] = useState(SONGS);
  return (
    <div className="App">
      <AddSong />
      <ul className="songs__list">
        {
          songsData.map(songItem => <AddList song={songItem} key={songItem.id} />)
        }
      </ul>
      <span className="songs__counter">Number of songs: {songsData.length}</span>
    </div >
  );
}

export default App;

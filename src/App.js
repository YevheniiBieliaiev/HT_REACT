import "./css/Reset.scss";
import "./css/App.scss";
import { useState } from "react";
import SONGS from "./components/songsData";
import AddSongButton from "./components/UI/button/add-song-button/AddSongButton";
import ModalAddSOng from "./components/UI/modal/ModalAddSong";
import AddSong from "./components/AddSong";
import SongsList from "./components/SongsList";
import SongsCounter from "./components/SongsCounter";


function App() {
  const [songs, setSongsArray] = useState(SONGS);
  const [modal, setModal] = useState(false);

  const newSong = (song) => {
    setSongsArray([...songs, song]);
    setModal(false)
  }
  const deleteSong = (id) => {
    setSongsArray(songs.filter(song => song.id !== id))
  }

  const isLike = (id, isLiked) => {
    songs.forEach(song => {
      if (id === song.id) {
        song.isLiked = !isLiked;
      }
    })
    setSongsArray([...songs]);
  }

  return (
    <div className="App">
      <AddSongButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>Add new song</AddSongButton>
      <ModalAddSOng visible={modal} setVisible={setModal}>
        <AddSong newSong={newSong} />
      </ModalAddSOng>
      <SongsList initialSongsArray={songs} deleteSong={deleteSong} isLike={isLike}/>
      <SongsCounter counterData={songs} />
    </div >
  );
}

export default App;

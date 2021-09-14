import "./css/Reset.scss";
import "./css/App.scss";
import { useState, useMemo } from "react";
import SONGS from "./components/songsData";
import AddSongButton from "./components/UI/button/add-song-button/AddSongButton";
import SongsFilter from "./components/SongsFilter";
import ModalAddSOng from "./components/UI/modal/ModalAddSong";
import AddSong from "./components/AddSong";
import SongsList from "./components/SongsList";
import SongsCounter from "./components/SongsCounter";


function App() {
  const [songs, setSongsArray] = useState(SONGS);
  const [modal, setModal] = useState(false);
  //for filter
  const [searchRequest, setSearchRequest] = useState("");
  const [selectYear, setSelectSongYear] = useState("");
  const [checked, setCheckBox] = useState(false);

  const newSong = (song) => {
    setSongsArray([...songs, song]);
    setModal(false)
  }

  const deleteSong = (id) => {
    setSongsArray(songs.filter(song => song.id !== id))
  }

  const isLike = (id, isLiked) => {
    //v.1
    // songs.forEach(song => {
    //   if (id === song.id) {
    //     song.isLiked = !isLiked;
    //   }
    // })
    // setSongsArray([...songs]);

    //v.2 - better
    setSongsArray(songs.map(song => {
      if (id === song.id) {
        return { ...song, isLiked: !song.isLiked }
      }
      return song
    }))
  }

  const filterSongArray = useMemo(() => {
    if (searchRequest) {
      return songs.filter(song => song.song.toLowerCase().includes(searchRequest.toLowerCase()));
    } else if (Number(selectYear)) {
      return songs.filter(song => song.releaseDate.includes(selectYear));
    } else if (checked) {
      return songs.filter(song => (song.isLiked));
    }
    return songs
  }, [searchRequest, selectYear, checked, songs]);


  return (
    <div className="App">
      <AddSongButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>Add new song</AddSongButton>

      <SongsFilter
        data={songs}
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
        selectYear={selectYear}
        setSelectSongYear={setSelectSongYear}
        checked={checked}
        setCheckBox={setCheckBox}
      />

      <ModalAddSOng visible={modal} setVisible={setModal}>
        <AddSong newSong={newSong} />
      </ModalAddSOng>

      <SongsList initialSongsArray={filterSongArray} deleteSong={deleteSong} isLike={isLike} />

      <SongsCounter counterData={songs} />
    </div >
  );
}

export default App;

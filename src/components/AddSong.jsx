import { useState } from "react";
import Input from "./UI/input/Input";
import songID from "../generatorID";
import AddSongButton from "./UI/button/add-song-button/AddSongButton";


function AddSong({ newSong }) {

  const [song, setSong] = useState({
    author: "",
    song: "",
    albumName: "",
    releaseDate: ""
  });

  const ADD_SONG_DATA = (event) => {
    event.preventDefault();

    const NEW_SONGS_DATA = {
      ...song,
      id: songID(),
      isLiked: false
    }
    newSong(NEW_SONGS_DATA)
  }

  return (
    <form className="adding__song">
      <div className="song__name">
        <Input type="text"
          value={song.author}
          name="band"
          placeholder="Band..."
          onChange={(event) => setSong({ ...song, author: event.target.value })}
        />
        <Input type="text"
          value={song.song}
          name="song"
          placeholder="Song..."
          onChange={(event) => setSong({ ...song, song: event.target.value })}
        />
      </div>
      <div className="song__detail">
        <Input type="text"
          value={song.albumName}
          name="album"
          placeholder="Album..."
          onChange={(event) => setSong({ ...song, albumName: event.target.value })}
        />
        <Input type="text"
          value={song.releaseDate}
          name="release__date"
          placeholder="Release year..."
          onChange={(event) => setSong({ ...song, releaseDate: event.target.value })}
        />
      </div>
      <AddSongButton type="submit" onClick={ADD_SONG_DATA}>Add song</AddSongButton>
    </form>
  );
}

export default AddSong;
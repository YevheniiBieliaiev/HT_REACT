import React, { useState, useMemo } from "react";
import { useHistory } from "react-router";
import SONGS from "../components/songsData";
import UserActivitiesButton from "../components/UI/button/activities-button/ActivitiesButton";
import AddSongButton from "../components/UI/button/add-song-button/AddSongButton";
import FilterContext from "../components/UI/filter-select/Context";
import SongsFilter from "../components/SongsFilter";
import ModalAddSOng from "../components/UI/modal/ModalAddSong";
import AddSong from "../components/AddSong";
import SongsList from "../components/SongsList";
import SongsCounter from "../components/SongsCounter";



function UserSongs() {
  const [songs, setSongsArray] = useState(SONGS);
  const [modal, setModal] = useState(false);
  const historyAbout = useHistory();
  //for filter
  const [searchRequest, setSearchRequest] = useState("");
  const [selectYear, setSelectSongYear] = useState("");
  const [filterLiked, setCheckBox] = useState(false);

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
    } else if (filterLiked) {
      return songs.filter(song => (song.isLiked));
    }
    return songs
  }, [searchRequest, selectYear, filterLiked, songs]);

  return (
    <div className="App">
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <UserActivitiesButton onClick={() => historyAbout.push(`/useractivities`)}>Your activities
        </UserActivitiesButton>

        <AddSongButton onClick={() => setModal(true)}>Add new song</AddSongButton>
      </div>
      <FilterContext.Provider value={
        [songs,
          searchRequest,
          setSearchRequest,
          selectYear,
          setSelectSongYear,
          filterLiked,
          setCheckBox]
      }>
        <SongsFilter />
      </FilterContext.Provider >

      <ModalAddSOng visible={modal} setVisible={setModal}>
        <AddSong newSong={newSong} />
      </ModalAddSOng>

      <SongsList initialSongsArray={filterSongArray} deleteSong={deleteSong} isLike={isLike} />

      <SongsCounter counterData={songs} />
    </div >
  );
}

export default UserSongs;

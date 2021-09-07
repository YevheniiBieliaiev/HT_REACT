function AddSong() {
  return (
    <div className="adding__song">
        <div className="song__name">
          <input className="input__box band" type="text" placeholder="Band..." />
          <input className="input__box song" type="text" placeholder="Song..." />
        </div>
        <div className="song__detail">
          <input className="input__box album" type="text" placeholder="Album..." />
          <input className="input__box release__date" type="text" placeholder="Release year..." />
        </div>
        <input className="button add" type="button" value="Add new song" />
    </div>
  );
}

export default AddSong;
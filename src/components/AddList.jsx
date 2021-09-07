
function AddList({ song }) {
  return (
    <li>
      <div className="song__details">
        <span className="song">{song.author} - {song.song}</span>
        <span className="album">Album: {song.albumName} - {song.releaseDate}</span>
      </div>
      <input className="button delete" type="button" value="Delete"/>
      <input className="button like" type="button" value={!(song.isLiked) ? "Like" : "Unlike"}/>
    </li>
  );
}

export default AddList;
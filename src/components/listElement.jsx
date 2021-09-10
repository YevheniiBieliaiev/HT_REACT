import DeleteButton from "./UI/button/list-button/DeleteButton";
import LikeButton from "./UI/button/list-button/LikeButton";
import AddLike from "./UI/add-like-img/AddLikeImg";
import like from "./UI/add-like-img/like.svg"


function ListElement({ listData, deleteSong, isLike }) {

  return listData.map(songItem => {
    return (
      <li key={songItem.id}>
        <div className="song__details">
          <span className="song">{songItem.author} - {songItem.song}</span>
          <span className="album">Album: {songItem.albumName} - {songItem.releaseDate}</span>
        </div>

        <DeleteButton
          onClick={() => deleteSong(songItem.id)}
          customClassName="delete">Delete
        </DeleteButton>

        <LikeButton
          onClick={() => isLike(songItem.id, songItem.isLiked)}
          customClassName="like">{!(songItem.isLiked) ? "Like" : "Unlike"}
        </LikeButton>

        <AddLike
          style={{ display: (songItem.isLiked) ? "block" : "none" }}
          src={like}
          alt={"HEART"} />
      </li>
    );
  })
}

export default ListElement;
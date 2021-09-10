import ListElement from "./listElement";


function SongsList({ initialSongsArray, deleteSong, isLike }) {
  return (
    <ul className="songs__list">
      <ListElement listData={initialSongsArray} deleteSong={deleteSong} isLike={isLike} />
    </ul>
  );
}

export default SongsList;
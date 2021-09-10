function SongsCounter({counterData}) {
  
  return (
    <span className="songs__counter">Number of songs: {counterData.length}</span>
  );
}

export default SongsCounter;
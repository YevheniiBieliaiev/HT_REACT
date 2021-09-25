import SONGS from "../components/songsData";
import gID from "../gid_general";

function randomDate() {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  let start = new Date('10/10/2020').getTime();
  let end = new Date('03/31/2021').getTime();

  return new Date(randomValueBetween(start, end)).toLocaleDateString();
}

function UserActivities() {
  return (
    <div className="activities__block">
      <ul>
        <li style={{ color: `#b1053e` }}>10/10/2020 - REGISTRATION</li>
        {
          SONGS.map(item => {
            return (
              <li key={gID()}>{randomDate() + ` Add song: ` + item.author + ` - ` + item.song}</li>
            );
          })
        }
      </ul>
    </div >
  );
}

export default UserActivities;
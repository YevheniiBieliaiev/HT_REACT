import gID from "../../../gid_general";

function Select(props) {
  const { value, songsData, onChange } = { ...props };

  const yearsArray = songsData
    .map(song => song.releaseDate)
    .sort((a, b) => {
      return a - b;
    });

  const uniqYears = Array.from(new Set(yearsArray))

  return (
    <select
      value={value}
      onChange={onChange}>

      <option value="Choose song's year">Choose song's year</option>
      {
        uniqYears.map(year => {
          return (
            <option key={gID()} value={year}>{year}</option>
          )
        })}

    </select>
  );
}

export default Select;
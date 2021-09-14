import clasess from "./UI/filter-select/Filter.module.scss";
import Input from "./UI/input/Input";
import Select from "./UI/filter-select/Select";
import CheckBox from "./UI/filter-select/CheckBox";

function SongsFilter({
  data,
  searchRequest,
  setSearchRequest,
  selectYear,
  setSelectSongYear,
  checked,
  setCheckBox
}) {
  return (
    <div className={clasess.filter__form}>
      <Input style={{ width: "350px" }}
        value={searchRequest}
        type="text"
        name="songFilter"
        placeholder="Find a song"
        onChange={(event) => setSearchRequest(event.target.value)}
      />
      <Select
        value={selectYear}
        songsData={data}
        onChange={(event) => setSelectSongYear(event.target.value)}
      />
      <CheckBox
        className={clasess.checkbox__wrapper}
        type="checkbox"
        name="isLiked"
        id="isLiked"
        checked={checked}
        onChange={() => setCheckBox(!checked)}
      />
    </div>
  );
}

export default SongsFilter;
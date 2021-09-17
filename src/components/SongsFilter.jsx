import clasess from "./UI/filter-select/Filter.module.scss";
import { useContext } from "react";
import FilterContext from "./UI/filter-select/Context";
import Input from "./UI/input/Input";
import Select from "./UI/filter-select/Select";
import CheckBox from "./UI/filter-select/CheckBox";

function SongsFilter() {
  const [
    songs,
    searchRequest,
    setSearchRequest,
    selectYear,
    setSelectSongYear,
    filterLiked,
    setCheckBox
  ] = useContext(FilterContext);

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
        songsData={songs}
        onChange={(event) => setSelectSongYear(event.target.value)}
      />
      <CheckBox
        className={clasess.checkbox__wrapper}
        type="checkbox"
        name="isLiked"
        id="isLiked"
        checked={filterLiked}
        onChange={() => setCheckBox(!filterLiked)}
      />
    </div>
  );
}

export default SongsFilter;
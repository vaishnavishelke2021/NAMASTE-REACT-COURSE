

import "./Search.css";
import { useState } from "react";

const SearchBar = ({ listOfRes, setFilteredRes }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
    const searchFilteredRes = listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRes(searchFilteredRes);
  };

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search here..."
        v
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="searchBarBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;



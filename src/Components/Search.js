import "./Search.css";

const SearchBar = ()=>{
    return (
        <div>
            <input className="searchBar" type="text" placeholder="Search here..." />
            <button className="searchBarBtn">Search</button>
        </div>
    )
}

export default SearchBar;
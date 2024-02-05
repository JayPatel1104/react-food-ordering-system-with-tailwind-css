const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-text-field"
        placeholder="Find your favourite Resturants"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;

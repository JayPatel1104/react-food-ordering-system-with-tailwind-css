import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  // //normal javasript variable
  // let listOfRestaurants = resList;

  //state variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [filterButton, setFilterButton] = useState("Top Rated Resturants");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json)
    setlistOfRestaurants(
      //optinal chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      //optinal chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-text-field"
          id="txtSearchText"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Find your favourite Resturants"
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            if (filteredList.length == 0) {
              setFilteredResturants(listOfRestaurants);
              return;
            }
            setFilteredResturants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filteredList = null;
            if (filterButton === "Top Rated Resturants") {
              setFilterButton("Show All Resturants");
              filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.4
              );
              setFilteredResturants(filteredList);
            } else {
              setFilterButton("Top Rated Resturants");
              setFilteredResturants(listOfRestaurants);
            }
          }}
        >
          {filterButton}
        </button>
      </div>

      <div className="rest-container">
        {filteredResturants.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

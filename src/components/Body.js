import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  // //normal javasript variable
  // let listOfRestaurants = resList;

  //state variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  //two arguments, first is arrow function, second is dependency array
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
          placeholder="Find your favourite Resturants"
        />
        <button
          className="search-button"
          onClick={() => {
            const serach = document.getElementById("txtSearchText").value;
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.name == serach
            );
            if (filteredList.length != 0) setlistOfRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

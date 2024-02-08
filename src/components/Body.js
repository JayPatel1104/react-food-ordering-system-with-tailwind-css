import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
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
  if (listOfRestaurants.length === 0) {
    return <div class="loader"></div>;
  }
  return (
    <div className="body">
      <SearchBar></SearchBar>
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

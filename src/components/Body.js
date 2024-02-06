import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // //normal javasript variable
  // let topRatedRests = resList;

  //state variable
  const [topRatedRests, setTopRatedRests] = useState(resList);

  return (
    <div className="body">
      <SearchBar></SearchBar>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filteredList = topRatedRests.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setTopRatedRests(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="rest-container">
        {topRatedRests.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

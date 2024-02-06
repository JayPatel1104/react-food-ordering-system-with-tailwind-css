import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import Filter from "./Filter";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <SearchBar></SearchBar>
      <Filter></Filter>

      <div className="rest-container">
        {resList.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

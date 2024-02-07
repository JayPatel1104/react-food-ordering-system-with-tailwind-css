import { REST_IMG_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="rest-card">
      <h2 className="rest-name heading">{name}</h2>
      <img
        src={REST_IMG_URL + cloudinaryImageId}
        alt={{ name } + "image"}
        className="rest-img"
      />
      <h4 className="rest-name">{costForTwo}</h4>
      <h4 className="rest-name">{cuisines.join(", ")}</h4>
      <h4 className="rest-name">
        <i className="fa-regular fa-star" id="icon-star"></i>
        {avgRating}
      </h4>
      <h4 className="rest-name">
        <i className="fa-regular fa-clock" id="icon-timer"></i>
        {String(resData.info.sla.deliveryTime) + " minutes"}
      </h4>

      {/* <h1 className="rest-name"> {props.name} </h1>
  
        
        <h3 className="rest-name">{props.cuisine}</h3>
        
         */}
    </div>
  );
};

export default ResturantCard;

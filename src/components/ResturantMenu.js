import React, { useEffect } from "react";
import useResturantInfo from "../utils/useResturantInfo.js";
import { REST_IMG_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantInfo(resId);

  if (restInfo === null) return <Shimmer></Shimmer>;
  console.log(restInfo?.cards[0]?.card.card.info);

  const { name, cuisines, areaName, avgRating, cloudinaryImageId } =
    restInfo?.cards[0]?.card?.card?.info;

  return (
    <div style={{ margin: "100px" }}>
      <div>
        <img
          src={REST_IMG_URL + cloudinaryImageId}
          alt={"image"}
          className="rest-img"
          style={{ height: "200px", width: "200px" }}
        />
        <h1 className="rest-name">{name}</h1>
        <h3 className="rest-name">{cuisines.join(", ")}</h3>

        <h3 className="rest-name">{areaName}</h3>

        <h4 className="rest-name">
          <i className="fa-regular fa-star" id="icon-star"></i>
          {avgRating}
        </h4>
        <h4 className="rest-name">
          <i className="fa-regular fa-clock" id="icon-timer"></i>
          {String(restInfo.cards[0].card.card.info.sla.deliveryTime) +
            " minutes"}
        </h4>
      </div>

      <table>
        <tbody>
          {restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (res) => (
              <tr key={res.card.info.id}>
                <td className="rest-name">
                  {res.card.info.isVeg ? (
                    <img
                      src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png"
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  ) : (
                    <img
                      src="https://openclipart.org/image/800px/304247"
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}

                  <h2>{res.card.info.name}</h2>
                  <h3>
                    {"₹" + Number(res.card.info.defaultPrice) / 100 + ".00"}
                  </h3>
                  <h4>{res.card.info.description}</h4>
                </td>
                <td>
                  <img
                    src={REST_IMG_URL + res.card.info.imageId}
                    alt={"image"}
                    className="rest-img"
                    style={{ height: "200px", width: "200px" }}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResturantMenu;

import React from "react";
import { useEffect, useState } from "react";
import { REST_IMG_URL } from "../utils/constants";

const ResturantMenu = () => {
  const [restDetails, setRestDetails] = useState([]);
  const [restMenu, setRestMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=74453&submitAction=ENTER"
    );
    const json = await data.json();
    setRestMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setRestDetails(json.data.cards[0].card.card.info);
    console.log(restMenu);
  };

  return (
    <div style={{ margin: "10px" }}>
      <img
        src={REST_IMG_URL + restDetails.cloudinaryImageId}
        alt={"image"}
        className="rest-img"
        style={{ height: "200px", width: "200px" }}
      />
      <h1 className="rest-name">{restDetails.name}</h1>
      <h2 className="rest-name">{restDetails.areaName}</h2>
      <h3 className="rest-name">{restDetails.avgRating}</h3>
      {restMenu.map((res) => console.log(res.card.info.name))}
      <table>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ResturantMenu;

import { useEffect } from "react";
import { REST_MENU_URL } from "./constants";

const useResturantMenu = (resId) => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU_URL + resId);
    const json = await data.json();

    return json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card.itemCards;

    // setRestDetails(json.data.cards[0].card.card.info);
  };
};

export default useResturantMenu;

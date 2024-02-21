import { useEffect, useState } from "react";
import { REST_MENU_URL } from "./constants";

const useResturantInfo = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU_URL + resId);
    console.log(REST_MENU_URL + resId);
    const json = await data.json();

    setRestInfo(json.data.cards);
    console.log(restInfo);
  };

  return restInfo;
};

export default useResturantInfo;

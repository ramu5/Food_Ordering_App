import { useEffect, useState } from "react";
import MENU_URL from "../utils/constants";

const useRestaurentMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurentMenu;

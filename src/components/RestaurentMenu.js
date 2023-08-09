import useRestaurentMenu from "../utils/useRestaurentMenu";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurentMenu(resid);
  console.log(resid);

  //==========>>>>>>>>>>>>>This for custom hook i did
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resid);
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };
  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  //   const name = resInfo?.cards[0]?.card?.card?.info?.name;
  //   const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ");
  //   const costfortwo = resInfo?.cards[0]?.card?.card?.info?.costForTwo / 100;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
      ?.itemCards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards ||
    [];
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")}-- {costForTwoMessage}
      </h3>
      <ul>
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} --------{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
                - INR
              </li>
            );
          })
        ) : (
          <h3> No data available </h3>
        )}
      </ul>
      {/* <ul>
        {itemCards.map((item) => {
          if(itemCards.title=='Recommended'|| itemCards.type =="CATEGORY_TYPE_RECOMMENDED"){
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -------- {item.card.info.price / 100 || item.card.info.defaultPrice/100} - INR
            </li>
          );
          }
          else {return null}
        })}
      </ul> */}
    </div>
  );
};
export default RestaurentMenu;

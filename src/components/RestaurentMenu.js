import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurentMenu(resid);
  // console.log(resid);

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

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
      ?.itemCards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards ||
    [];

  const categorys =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className=" font-bold my-6 text-2xl ">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")}-- {costForTwoMessage}
      </h3>
      {/* <ul>
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
      </ul> */}
      {categorys.map((category) => {
        return <RestaurentCategory data={category?.card?.card} />;
      })}
    </div>
  );
};
export default RestaurentMenu;

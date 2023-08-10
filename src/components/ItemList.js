import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className=" font-bold text-sm ">{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultprice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-0.35 mx-12 bg-black  rounded-lg text-white shadow-mdg">
                Add +
              </button>
            </div>
            <img
              alt=""
              src={CDN_URL + item.card.info.imageId}
              className="w-full "
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

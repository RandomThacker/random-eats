import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import { CDN_URL, MENU_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";

function MenuHeader({ resInfo }) {
  const {
    name,
    cloudinaryImageId,
    areaName,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
  } = resInfo ?? {};

  return (
    <div className="flex justify-between ">
      <div className="flex flex-col">
        <h1 className="font-bold pt-5 text-xl">{name}</h1>
        <p className="text-gray-800">{cuisines}</p>
        <p className="text-gray-800">{areaName}</p>
        <div className="flex pt-4 gap-3 pb-8">
          <p className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {costForTwoMessage}
          </p>
          <p className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {sla?.slaString ?? "Rating Not Available"}
          </p>
        </div>
      </div>

      <div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="image"
          className="bg-red-100 w-24 h-24 rounded-md"
        />
        <p className="flex px-2 py-2 align-middle justify-center text-white bg-green-800 rounded-md">
          {avgRating}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

const MenuPage = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    const res = json.data.cards[0].card.card.info;
    const menu =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
   
    setResInfo(res);
    setResMenu(menu);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-[100%] justify-center flex">
      <div className="w-[70%] align-middle ">
        <MenuHeader resInfo={resInfo} />
        {resMenu.map((index) => (
          <Menu key={index?.card?.info?.id} resMenu={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

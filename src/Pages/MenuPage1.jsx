import React, { useEffect, useState } from "react";
import { CDN_URL, MENU_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import { AccordionCustomIcon } from "../Components/Accordian";
import MenuHeader from "../Components/MenuHeader";
import ShimmerMenu from "../Components/ShimmerMenu";

const MenuPage1 = () => {
  const [data, setData] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  let i = 1;
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    const res = json?.data?.cards;
    const restrauntInfo = json?.data;
    console.log(restrauntInfo);
    setResInfo(restrauntInfo);
    const last = res[res.length - 1];
    const categories = last?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setData(categories);
  };
  useEffect(() => {
    fetchData();
  }, []);


if(data.length == 0){
    return(
      <ShimmerMenu/>
    )
  }

  return (
    <div className="w-[100%] justify-center flex">
      <div className="w-[70%] align-middle ">
      <MenuHeader resInfo={resInfo} />
      {data.map((item, i) => {
        i++;
        return (
          <AccordionCustomIcon
            key={i}
            data={item?.card?.card?.itemCards}
            title={item?.card?.card?.title}
            val={i}
          />
        );
      })}
    </div>
    </div>
  );
};

export default MenuPage1;

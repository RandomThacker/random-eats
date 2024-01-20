import React, { useEffect, useState } from "react";
import {MENU_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import { AccordionCustomIcon } from "../Components/Accordian";
import MenuHeader from "../Components/MenuHeader";
import ShimmerMenu from "../Components/ShimmerMenu";

const MenuPage1 = () => {
    const [data, setData] = useState([]);
    const [resInfo, setResInfo] = useState([]);
    const { resId } = useParams();
  
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(restaurantInfo);


        // if (restaurantInfo) {
        //   console.log(restaurantInfo);
        // } else {
        //   console.log("Restaurant info is undefined.");
        // }
  
        const categories = json?.data?.cards?.[json.data.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (c) =>
            c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
  
        setData(categories);
  
        
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

  
    useEffect(() => {
      fetchData();
    }, []);
  
    // Only render the component if restaurantInfo is available
    if (data.length === 0) {
      return <ShimmerMenu />;
    }
    
  
    return (
      <div className="w-[100%] justify-center flex">
        <div className="w-[70%] align-middle ">
          {/* <MenuHeader resInfo={resInfo} /> */}
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
  
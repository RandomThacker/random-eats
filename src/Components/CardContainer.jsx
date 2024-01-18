import React, { useEffect, useState, useContext } from "react";
import { FoodCard } from "./FoodCard";
import { Button } from "@material-tailwind/react";
import { ShimmerContainer } from "./ShimmerContainer";
import { SearchContext } from "../Utils/SearchContext";

function CardContainer() {
  const { search, searchClicked, setSearchClicked } = useContext(SearchContext);
  console.log(search);
  console.log(searchClicked)

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchButton = () => {
    const filterData = data.filter((e) =>
      e.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterData);
  };

  const handleAll = () => {
    setFilteredData(data);
  };

  const handleTopRated = () => {
    const filterData = data?.filter((res) => res?.info?.avgRating > 4.2);
    setFilteredData(filterData);
  };

  const handleDelivery = () => {
    let filterData = data?.filter((res) => res?.info?.sla?.deliveryTime < 30);
    setFilteredData(filterData);
  };

  const handleVeg = () => {
    const filterData = data?.filter((res) => res?.info?.veg == true);
    setFilteredData(filterData);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.046593829792437&lng=77.6189301353937&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    const updatedData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredData(updatedData);
    setData(updatedData);
  };

  useEffect(() => {
    searchButton();
    setSearchClicked(false);
  }, [searchClicked]);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);
  const filterData = data[0]?.info?.cuisines.join(", ");
  // const newD=data[0]?.info?.cuisines?.filter((e)=>e.includes("burger"))
  const newD=data.flatMap((restaurant) => restaurant?.info?.cuisines)

  // const newD = filterData.toString()
  // console.log(filterData);
  // console.log(newD);

  //Conditional Rendering
  if (data?.length === 0) {
    return <ShimmerContainer />;
  }

  return (
    <>
      <div className="flex w-[100%] px-24 gap-10 flex-col py-10">
        <h1 className="text-2xl font-bold py-2">
          What do you want to eat?
        </h1>
        <div className="flex gap-10">
        <div className="flex flex-col align-middle justify-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
            className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
          />
          <h1 className="text-center font-semibold text-brown-600">North Indian</h1>
        </div>

        <div className="flex flex-col align-middle justify-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
            className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
          />
          <h1 className="text-center font-semibold text-brown-600">Cakes</h1>
        </div>

        <div className="flex flex-col align-middle justify-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
            className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
          />
          <h1 className="text-center font-semibold text-brown-600">Pizza</h1>
        </div>

        <div className="flex flex-col align-middle justify-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
            className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
          />
          <h1 className="text-center font-semibold text-brown-600">Dosa</h1>
        </div>

        <div className="flex flex-col align-middle justify-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
            className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
          />
          <h1 className="text-center font-semibold text-brown-600">Chineese</h1>
        </div>
      </div>
      </div>

      <h1 className="text-2xl font-bold px-24 pt-16 pb-12">
        Top restraunts around you
      </h1>
      <div className="flex w-[100%] px-24 gap-10">
        <Button variant="filled" onClick={handleAll}>
          All
        </Button>
        <Button variant="filled" onClick={handleTopRated}>
          Top Rated
        </Button>
        <Button variant="filled" onClick={handleDelivery}>
          Fast Delivery
        </Button>
        <Button variant="filled" onClick={handleVeg}>
          Pure Veg
        </Button>
      </div>
      <div className="w-[100%] flex flex-wrap gap-16 justify-center py-10">
        {filteredData.map((index) => (
          <FoodCard key={index?.info?.id} resData={index} />
        ))}
      </div>
    </>
  );
}

export default CardContainer;

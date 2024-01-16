import React from "react";
import { Button } from "@material-tailwind/react";
import { MENU_IMAGE } from "../Utils/constants";

function Menu({ resMenu }) {
  // console.log(resMenu);

  // Check if resMenu and its nested properties exist before destructuring
  const { name, price, description, imageId } = resMenu?.card?.info ?? {};

  return (
    <>
      <div className="w-[100%] bg-gray-300 h-[1.5px] block mx-auto"></div>
      <div className="flex justify-between align-middle">
        <div className="flex py-5 flex-col w-[65%]">
          {/* Use the extracted variables with nullish coalescing operator to handle undefined values */}
          <h1 className="font-bold text-lg">{name ?? "Name Not Available"}</h1>
          <p className="text-base">Rs {price / 100 ?? "Price Not Available"}</p>
          <p className="text-gray-700 text-sm pt-3 ">
            {description ?? "Description Not Available"}
          </p>
        </div>
        <div className="flex flex-col justify-center relative">
          <img src={MENU_IMAGE + imageId} className="h-28 w-28 rounded-md object-cover" />
          <Button className="h-10 w-[100%] absolute bottom-1">ADD</Button>
        </div>
      </div>
    </>
  );
}

export default Menu;

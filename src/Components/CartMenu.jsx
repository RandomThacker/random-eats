import React from "react";
import { Button } from "@material-tailwind/react";
import { MENU_IMAGE } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../Utils/cartSlice";

function CartMenu({ resMenu }) {

  // Check if resMenu and its nested properties exist before destructuring
  const { name, defaultPrice, description, imageId, price } = resMenu?.card?.info ?? {};

  const dispatch = useDispatch();

  const handleAddItem = (resMenu) => {
    //dispatch an action
    dispatch(removeItem(resMenu));
  };

  return (
    <>
      <div className="w-[100%] bg-gray-300 h-[1.5px] block mx-auto"></div>
      <div className="flex justify-between align-middle">
        <div className="flex py-5 flex-col w-[65%] justify-around">
          <h1 className="font-bold text-lg">{name ?? "Name Not Available"}</h1>
          <p className="text-base">Rs {(defaultPrice || price) / 100 ?? "Price Not Available"}</p>
          <Button
            className="w-28 hover:bg-red-600 bg-transparent shadow-none mt-4 hover:text-white border-red-600 border-2 text-red-600"
            onClick={() => handleAddItem(resMenu)}
          >
            Remove
          </Button>
          
        </div>
        <div className="flex flex-col py-3 justify-center relative">
          <img
            src={MENU_IMAGE + imageId}
            className="h-32 w-32 rounded-md object-cover"
          />
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default CartMenu;

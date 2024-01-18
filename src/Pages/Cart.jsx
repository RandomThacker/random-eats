import React from "react";
import ShimmerMenu from "../Components/ShimmerMenu";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Components/Menu";
import { Button } from "@material-tailwind/react";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems == 0) {
    return (
      <div className="h-[90vh] w-100%">
        <img src="https://i.ibb.co/M8KfLZd/Group-16.png" className="w-[100%] h-[80%] bg-cover"/>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center m-4 p-4">Cart</h1>
        <Button className="block mx-auto" onClick={handleClearCart}>
          Clear Cart
        </Button>
        <div className="w-6/12 m-auto">
          {cartItems.map((item) => (
            <Menu resMenu={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default Cart;

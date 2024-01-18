import React from "react";
import ShimmerMenu from "../Components/ShimmerMenu";
import { useDispatch, useSelector } from "react-redux";
import CartMenu from "../Components/CartMenu";
import { Button } from "@material-tailwind/react";
import { clearCart } from "../Utils/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems == 0) {
    return (
      <div className="h-[90vh] w-100%">
        <img
          src="https://i.ibb.co/M8KfLZd/Group-16.png"
          className="w-[100%] h-[80%] bg-cover"
        />
      </div>
    );
  } else {
    return (
      <div className="w-[100%] min-h-[90vh]">
        <div className="flex w-[100%] justify-center items-center bg-gray-300">
        <div className="flex justify-between py-10 w-[60%] px-28 m-auto">
        <h1 className="text-2xl font-bold">Total Cart Item : {cartItems.length}</h1>
        <div className="flex gap-2">
        <Button className="bg-black" onClick={handleClearCart}>
          Clear Cart
        </Button>
        <Link to="/checkout">
        <Button className="bg-green-500 flex items-center justify-center align-middle" onClick={handleClearCart}>
          Checkout
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

        </Button>
        </Link>
        </div>
        
        </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[60%] px-32 m-auto">
            {cartItems.map((item) => (
              <CartMenu resMenu={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;

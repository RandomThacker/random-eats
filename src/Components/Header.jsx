import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Badge,
  List,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LOGO_URL } from "../Utils/constants";
import { SearchContext } from "../Utils/SearchContext";
import { useSelector } from "react-redux";

function NavList() {
  const { search, setSearch, setSearchClicked } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <div className="peer flex h-full w-full justify-between rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        <input
          type="search"
          placeholder="Search Restraunts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-t-transparent !border-transparent bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-transparent focus:border-2  focus:!border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-transparent"
        />
        <Link to="#food">
          <button
            className="select-none rounded-[50%] bg-gray-900 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              setSearchClicked(true);
              navigate("/"); // Use useNavigate instead of history.push
              setTimeout(() => {
                navigate("/#food"); // Use useNavigate instead of history.push
              }, 0);
            }}
          >
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto my-5 max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to="/">
          <img src={LOGO_URL} className="h-[5em]" />
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NavLink to="/cart">
            <Button variant="text" size="sm" color="blue-gray">
              <Badge
                content={cartItems.length}
                className={cartItems.length === 0 ? "hidden" : ""}
              >
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Badge>
            </Button>
          </NavLink>
          <Button variant="gradient" size="sm">
            Github
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <NavLink to="/cart" className="sm:hidden block">
            <Button variant="text" size="sm" color="blue-gray">
              <Badge
                content={cartItems.length}
                className={cartItems.length === 0 ? "hidden" : ""}
              >
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Badge>
            </Button>
          </NavLink>
      </div>
      
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center justify-between gap-2 lg:hidden">

          <Button variant="gradient" className="w-[100%]">
            Github
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

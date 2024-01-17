import React, { useEffect, useState,useContext } from 'react'
import { FoodCard } from './FoodCard'
import { Button, } from "@material-tailwind/react";
import { ShimmerContainer } from './ShimmerContainer';
import { SearchContext } from '../Utils/SearchContext'



function CardContainer() {
  const {search,searchClicked ,setSearchClicked} = useContext(SearchContext)
  console.log(search);
  console.log(searchClicked)

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
 


  const searchButton = ()=> {
    const filterData = data.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredData(filterData)
  }

  const handleAll = ()=> {
    setFilteredData(data)
  }

  const handleTopSearch = ()=> {
    const filterData = data?.filter((res)=>res?.info?.avgRating > 4.2)
    setFilteredData(filterData)
  }

  const handleDelivery = ()=> {
    let filterData = data?.filter((res)=>res?.info?.sla?.deliveryTime < 30)
    setFilteredData(filterData)
  }

  const handleVeg = ()=> {
    const filterData = data?.filter((res)=>res?.info?.veg == true)
    setFilteredData(filterData)
  }

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.046593829792437&lng=77.6189301353937&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data?.json()
    const updatedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setFilteredData(updatedData)
    setData(updatedData)
}

useEffect(()=>{
  searchButton();
  setSearchClicked(false)
},[searchClicked])

  useEffect(()=>{
    fetchData()
  },[])

  

  //Conditional Rendering
  if(data?.length === 0){
    return(
      <ShimmerContainer/>
    )
  }
  
  return (
    <>
    <div className='flex w-[100%] px-24 gap-10'>

    {/* <div className="peer flex h-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}

          className=" border-t-transparent !border-transparent bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-transparent focus:border-2  focus:!border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-transparent"
        />
        
        <button
        className="select-none rounded-[50%] bg-gray-900 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" onClick={()=>{
          const filterData = data.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase()))
          setFilteredData(filterData)
        }}>

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
      </div> */}

    <Button variant="filled" onClick={handleAll}>All</Button>
    <Button variant="filled" onClick={handleTopSearch}>Top Rated</Button>
    <Button variant="filled" onClick={handleDelivery}>Fast Delivery</Button>
    <Button variant="filled" onClick={handleVeg}>Pure Veg</Button>

    </div>
    <div className='w-[100%] flex flex-wrap gap-16 justify-center py-10'>
      
    {
            filteredData.map((index)=>(
            <FoodCard key = {index?.info?.id} resData = {index}/>
            )
            )
        }


    </div>
    </>
  )
}

export default CardContainer

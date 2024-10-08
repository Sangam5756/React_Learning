import { ReastaurentMenu_Url } from "./Constants";
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { setData } from "./redux/menuSlice";

const useRestaurentMenu = (id) => {
  const [resInfo, setResinfo] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const data = await response.json();
    console.log(data)
    const filter =(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    // const filterdata = data.filter((res) => res.restaurantId === id);
    setResinfo(data);
    dispatch(setData(data))
  };

  return resInfo;
};


export default useRestaurentMenu;
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import axios from "axios";
import { useEffect } from "react";
// import { food_list } from "../../assets/assets";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log("getting data from here: : " , food_list);
  useEffect(()=>{
    const check  = async() =>{
      let response = await axios.get("http://localhost:4000");
      console.log(response.data);
    }
    check();
  })
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

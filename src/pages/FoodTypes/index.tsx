import React from "react";
import { FoodTypesContainer } from "./styles";

import pizzaImg from "../../assets/images/pizza.png";
import sodaImg from "../../assets/images/soda.png";
import dessertImg from "../../assets/images/dessert.png";
import portionImg from "../../assets/images/portion_food.png";
import UserHeader from "../../components/UserHeader";

const FoodTypes: React.FC = () => {
  return (
    <FoodTypesContainer>
      <UserHeader />

      <div id="foods-type-content">
        <h4 id="foods-header">O que deseja?</h4>

        <div id="foods">
          <div className="single-food">
            <img src={pizzaImg} alt="pizzas" id="pizza" />
            <div id="food-name">PIZZAs</div>
          </div>

          <div className="single-food">
            <img src={sodaImg} alt="bebidas" id="bebidas" />
            <div id="food-name">BEBIDAs</div>
          </div>

          <div className="single-food">
            <img src={dessertImg} alt="sobremesas" id="sobremesas" />
            <div id="food-name">SOBREMESAS</div>
          </div>

          <div className="single-food">
            <img src={portionImg} alt="petiscos" id="petiscos" />
            <div id="food-name">PETISCOS</div>
          </div>
        </div>
      </div>
    </FoodTypesContainer>
  );
};

export default FoodTypes;

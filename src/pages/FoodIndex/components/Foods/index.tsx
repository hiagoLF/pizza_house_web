import React from "react";

import redLeftArrow from "../../../../assets/icons/arrow_left_red.png";
import FoodItem from "../../../../components/FoodItem";
import { FoodsContainer } from "./styles";

const pizzas = new Array(100).fill({
  name: "Calabresa",
  description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
  price: "37,00",
  status: 'canceled'
});

const Foods: React.FC = () => {
  return (
    <FoodsContainer>
      <div id="header">
        <img src={redLeftArrow} alt="back" />
        <h3>Pizzas</h3>
      </div>

      <div id="foods">
        {pizzas.map(({name, description, price, status}, index) => (
          <FoodItem key={index} title={name} description={description} price={price} status={status}/>
        ))}
      </div>
    </FoodsContainer>
  );
};

export default Foods;

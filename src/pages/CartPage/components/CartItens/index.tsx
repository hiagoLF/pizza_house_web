import React from "react";

import redLeftArrow from "../../../../assets/icons/arrow_left_red.png";
import FoodItem from "../../../../components/FoodItem";
import { CartItensContainer } from "./styles";

const cartItens = new Array(2).fill({
  name: "Pastel de Frango",
  description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
  price: "37,00",
  status: 'justDelete'
});

const CartItens: React.FC = () => {
  return (
    <CartItensContainer>
      <div id="header">
        <img src={redLeftArrow} alt="back" />
        <h3>Carrinho</h3>
      </div>

      <div id="foods">
        {cartItens.map(({name, description, price, status}, index) => (
          <FoodItem key={index} title={name} description={description} price={price} status={status}/>
        ))}
      </div>
    </CartItensContainer>
  );
};

export default CartItens;

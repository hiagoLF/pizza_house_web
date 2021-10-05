import React from "react";

import redLeftArrow from "../../../../assets/icons/arrow_left_red.png";
import FoodItem from "../../../../components/FoodItem";
import { OrderItensContainer } from "./styles";

const cartItens = [
  {
    name: "Pastel de Frango",
    description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    status: "row",
  },
  {
    name: "Pastel de Frango",
    description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    status: "preparing",
  },
  {
    name: "Pastel de Frango",
    description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    status: "delivered",
  },
  {
    name: "Pastel de Frango",
    description: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    status: "canceled",
  },
];

const CartItens: React.FC = () => {
  return (
    <OrderItensContainer>
      <div id="header">
        <img src={redLeftArrow} alt="back" />
        <h3>Pedidos Fechados</h3>
      </div>

      <div id="foods">
        {cartItens.map(({ name, description, price, status }, index) => (
          <FoodItem
            key={index}
            title={name}
            description={description}
            price={price}
            status={status as any}
          />
        ))}
      </div>
    </OrderItensContainer>
  );
};

export default CartItens;

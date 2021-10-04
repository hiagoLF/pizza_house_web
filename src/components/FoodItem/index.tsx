import React from "react";
import { FoodItemComponent } from "./styles";
import cartIcon from '../../assets/icons/shop_cart.png'
import StatusToast from "../StatusToast";

const image =
  "https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg";

export type FoodItemProps = {
  title: string;
  description: string;
  price: string;
  status?: "cart" | "row" | "preparing" | "delivered" | "canceled";
};


const FoodItem: React.FC<FoodItemProps> = ({
  title,
  description,
  price,
  status,
}) => {
  return (
    <FoodItemComponent>
      <img src={image} alt="pizza" />

      <div id="texts">
        <h3>
          {title}
          {status === 'cart' && (
            <img src={cartIcon} alt="No carrinho" />
          )}
          {(status !== 'cart' || status)  && (
            <StatusToast status={status}/>
          )}
        </h3>

        <div id="description">{description}</div>

        <div id="value">R$ {price}</div>
      </div>
    </FoodItemComponent>
  );
};

export default FoodItem;

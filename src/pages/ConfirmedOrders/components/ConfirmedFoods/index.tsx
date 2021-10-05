import React, { useState } from "react";
import HiddenMenu from "../../../../components/HiddenMenu";
import OrderedFoodCard from "../../../../components/OrderedFoodCard";

import { ConfirmedFoodsContainer } from "./styles";

const orderedFoods = [
  {
    foodTitle: "Calabresa",
    details: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    customer: "Ricardo Teixeira",
    table: 3,
  },
  {
    foodTitle: "Calabresa",
    details: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    customer: "Ricardo Teixeira",
    table: 3,
  },
];

const ConfirmedFoods: React.FC = () => {
  const [pizzaMenuHidden, setPizzaMenuHidden] = useState(true);
  const [sodaMenuHidden, setSodaMenuHidden] = useState(true);
  const [dessertsMenuHidden, setDesertMenuHidden] = useState(true);
  const [portionMenuHidden, setPortionMenuHidden] = useState(true);

  const handlePizzaHeaderClick = () => setPizzaMenuHidden(!pizzaMenuHidden);
  const handleSodaHeaderClick = () => setSodaMenuHidden(!sodaMenuHidden);
  const handleDessertsHeaderClick = () => setDesertMenuHidden(!dessertsMenuHidden);
  const handlePortionHeaderClick = () => setPortionMenuHidden(!portionMenuHidden);

  return (
    <ConfirmedFoodsContainer>
      <HiddenMenu
        title="Pizzas"
        hidden={pizzaMenuHidden}
        onHeaderClick={handlePizzaHeaderClick}
      >
        {orderedFoods.map((food, key) => (
          <OrderedFoodCard
            foodTitle={food.foodTitle}
            details={food.details}
            customer={food.customer}
            table={food.table}
            status={'to-deliver'}
          />
        ))}
      </HiddenMenu>

      <HiddenMenu
        title="Bebidas"
        hidden={sodaMenuHidden}
        onHeaderClick={handleSodaHeaderClick}
      >
        {orderedFoods.map((food, key) => (
          <OrderedFoodCard
            foodTitle={food.foodTitle}
            details={food.details}
            customer={food.customer}
            table={food.table}
            status={'to-deliver'}
          />
        ))}
      </HiddenMenu>

      <HiddenMenu
        title="Sobremesas"
        hidden={dessertsMenuHidden}
        onHeaderClick={handleDessertsHeaderClick}
      >
        {orderedFoods.map((food, key) => (
          <OrderedFoodCard
            foodTitle={food.foodTitle}
            details={food.details}
            customer={food.customer}
            table={food.table}
            status={'to-deliver'}
          />
        ))}
      </HiddenMenu>

      <HiddenMenu
        title="Petiscos"
        hidden={portionMenuHidden}
        onHeaderClick={handlePortionHeaderClick}
      >
        {orderedFoods.map((food, key) => (
          <OrderedFoodCard
            foodTitle={food.foodTitle}
            details={food.details}
            customer={food.customer}
            table={food.table}
            status={'to-deliver'}
          />
        ))}
      </HiddenMenu>
    </ConfirmedFoodsContainer>
  );
};

export default ConfirmedFoods;

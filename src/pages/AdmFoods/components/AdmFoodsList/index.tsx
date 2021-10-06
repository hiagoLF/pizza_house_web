import { useState } from "react";
import AdmSingleFood from "../../../../components/AdmSingleFood";
import HiddenMenu from "../../../../components/HiddenMenu";
import PlusButton from "../../../../components/PlusButton";
import { AdmFoodsListContainer } from "./styles";

const orderedFoods = [
  {
    name: "Calabresa",
    details: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    image:
      "https://img.itdg.com.br/tdg/images/recipes/000/000/324/323149/323149_original.jpg",
  },
  {
    name: "Calabresa",
    details: "Calabresa, tomate, queijo mussarela, molho, orégano e milho",
    price: "37,00",
    image:
      "https://img.itdg.com.br/tdg/images/recipes/000/000/324/323149/323149_original.jpg",
  },
];

const AdmFoodsList: React.FC = () => {
  const [pizzaMenuHidden, setPizzaMenuHidden] = useState(true);
  const [sodaMenuHidden, setSodaMenuHidden] = useState(true);
  const [dessertsMenuHidden, setDesertMenuHidden] = useState(true);
  const [portionMenuHidden, setPortionMenuHidden] = useState(true);

  const handlePizzaHeaderClick = () => setPizzaMenuHidden(!pizzaMenuHidden);
  const handleSodaHeaderClick = () => setSodaMenuHidden(!sodaMenuHidden);
  const handleDessertsHeaderClick = () =>
    setDesertMenuHidden(!dessertsMenuHidden);
  const handlePortionHeaderClick = () =>
    setPortionMenuHidden(!portionMenuHidden);

  return (
    <AdmFoodsListContainer>
      <PlusButton />

      <HiddenMenu
        title="Pizzas"
        hidden={pizzaMenuHidden}
        onHeaderClick={handlePizzaHeaderClick}
      >
        {orderedFoods.map((food, index) => (
          <AdmSingleFood
            title={food.name}
            details={food.details}
            price={food.price}
            image={food.image}
            key={index}
          />
        ))}
      </HiddenMenu>

      <HiddenMenu
        title="Bebidas"
        hidden={sodaMenuHidden}
        onHeaderClick={handleSodaHeaderClick}
      >
        {orderedFoods.map((food, index) => (
          <AdmSingleFood
            title={food.name}
            details={food.details}
            price={food.price}
            image={food.image}
            key={index}
          />
        ))}{" "}
      </HiddenMenu>

      <HiddenMenu
        title="Sobremesas"
        hidden={dessertsMenuHidden}
        onHeaderClick={handleDessertsHeaderClick}
      >
        {orderedFoods.map((food, index) => (
          <AdmSingleFood
            title={food.name}
            details={food.details}
            price={food.price}
            image={food.image}
            key={index}
          />
        ))}{" "}
      </HiddenMenu>

      <HiddenMenu
        title="Petiscos"
        hidden={portionMenuHidden}
        onHeaderClick={handlePortionHeaderClick}
      >
        {orderedFoods.map((food, index) => (
          <AdmSingleFood
            title={food.name}
            details={food.details}
            price={food.price}
            image={food.image}
            key={index}
          />
        ))}{" "}
      </HiddenMenu>
    </AdmFoodsListContainer>
  );
};

export default AdmFoodsList;

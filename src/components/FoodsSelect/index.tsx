import React, { useState } from "react";
import { FoodsSelectContainer } from "./styles";
import blueArrowDownIcon from "../../assets/icons/arrow_down_blue.png";

const foodsToSelect = [
  {
    label: "Pizza",
    value: "pizza",
  },
  {
    label: "Bebida",
    value: "soda",
  },
  {
    label: "Petisco",
    value: "portion",
  },
  {
    label: "Sobremesa",
    value: "dessert",
  },
];

const FoodsSelect: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [foodSelected, setFoodSelected] = useState(0);

  const handleSelectClick = () => setIsSelectOpen(!isSelectOpen);

  return (
    <FoodsSelectContainer isSelectOpen={isSelectOpen}>
      <h3>Tipo</h3>
      <button id="select" type="button" onClick={handleSelectClick}>
        <img src={blueArrowDownIcon} alt="Selecionar" />
        <span>{foodsToSelect[foodSelected].label}</span>
      </button>
      <div id="select-options">
        {foodsToSelect.map(({ label }, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setFoodSelected(index);
              setIsSelectOpen(false);
            }}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </FoodsSelectContainer>
  );
};

export default FoodsSelect;

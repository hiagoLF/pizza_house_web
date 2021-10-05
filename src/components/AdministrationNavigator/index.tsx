import React from "react";

import { AdministrationNavigatorContainer } from "./styles";

const buttons = [
  {
    name: "Pendentes",
  },
  {
    name: "Confirmados",
  },
  {
    name: "Clientes",
  },
  {
    name: "Refeições",
  },
  {
    name: "Funcionários",
  },
];

type AdministrationNavigatorProps = {
  positionSelected: number;
};

const AdministrationNavigator: React.FC<AdministrationNavigatorProps> = ({
  positionSelected,
}) => {
  return (
    <AdministrationNavigatorContainer>
      {buttons.map(({ name }, index) => (
        <div
          className={(index === positionSelected ? "selected" : "unselected") + " navigator-item"}
          key={index}
        >
          {name}
        </div>
      ))}
    </AdministrationNavigatorContainer>
  );
};

export default AdministrationNavigator;

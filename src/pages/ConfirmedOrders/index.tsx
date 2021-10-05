import React from "react";
import AdministrationHeader from "../../components/AdministrationHeader";
import AdministrationNavigator from "../../components/AdministrationNavigator";
import ConfirmedFoods from "./components/ConfirmedFoods";

import { ConfirmedOrdersContainer } from "./styles";

const ConfirmedOrders: React.FC = () => {
  return (
    <ConfirmedOrdersContainer>
      <AdministrationHeader />
      <AdministrationNavigator positionSelected={1}/>
      <ConfirmedFoods />
    </ConfirmedOrdersContainer>
  );
};

export default ConfirmedOrders;

import React from "react";
import AdministrationHeader from "../../components/AdministrationHeader";
import AdministrationNavigator from "../../components/AdministrationNavigator";
import PendingFoods from "./components/PendingFoods";

import { PendingOrdersContainer } from "./styles";

const PendingOrders: React.FC = () => {
  return (
    <PendingOrdersContainer>
      <AdministrationHeader />
      <AdministrationNavigator positionSelected={0}/>
      <PendingFoods />
    </PendingOrdersContainer>
  );
};

export default PendingOrders;

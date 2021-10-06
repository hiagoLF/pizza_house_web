import React from "react";
import AdministrationHeader from "../../components/AdministrationHeader";
import AdministrationNavigator from "../../components/AdministrationNavigator";
import AdmFoodsList from "./components/AdmFoodsList";
import { AdmFoodsContainer } from "./styles";

const AdmFoods: React.FC = () => {
  return (
    <AdmFoodsContainer>
      <AdministrationHeader />
      <AdministrationNavigator positionSelected={3} />
      <AdmFoodsList />
    </AdmFoodsContainer>
  );
};

export default AdmFoods;

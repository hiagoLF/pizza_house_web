import React from "react";
import AdministrationHeader from "../../components/AdministrationHeader";
import GoBackButton from "../../components/GoBackButton";
import NewFoodForm from "./components/NewFoodForm";

import { NewFoodsPageContainer } from './styles';

const NewFoodsPage: React.FC = () => {
  return (
    <NewFoodsPageContainer>
      <AdministrationHeader />
      <GoBackButton title="Nova Refeição" />
      <NewFoodForm />
    </NewFoodsPageContainer>
  );
};

export default NewFoodsPage;
